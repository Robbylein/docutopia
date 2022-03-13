import './Leaflet.css';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { Directus } from '@directus/sdk';
import { useAsync } from "react-async";
import L from 'leaflet';

const directus = new Directus('https://zeitgeist.healing-the-planet.one');

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

const loadPlaces = () => directus.items('Places').readByQuery({ meta: 'total_count' });

function Leaflet() {
  console.log("Leaflet");
  const { data, error, isPending } = useAsync({ promiseFn: loadPlaces})

  if (isPending) {
    console.log("Loading...");
  }
  if (error) {
    console.log("Something went wrong: "+ error.message);
  }
  if (data){
    console.log(data.data);
    return (
      <div id="map" className="Leaflet">

        <MapContainer style={{ height: "100vh",   width: "100vw" }} center={[51.3, 9.6]} zoom={8}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {(data.data).map((place) => (
            <Marker key={place.id} position={[place.position.coordinates[1],place.position.coordinates[0]]}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    );
  }
  else { //if bad response from api
    return (
      <div id="map" className="Leaflet">
        <MapContainer style={{ height: "900px", width: "97.5%" }} center={[51.505, -0.09]} zoom={13}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </MapContainer>
      </div>
    );
  }
}

/*
async function setMarker() {
  var places = await directus.items('Places').readByQuery({ meta: 'total_count' });
  console.log(places.data);
  return places.data;
  for(let place of places.data) {
    console.log(place.position.coordinates[0]+" "+place.position.coordinates[1])
  }

}*/

export default Leaflet;
