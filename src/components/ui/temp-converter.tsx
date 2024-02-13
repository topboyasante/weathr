import { useEffect, useState } from "react";
import { Switch } from "./switch";

type Props = {
  initialTemperature: number | undefined;
};

function TemperatureConverter({ initialTemperature }: Props) {
  const [isFahrenheit, setIsFahrenheit] = useState(true);
  const [temperature, setTemperature] = useState(initialTemperature);

  useEffect(() => {
    if (isFahrenheit) {
      setTemperature(initialTemperature);
    } else {
      setTemperature((initialTemperature! - 32) * (5 / 9));
    }
  }, [initialTemperature, isFahrenheit]);

  return (
    <div className="flex flex-col md:flex-row gap-2 justify-between md:items-center">
      <p className="text-sm">
        <span className="font-semibold leading-none tracking-tight">
          Temperature:{" "}
        </span>
        <span className="text-neutral-500">
          {temperature!.toFixed(2)} {isFahrenheit ? " °F" : " °C"}
        </span>
      </p>
      <div className="flex items-center gap-3">
        <p className="text-sm">Celsius</p>
        <Switch
          onCheckedChange={() => {
            setIsFahrenheit(!isFahrenheit);
          }}
        />
      </div>
    </div>
  );
}

export default TemperatureConverter;
