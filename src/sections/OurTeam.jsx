import "../styles/ourteam.css";
import React from "react";
import img1 from '../assets/images/img1.png';
import img2 from '../assets/images/img2.png';
import img3 from '../assets/images/img3.png';
import { FiArrowUpRight } from "react-icons/fi";

import { FaXTwitter, FaLinkedin, FaDribbble } from "react-icons/fa6";


const OurTeam= () => {

    return(
        <div className="ourteam">
               <section className="text-center py-5">
      <button className="btn btn-light  rounded-pill px-3 mb-2" style={{color:'#414EC6',backgroundColor:'#F5F5FF',border:'1px solid #D7DEFE'}}>
        Our Team
      </button>
      <h2 className="fw-bold">Meet Our Team</h2>
      <p className="text-muted mx-auto">
      Our philosophy is simple — hire a team of diverse, passionate people and foster a <br></br>culture that empowers you to do your best work.</p>
      <div className="d-flex gap-3 justify-content-center">
                  <button className="btn  d-flex align-items-center" style={{border:'1px solid #D0D5DD', color:'#344054' ,fontWeight:'600'}}>
                  Read our principles
                  </button>
                  <button className="btn btn-primary" style={{backgroundColor:'#1D315F'}}>We’re hiring!</button>
                </div>
    </section>

    <div className="team-container">
      <div className="main-card">
        <img src={img1} alt="Faizan Ahmad" className="team-img" />
        <div className="overlay">
            <div className="overlay-container">
          <div style={{display:'flex' ,justifyContent:'space-between',alignItems:'center'}}><h4>Faizan Ahmad</h4><div className="icons"><FiArrowUpRight /></div></div>
          <p className="title">Founder & CEO</p>
          <p className="description">
            Former co-founder of Opendoor. Early staff at Apple and Google.
          </p>
          <div className="icons">
            <FaXTwitter />
            <FaLinkedin />
            <FaDribbble />
          </div>
          </div>
        </div>
      </div>

      <div className="side-cards">
        <div className="small-card">
          <img src={img2} alt="Abdullah Sarfaraz" className="small-img" />
          <div className="overlay">
          <div className="overlay-container">
          <div style={{display:'flex' ,justifyContent:'space-between' ,alignItems:'center'}}><h5>Abdullah Sarfaraz</h5><div className="icons"><FiArrowUpRight /></div></div>
            
            <p className="title">Co-Founder</p>
            </div>
          </div>
        </div>
        <div className="small-card">
          <img src={img3} alt="Annie Stanley" className="small-img" />
          <div className="overlay">
          <div className="overlay-container">
          <div style={{display:'flex' ,justifyContent:'space-between',alignItems:'center'}}><h5>Annie Stanley</h5><div className="icons"><FiArrowUpRight /></div></div>
            
            <p className="title">Product Manager</p>
            </div>
          </div>
        </div>
      </div>
    </div>

       


        
        
        </div>
    
    );


}

export default OurTeam;