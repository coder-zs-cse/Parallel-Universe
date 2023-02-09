import React from 'react'
import { Link } from "react-router-dom";
const UniverseCard=({_id,name,images,description})=>{
    return(
        <>
                 <Link
                  className="Card col-12 col-md-3 col-lg-3 uni_card"
                  to={`/getuniverse/${_id}`}
                >
                    <div className="bg1"></div>
                    <div className="bg2"></div>
                    <div className="bg3"></div>
                  <div>
                    <h6 className="header">{name}</h6>
                    <img
                      src={images[0].link}
                      alt={images[0].alt}
                      className="img-fluid uni_img"
                    />
                    <p>{description.slice(0, 200) + "...."}</p>
                  </div>
                </Link>
        </>
    )
}

export default UniverseCard;