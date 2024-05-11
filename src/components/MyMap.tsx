import { MapContainer, TileLayer } from "react-leaflet";
import { LatLngLiteral } from "leaflet";
import MapMarker from "./MapMarker";
import { useEffect } from "react";
import { reverseGeoCoding } from "../utils/Api/api";
type MyMapProps = {
  position: LatLngLiteral;
  className?: string;
};

export default function MyMap({ position, className }: MyMapProps) {
  useEffect(() => {
    // fromLatLng(position.lat, position.lng).then();
    reverseGeoCoding(position);
  }, []);

  return (
    <MapContainer
      center={position}
      zoom={13}
      scrollWheelZoom={true}
      className={className}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MapMarker position={position} />
    </MapContainer>
  );
}
