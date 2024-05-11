import { LatLngLiteral } from "leaflet";
import { useEffect, useRef, useState } from "react";
import { Marker, Popup, useMap } from "react-leaflet";
import { reverseGeoCoding } from "../utils/Api/api";
type MapMarkerProps = {
  position: LatLngLiteral;
};
export default function MapMarker({ position }: MapMarkerProps) {
  const map = useMap();
  const addressRef = useRef<Address | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    map.flyTo(position);

    const fetchAddress = async () => {
      addressRef.current = await reverseGeoCoding(position);
      setIsLoading(false);
    };

    fetchAddress();
    console.log(addressRef.current);
  }, [map, position]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Marker position={position}>
      <Popup>
        {addressRef.current != null
          ? addressRef.current.freeformAddress
          : "Address not available"}
      </Popup>
    </Marker>
  );
}
