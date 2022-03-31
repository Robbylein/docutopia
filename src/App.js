import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import NavBar from './Components/NavBar';
import Map from './Pages/Map';
import NotFound from './Pages/NotFound';
import Profile from './Pages/Profile';


const App = () => {



  return (
    <div className="App">
      <NavBar id="nav"/>
      <Routes>
        <Route path="/" element={<Map />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}





export default App;
