import "./App.css";

import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./Components/Navbar";
import Routing from "./Components/Routing";
import { Router } from "react-router-dom";
import Footer from "./Components/Footer";
function App() {
  return (
    <div className="App">
      <Navbar />
    
        <Routing />
        <Footer/>
   
    </div>
  );
}

export default App;
