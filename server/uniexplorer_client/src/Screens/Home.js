import React, { useEffect, useState } from "react";
import axios from "axios";

import Lander from "../Components/Landing";
import UniverseCard from "../Components/UniverseCards";
const HomeScreen = () => {
  // => State to save all universes
  const [Universes, setUniverses] = useState([]);
  const [loading, setloading] = useState(false);

  
  
 

  // => Fetch all blogs
  useEffect(() => {
    const GetUniverses = async () => {
      setloading(true);
      const { data } = await axios.get("/api/universe");
      console.log(data);
      setUniverses(data);
      setloading(false);
    };
    GetUniverses();

  }, []);
  return loading ? (
    "Loading"
  ) : (
    <>
      <div className="mainwrapper">
        <Lander />
        <h2 className="text-center welcometxt mt-4">Universes</h2>
        <div className="row container">
          {Universes.map((e, i) => {
            return (
              <>
        
                <UniverseCard
                  key={e._id}
                  name={e.name}
                  images={e.images}
                  description={e.description}
                />
              </>
            );
          })}
        </div>
      </div>
    
    </>
  );
};

export default HomeScreen;
