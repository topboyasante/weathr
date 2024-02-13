import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@radix-ui/react-separator";
import LocationInput from "./location-input";
import WeatherInfo from "./weather-info";

function WeatherCard() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Weathr</CardTitle>
        <CardDescription>
          Get the details of the current weather.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <WeatherInfo />
        <Separator className="my-5" />
        <LocationInput />
      </CardContent>
    </Card>
  );
}

export default WeatherCard;
