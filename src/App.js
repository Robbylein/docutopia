import './App.css';
import NavBar from './NavBar';
import Leaflet from './Leaflet';
import MySpeedDial from './MySpeedDial';


function App() {


  return (
    <div className="App">
      <NavBar id="nav"/>
      <Leaflet />
      <MySpeedDial />
    </div>
  );
}


function setMapHeight() {
  var window_height = window.innerHeight;
  var header_height = 64;
  console.log("Window: " + window_height);
  console.log("Header: " + header_height);
  document.getElementById("map").style.height = window_height - header_height + "px";
}

window.addEventListener('resize', (event) => setMapHeight())
window.addEventListener('touchmove', (event) => setMapHeight())


export default App;
