import React from 'react';
import "./About.css"
import about from "../../Images/about.jpg"
const About = () => {
    return (
        <div className="container vision my-5">
        <h2>About Us</h2>
        <p>Traveling fosters a medium to build human connections with one another by learning about culture, food, new sites, music, and the way people live their day to day lives in different parts of the world. It's the best on-site learning a person can get. Traveling is also important for human happiness and mental health.We are here to help you</p>
       <div className="row text-center d-flex flex-column d-md-flex flex-md-row justify-content-center align-items-center  ">
           
           <div className="col-md-7">
           
           
               <div >
                   <img className="img" src={about} alt="" />
               </div>
           </div>
           <div className="col-md-5">
             <div className="row  card">
               
                   <div className="col-12 my-5  d-md-flex justify-content-center align-items-center  my-md-0 ">
                       <a href=""><i class="fas fa-box"></i></a>
                       <div className="my-5 my-md-2"> 
                       <h4 >Attractive Packages</h4>
                       <p className=" ms-5"> Choose your one and have a affordable, beautiful vacation to you dream country </p>
                       </div>
                       
                   </div>
               
           </div>
           <div className="row  card">
               
               <div className="col-12  my-5 d-md-flex justify-content-center align-items-center my-md-0 ">
                   <a href=""><i class="fas fa-hotel"></i></a>
                   <div className="my-5 my-md-2"> 
                       <h4>Hotel Reservations</h4>
                       <p className="ms-5">We are doing every possible things to make your journey safe and comfortable</p>
                    </div>
               </div>
           </div>
         
           <div className="row  card">
               
               <div className="col-12  my-5 d-md-flex justify-content-center align-items-center my-md-0">
                   <a href=""><i class="fas fa-ticket-alt"></i></a>
               
                   <div className="my-5  my-md-2"> 
                   <h4>Ticketing</h4>
                   <p className="ms-5">Our team also helping you in ticketing issues </p>
                   </div>
                   
               </div>
           </div>   
       </div>
       
    </div>
</div> 
    );
};

export default About;