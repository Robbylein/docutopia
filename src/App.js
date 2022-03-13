import logo from './logo.svg';
import './App.css';
import Leaflet from './Leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

function App() {
  return (
    <div className="App">
      <Leaflet />
    </div>
  );
}

export default App;
