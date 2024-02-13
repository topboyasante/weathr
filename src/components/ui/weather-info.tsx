import { useFetchWeather } from "@/hooks/useFetch";
import { IResponse } from "@/types";
import Loader from "./loader";
import { Separator } from "./separator";
import TemperatureConverter from "./temp-converter";
import { useWeatherStore } from "../zustand";

function WeatherInfo() {
  const { isLoading } = useFetchWeather<IResponse>("weather_data", "Accra");

  const data = useWeatherStore((state) => state.currentWeatherData);

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <p className="text-sm">
            <span className="font-semibold leading-none tracking-tight">
              Location
            </span>{" "}
            :{" "}
            <span className="text-neutral-500">
              {data?.name}, {data?.sys.country}
            </span>
          </p>
          <Separator className="my-5" />
          <div>
            <p className="text-sm mb-2">
              <span className="font-semibold leading-none tracking-tight">
                Weather Description
              </span>{" "}
              :{" "}
              <span className="text-neutral-500 capitalize">
                {data?.weather[0].description}
              </span>
            </p>
            <p className="text-sm mb-2">
              <span className="font-semibold leading-none tracking-tight">
                Wind Speed
              </span>{" "}
              : <span className="text-neutral-500">{data?.wind.speed} m/s</span>
            </p>
            <p className="text-sm mb-2">
              <span className="font-semibold leading-none tracking-tight">
                Humidity
              </span>{" "}
              :{" "}
              <span className="text-neutral-500">
                {data?.main.humidity} g/m<sup>3</sup>
              </span>
            </p>
            <p className="text-sm mb-2">
              <span className="font-semibold leading-none tracking-tight">
                Pressure
              </span>{" "}
              :{" "}
              <span className="text-neutral-500">{data?.main.pressure} Pa</span>
            </p>
            <div className="mb-2">
              <TemperatureConverter initialTemperature={data?.main.temp} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default WeatherInfo;
