import { useToast } from "@/components/ui/use-toast";
import { useWeatherStore } from "@/components/zustand";
import { IResponse } from "@/types";
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";

function useMutationRequest<T>(key?: string) {
  const { toast } = useToast();
  const updateWeatherData = useWeatherStore((state) => state.updateWeatherData);

  const {
    mutate: sendMessage,
    data: messageResponse,
    isPending: isSendingMessage,
    error: messageError,
  } = useMutation<IResponse, AxiosError, T>({
    mutationKey: [`${key}`],
    mutationFn: async (payload: T) => {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${payload}&APPID=${
          import.meta.env.VITE_WEATHER_API_KEY
        }`
      );
      return {
        name: res.data.name,
        sys: {
          country: res.data.sys.country,
          id: res.data.sys.id,
        },
        coord: {
          lon: res.data.coord.lon,
          lat: res.data.coord.lat,
        },
        main: {
          temp: res.data.main.temp,
          temp_max: res.data.main.temp_max,
          temp_min: res.data.main.temp_min,
          humidity: res.data.main.humidity,
          pressure: res.data.main.pressure,
        },
        visibility: res.data.visibility,
        weather: [
          {
            description: res.data.weather[0].description,
          },
        ],
        wind: {
          deg: res.data.wind.deg,
          speed: res.data.wind.speed,
        },
      };
    },
    onSuccess: (res) => {
      updateWeatherData(res);
    },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      onError: (error: AxiosError<any, any>) => {
        console.log(error.response)
        toast({
          title: "Error",
          description: error.response?.data.message || error,
          variant:"destructive",
        });
      },
  });

  return {
    sendMessage,
    messageResponse,
    isSendingMessage,
    messageError,
  };
}

export default useMutationRequest;
