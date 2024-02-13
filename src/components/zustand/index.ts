import { IResponse } from "@/types";
import { create } from "zustand";

type Store = {
  currentWeatherData: IResponse;
  updateWeatherData: (data: IResponse) => void;
};

const useWeatherStore = create<Store>()((set) => ({
  currentWeatherData: {
    name: "",
    sys: {
      country: "",
      id: 0,
    },
    coord: {
      lon: 0,
      lat: 0,
    },
    main: {
      temp: 0,
      temp_max: 0,
      temp_min: 0,
      humidity: 0,
      pressure: 0,
    },
    visibility: 0,
    weather: [
      {
        description: "",
      },
    ],
    wind: {
      deg: 0,
      speed: 0,
    },
  },
  updateWeatherData(data) {
    set(() => {
      return {
        currentWeatherData: data,
      };
    });
  },
}));

export { useWeatherStore };
