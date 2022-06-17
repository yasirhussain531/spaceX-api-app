import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar';
import "./App.css";
import RocketItem from './components/RocketItem';


function Rocket() {
  const [rocket, setRocket] = useState([]);
    useEffect(()=>{
      const url ='https://api.spacexdata.com/v4/rockets';
      fetch(url).then(resp1=>resp1.json())
      .then(resp1=>setRocket(resp1))
    },[])
    return (
      <div className="App">
            <Navbar/>
            <img src="https://www.logo.wine/a/logo/SpaceX/SpaceX-White-Dark-Background-Logo.wine.svg" className="d-block mx-auto" style={{width: "350px"}}/>
            <div>
        <div className='container my-5'>
          <h2>SpaceX Rockets</h2> 
          
          {
              rocket.map(
                (space) =>
                <RocketItem article_link={space.article_link} launch_date={space.mass.kg} mission_name = {space.name} details = {space.description} flickr_images={space.flickr_images[1]} />
                )
              } 
      </div>
    </div>
  
      </div>
    );
}

export default Rocket;