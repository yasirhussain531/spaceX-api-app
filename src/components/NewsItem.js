import React from "react";
import { Link } from "react-router-dom";

function NewsItem(props) {
  return (
    <div className="container ">
      <>
        <div className="card mb-3 mx-auto customcard">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src="http://craftsnippets.com/articles_images/placeholder/placeholder.jpg"
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{props.mission_name}</h5>
                <p className="card-text">{props.details}</p>
                <p className="card-text">Launch Year:{props.launch_date}</p>
                <Link to="/Modal" type="button" class="btn btn-primary">
                  Launch Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default NewsItem;
