import "./App.css";
import { LatLngLiteral } from "leaflet";
import MyMap from "./components/MyMap";
import { useEffect, useState } from "react";

function App() {
  const [position, setPosition] = useState<LatLngLiteral>({
    lat: 51.505,
    lng: -0.09,
  });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(({ coords }) => {
        setPosition({
          lat: coords.latitude,
          lng: coords.longitude,
        });
      });
    }
    return () => {};
  }, []);

  return (
    <div className=" w-full h-full flex justify-center items-center">
      <MyMap
        position={position}
        className="w-[600px] h-[400px] overflow-hidden"
      />
    </div>
  );
}

export default App;
