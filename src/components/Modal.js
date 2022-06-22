import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ModalCard from "./ModalCard";

function Modal() {
  const [launch, setLaunch] = useState([]);
  useEffect(() => {
    const url = "https://api.spacexdata.com/v3/launches/";
    fetch(url)
      .then((resp) => resp.json())
      .then((resp) => setLaunch(resp));
  }, []);

  return (
    <>
      {launch.map((space) => (
        <ModalCard
          flight_number={space.flight_number}
          launch_year={space.launch_year}
          mission_name={space.mission_name}
          article_link={space.links.article_link}
          launch_date={space.launch_date}
          details={space.details}
        />
      ))}
    </>
  );
}

export default Modal;
