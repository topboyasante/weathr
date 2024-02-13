import { useWeatherStore } from "@/components/zustand";
import { IResponse } from "@/types";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";

export function useFetchWeather<T>(key: string, location: string) {
  const updateWeatherData = useWeatherStore((state) => state.updateWeatherData);

  const { isLoading, data, isError, error } = useQuery<
    IResponse,
    AxiosError,
    T
  >({
    queryKey: [key],
    queryFn: async () => {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${
          import.meta.env.VITE_WEATHER_API_KEY
        }`
      );
      const results = {
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
      updateWeatherData(results);
      return results;
    },
  });

  return {
    isLoading,
    data,
    isError,
    error,
  };
}
