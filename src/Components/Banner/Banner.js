import React from "react";
import "./Banner.css";

import banner from "../../Images/banner.jpg";

const Banner = () => {
  return (
    <div className="banner-container ">
      <div className="banner">
        <div className="row d-flex  align-items-center justify-content-center">
          
          <div className="col-md-5 p-2">
            <h1 className="title ">
            WELCOME TO  <br /> DREAM TRAVEL
            </h1>
            <p className=" text-center mt-5">
            Are you thinking about going on a long trip around the world, too, but don’t know how to go about planning such an endeavour? Read the article to find out a few most important things to know before going on a one-year trip around the world.
            </p>
            <button className="mt-3 about-btn">Know more</button>
          </div>
          <div className="col-md-7">
          <div className="logo-img">
              <img  src={banner} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;