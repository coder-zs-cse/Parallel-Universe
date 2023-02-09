import axios from "axios";
import React, { useEffect, useState } from "react";

const ViewUniverse = (props) => {
  // => State to save _id of universe use rhas requested
  const [Universe, setUniverse] = useState({});
  const [loading, setloading] = useState(false);
  const [Error, setError] = useState("");
  useEffect(() => {
    console.log(props);
    const GetUniverse = async () => {
      try {
        setloading(true);
        const { data } = await axios.get(`/api/universe/${props.match.params.id}
                  `);
        console.log(data);
        setUniverse(data);
        setloading(false);
      } catch (e) {
        console.log(e);
        setError("Unable to fetch Universe");
        setloading(false);
      }
    };
    GetUniverse();
  }, [props]);
  return loading ? (
    "loading"
  ) : Error !== "" ? (
    <>
      <h1>{Error}</h1>
    </>
  ) : (
    <>
      <h1>{Universe.name}</h1>
    </>
  );
};

export default ViewUniverse;
