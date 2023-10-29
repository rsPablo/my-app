import "./App.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { CENTERS } from "./constants/names";
import MarkerClusterGroup from "react-leaflet-cluster";
function App() {
  const customIcon = new L.Icon({
    iconUrl: require("./location.svg").default,
    iconSize: new L.Point(40, 47),
  });

  const markers = CENTERS.map((center: any) => {
    return (
      <Marker position={[center.lat, center.long]} icon={customIcon}>
        <Popup>
          <div>
            <p>{center.name}</p>
            <p>{center.denomina}</p>
          </div>
        </Popup>
      </Marker>
    );
  });

  return (
    <MapContainer
      className="container-map"
      center={[37.6, -4.5]}
      zoom={8}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MarkerClusterGroup>{markers}</MarkerClusterGroup>
    </MapContainer>
  );
}

export default App;
