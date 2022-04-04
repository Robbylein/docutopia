import L from 'leaflet';
import createSvg from './createSvg'


const EventIcon = new L.divIcon({
  html: `${createSvg('square','#6d398b','rgba(50,50,50,0.4)')}<img class="svg-event-icon" src="${process.env.PUBLIC_URL}/calendar-days-solid.svg" />`,
  iconAnchor: [17,40],
  popupAnchor: [-2,-45],
  iconSize: new L.Point(32, 46),
  className: "leaflet-data-marker",
});
const PlaceIcon = new L.divIcon({
  html: `${createSvg('circle','#f18e1c','rgba(50,50,50,0.4)')}<img class="svg-place-icon" src="${process.env.PUBLIC_URL}/circle-solid.svg" />`,
  iconAnchor: [17,40],
  popupAnchor: [-2,-45],
  iconSize: new L.Point(32, 46),
  className: "leaflet-data-marker",
});

export {EventIcon,PlaceIcon} ;
