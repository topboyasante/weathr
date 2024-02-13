export interface IResponse {
  name: string;
  sys: { country: string; id: number };
  coord: { lon: number; lat: number };
  main: {
    temp: number;
    temp_max: number;
    temp_min: number;
    humidity: number;
    pressure: number;
  };
  visibility: number;
  weather: {
    description: string;
  }[];
  wind: {
    deg: number;
    speed: number;
  };
}

export interface IRequest {
  location: string;
}

export interface IError {
  response: {
    data: {
      message: string;
    };
  };
}
