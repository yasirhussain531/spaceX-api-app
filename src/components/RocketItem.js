import React from "react";
import { Link } from "react-router-dom";

function rocketItem(props) {
  return (
    <>
      {/* <div className="container ">
        <>
          <div className="card" style="width: 18rem;">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
            <h5 className="card-title">{props.mission_name}</h5>
            <p className="card-text">{props.details}</p>
            <p className="card-text">Launch Year:{props.launch_date}</p>
              <a href="/" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </>
      </div> */}

      <div className='container '>
        <>
        <div className="card mb-3 mx-auto customcard">
  <div className="row g-0">
    <div className="col-md-4">
      <img src={props.flickr_images} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{props.mission_name}</h5>
        <p className="card-text">{props.details}</p>
        <p className="card-text">Weight: {props.launch_date} KG</p>
        <Link to="/ModalRocket" type="button" class="btn btn-primary" >Launch Details</Link>
        
      </div>
    </div>
  </div>
</div>
        </>
    </div>
    </>
  );
}

export default rocketItem;
