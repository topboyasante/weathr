import WeatherCard from "../ui/weather-card";

function WeatherApp() {
  return (
    <div className="w-screen h-screen bg-[#f5f5f5] p-5">
      <div className="max-w-[500px] mx-auto h-full flex flex-col justify-center items-start">
        <WeatherCard />
      </div>
    </div>
  );
}

export default WeatherApp;
