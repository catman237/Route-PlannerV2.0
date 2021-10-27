import "./App.scss";
import { useState } from "react";
import Header from "./Components/Header";
import InputForm from "./Components/InputForm";
import RouteContainer from "./Components/RouteContainer";
import { DirectionsService, useJsApiLoader } from "@react-google-maps/api";

function App() {
  const [shop, setShop] = useState("");
  const [stop, setStop] = useState("");
  const [route, setRoute] = useState([]);
  const [directionsInfo, setDirectionsInfo] = useState({});
  const [directionsWaypoints, setDirectionWayPoints] = useState([]);
  const [distances, setDistances] = useState([]);

  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: 'key goes here',
  });

  const setGoogleMapsRouteInfo = (shop, stop) => {
    const directionsWaypoints = [
      { location: stop },
      { location: "700 golden ridge rd golden co" },
      { location: "1740 30th St, Boulder, CO 80301" },
    ];

    const directionsInfo = {
      origin: shop,
      destination: shop,
      travelMode: "DRIVING",
      waypoints: directionsWaypoints,
      optimizeWaypoints: true,
      provideRouteAlternatives: false,
      avoidFerries: true,
      avoidHighways: false,
      avoidTolls: false,
    };
  };
  console.log(directionsInfo)

  return (
    <div className="App">
      <Header />
      <InputForm
        setShop={setShop}
        setStop={setStop}
        setRoute={setRoute}
        setDirectionsInfo={setDirectionsInfo}
        setDistance={setDistances}
        setGoogleMapsRouteInfo={setGoogleMapsRouteInfo}
        stop={stop}
        shop={shop}
      />
      <RouteContainer />
      {isLoaded ? (
        <DirectionsService
          options={directionsInfo}
          callback={(res) => {
            console.log(res);
          }}
        />
      ) : (
        console.log(loadError)
      )}
    </div>
  );
}

export default App;
