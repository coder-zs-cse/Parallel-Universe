import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
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
      <h1>Hello ji!!</h1>
      {Universes.map((e) => {
        return (
          <>
            <Link to={`/getuniverse/${e._id}`}>
              <div key={e._id}>
                <h6>{e.name}</h6>
                <p>{e.description}</p>
              </div>
            </Link>
          </>
        );
      })}
    </>
  );
};

export default HomeScreen;
