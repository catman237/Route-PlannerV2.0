import "./App.scss";
import Header from "./Components/Header";
import InputForm from "./Components/InputForm";
import RouteContainer from "./Components/RouteContainer";
import { DirectionsService, useJsApiLoader } from '@react-google-maps/api'


function App() {

  const { isLoaded ,loadError } = useJsApiLoader({
    googleMapsApiKey: 'this should be key from .env file'
  })

  return (
    <div className="App">
      <Header />
      <InputForm />
      <RouteContainer />

      <DirectionsService />
    </div>
  );
}

export default App;
