import WeatherApp from "./components/app/weather-app";
import { Provider } from "./components/provider/provider";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <Provider>
      <WeatherApp />
      <Toaster/>
    </Provider>
  );
}

export default App;
