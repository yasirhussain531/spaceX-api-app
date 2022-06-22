import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import RocketItem from "./components/RocketItem";
import News from "./components/News";

function Rocket() {
  const [rocket, setRocket] = useState([]);
  const [btnReload, setBtnReload] = useState(false);

  useEffect(() => {
    fetch("https://api.spacexdata.com/v3/rockets")
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        setRocket(resp);
      })
      .catch(() => {
        document.getElementById("error").innerHTML =
          '  We\'re Sorry , " The  API Failed To Load " Please Refresh The Page ';
        setBtnReload(true);
      });
  });

  return (
    <div className="App">
      <Navbar />
      <img
        src="https://www.logo.wine/a/logo/SpaceX/SpaceX-White-Dark-Background-Logo.wine.svg"
        className="d-block mx-auto"
        style={{ width: "350px" }}
      />
      <News heading ="SpaceX Rocket" />
      {btnReload ? (
        <button
          type="button"
          className="btn btn-primary d-block mx-auto"
          onClick={() => window.location.reload()}
        >
          Refresh Page
        </button>
      ) : (
        " "
      )}
      {rocket.map((space) => (
        <RocketItem
          article_link={space.article_link}
          launch_date={space.mass.kg}
          mission_name={space.name}
          details={space.description}
          flickr_images={space.flickr_images[1]}
        />
      ))}
    </div>
  );
}

export default Rocket;
