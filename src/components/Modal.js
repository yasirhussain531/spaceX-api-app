import React, { useEffect, useState } from "react";
import ModalCard from "./ModalCard";


function Modal() {
  const [launch, setLaunch] = useState([]);
    useEffect(()=>{
      const url ='https://api.spacexdata.com/v3/launches';
      fetch(url).then(resp=>resp.json())
      .then(resp=>setLaunch(resp))
    },[])
    return(
        <>
         {
              launch.map(
                (space) =>
                <ModalCard flight_number={space.flight_number} launch_year={space.launch_year} mission_name = {space.mission_name} article_link = {space.links.article_link}/>
                )
              }
        </>
    )
}

export default Modal;

