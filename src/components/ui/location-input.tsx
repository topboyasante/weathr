import { IRequest } from "@/types";
import { Button } from "./button";
import { Input } from "./input";
import { useForm } from "react-hook-form";
import useMutationRequest from "@/hooks/useMutation";
import Loader from "./loader";

function LocationInput() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IRequest>();

  const { sendMessage, isSendingMessage } = useMutationRequest("weather_data");

  function onSubmit(data: IRequest) {
    sendMessage(data.location);
    reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label
          htmlFor="location"
          className="text-sm font-normal text-neutral-500"
        >
          Location
        </label>
        <Input
          placeholder="Enter a location"
          className="my-2"
          {...register("location", { required: "This field is required!" })}
        />
        {errors.location && (
          <p className="text-sm text-red-500">{errors.location?.message}</p>
        )}
      </div>
      <br />
      <Button type="submit">{isSendingMessage ? <Loader /> : "Search"}</Button>
    </form>
  );
}

export default LocationInput;
