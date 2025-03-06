import "../styles/location.css";
import React from "react";
import map from '../assets/images/map.png';


const Location= () => {

    return(
        <div className="location">
               <section className="text-center py-5">
      <button className="btn btn-light  rounded-pill px-3 mb-2" style={{color:'#414EC6',backgroundColor:'#F5F5FF',border:'1px solid #D7DEFE'}}>
        Our Location
      </button>
      <h2 className="fw-bold">We are WORLDWIDE</h2>
      <p className="text-muted mx-auto w-95">
      We help our clients from almost every part of the world.
      </p>
    </section>
       <div className="map">
        <img src={map} className="img-fluid" />
       </div>

       <div className="container my-5">
      <div className="row text-center">
        {/* United States */}
        <div className="col-md-4">
          <h5 className="fw-bold">United States</h5>
          <p>Building X, Street Y, Baltimore MD</p>
          <a href="#" className="text-primary text-decoration-none">
            Find Us
          </a>
        </div>

        {/* Pakistan */}
        <div className="col-md-4">
          <h5 className="fw-bold">Pakistan</h5>
          <p>Building X, Street Y, Lahore PK</p>
          <a href="#" className="text-primary text-decoration-none">
            Find Us
          </a>
        </div>

        {/* Whole Earth */}
        <div className="col-md-4">
          <h5 className="fw-bold">Whole Earth.</h5>
          <p>Mon-Fri from 8am to 5pm (PST).</p>
          <a href="tel:+1555000000" className="text-primary text-decoration-none">
            +1 (555) 000-0000
          </a>
        </div>
      </div>
    </div>


        </div>
    
    
    );


}

export default Location;