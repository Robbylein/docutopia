import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import Leaflet from './Leaflet';
import FloatingActionButton from './FloatingActionButton';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Leaflet />
      <FloatingActionButton />
    </div>
  );
}

export default App;
