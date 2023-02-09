import "./App.css";

import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./Components/Navbar";
import Routing from "./Components/Routing";
import { Router } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Navbar />
    
        <Routing />
   
    </div>
  );
}

export default App;
