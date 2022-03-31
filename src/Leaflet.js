import './Leaflet.css';
import 'leaflet/dist/leaflet.css';
import 'react-leaflet-markercluster/dist/styles.min.css'; // sass
import { MapContainer, TileLayer, LayerGroup,  LayersControl, Marker, Popup } from 'react-leaflet'
import { Directus } from '@directus/sdk';
import { Async } from "react-async";
import L from 'leaflet';
import MarkerClusterGroup from 'react-leaflet-markercluster';

const directus = new Directus('https://zeitgeist.healing-the-planet.one');

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

const loadPlaces = () => directus.items('Places').readByQuery({ meta: 'total_count' });
const loadEvents = () => directus.items('Events').readByQuery({ meta: 'total_count' });


function Leaflet() {
  return (
    <div id="map" className="Leaflet">
      <MapContainer style={{ height: "100vh",   width: "100vw" }} center={[51.3, 9.6]} zoom={8}>
        <LayersControl position="topright">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LayersControl.Overlay checked name="Places">
        <MarkerClusterGroup>
          <Async promiseFn={loadPlaces}>
           {({ data, error, isPending }) => {
            if (isPending) console.log("Loading...");
            if (error) console.log(`Something went wrong: ${error.message}`);
            if (data)
              return (
                (data.data).map((place) => (
                  <Marker key={place.id} position={[place.position.coordinates[1],place.position.coordinates[0]]}>
                    <Popup>
                      <h3>{place.name}</h3>
                      <p>{place.text}</p>
                    </Popup>
                  </Marker>
                ))
              )
          }}
        </Async>
      </MarkerClusterGroup>
      </LayersControl.Overlay>
      <LayersControl.Overlay checked name="Events">
      <MarkerClusterGroup>
        <Async promiseFn={loadEvents}>
         {({ data, error, isPending }) => {
          if (isPending) console.log("Loading...");
          if (error) console.log(`Something went wrong: ${error.message}`);
          if (data)
            return (
              (data.data).map((event) => (
                <Marker key={event.id} position={[event.position.coordinates[1],event.position.coordinates[0]]}>
                  <Popup>
                    <h3>{event.name}</h3>
                    <p>{event.text}</p>
                  </Popup>
                </Marker>
              ))
            )
        }}
      </Async>
    </MarkerClusterGroup>
    </LayersControl.Overlay>
      </LayersControl>
      </MapContainer>
    </div>
  )
}

export default Leaflet;
