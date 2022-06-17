import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import News from "./components/News";
import NewsItem from "./components/NewsItem";

function Home() {
  const [launch, setLaunch] = useState([]);
    useEffect(()=>{
      const url ='https://api.spacexdata.com/v3/launches';
      fetch(url).then(resp=>resp.json())
      .then(resp=>setLaunch(resp))
    },[])
    return (
      <div className="App">
            <Navbar/>
            <img src="https://www.logo.wine/a/logo/SpaceX/SpaceX-White-Dark-Background-Logo.wine.svg" className="d-block mx-auto" style={{width: "350px"}}/>
            <News/>
            {
              launch.map(
                (space) =>
                <NewsItem article_link={space.article_link} launch_date={space.launch_year} mission_name = {space.mission_name} details = {space.details} img = {space.links.mission_patch_small} />
                )
              }
  
      </div>
    );
}

export default Home;
