import 'leaflet/dist/leaflet.css';
import './Map.css'
import 'react-leaflet-markercluster/dist/styles.min.css'; // sass
import { MapContainer, TileLayer,  LayersControl, Marker } from 'react-leaflet'
import MarkerPopup from '../Components/Map/MarkerPopup'
import { Directus } from '@directus/sdk';
import L from 'leaflet';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import {useEffect, useState} from 'react';
import SpeedDialButton from '../Components/Map/SpeedDialButton';
import MarkerIconFactory from '../Utils/MarkerIconFactory';

const directus = new Directus('https://zeitgeist.healing-the-planet.one');

const Map = () => {
  const [places, setPlaces] = useState(null);
  const [events, setEvents] = useState(null);
  useEffect(() => {
    setMapHeight()
    directus.items('Places').readByQuery({fields: '*.Tags_id.color,*.Tags_id.id'  })
      .then(res => {
        setPlaces(res.data);
      });
    directus.items('Events').readByQuery({fields: '*.Tags_id.color,*.Tags_id.id' })
      .then(res => {
        setEvents(res.data);
      });
  },[])

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
              {places &&
                (places).map((place) => (
                  <Marker icon={MarkerIconFactory('circle','#f18e1c','RGBA(35, 31, 32, 0.2)','circle-solid')} key={place.id} position={[place.position.coordinates[1],place.position.coordinates[0]]}>
                    <MarkerPopup item={place}>
                    </MarkerPopup>
                  </Marker>
                ))
              }
            </MarkerClusterGroup>
          </LayersControl.Overlay>
          <LayersControl.Overlay checked name="Events">
            <MarkerClusterGroup>
              {events &&
                (events).map((event) => (
                  <Marker icon={MarkerIconFactory('square','#6d398b','RGBA(35, 31, 32, 0.2)','calendar-days-solid')} key={event.id} position={[event.position.coordinates[1],event.position.coordinates[0]]}>
                    <MarkerPopup item={event}>
                    </MarkerPopup>
                  </Marker>
                ))
              }
            </MarkerClusterGroup>
          </LayersControl.Overlay>
        </LayersControl>
      </MapContainer>
      <SpeedDialButton />
    </div>
  )
}

export default Map;


function setMapHeight() {
  var window_height = window.innerHeight;
  var header_height = 56;
  document.getElementById("map").style.height = window_height - header_height + "px";
}

window.addEventListener('resize', (event) => setMapHeight())
window.addEventListener('touchmove', (event) => setMapHeight())
