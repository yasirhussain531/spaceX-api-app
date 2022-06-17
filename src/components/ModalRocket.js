import React, { useEffect, useState } from "react";
import ModalRocketCard from "./ModalRocketCard";


function Rocket() {
    const [rocket, setRocket] = useState([]);
      useEffect(()=>{
        const url ='https://api.spacexdata.com/v3/rockets';
        fetch(url).then(resp1=>resp1.json())
        .then(resp1=>setRocket(resp1))
      },[])
      return (
                rocket.map(
                  (space) =>
                  <ModalRocketCard rocket_name={space.rocket_name} rocket_type={space.rocket_type} rocket_id={space.rocket_id} cost_per_launch={space.cost_per_launch} />
                  )         
      
      );
  }

export default Rocket;

