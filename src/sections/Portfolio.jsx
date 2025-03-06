import "../styles/portfolio.css";
import React from "react";
import { FiPlayCircle } from "react-icons/fi";
import product from '../assets/images/portfolio.png';
import linepattern from '../assets/images/Linepattern.png';

const Portfolio= () => {

    return(
        <div className="portfolio">
            <section className="text-center py-5">
      <button className="btn btn-light  rounded-pill px-3 mb-2" style={{color:'#414EC6',backgroundColor:'#F5F5FF',border:'1px solid #D7DEFE'}}>
        Our Portfolio
      </button>
      <h2 className="fw-bold">Products We Have Worked On</h2>
      <p className="text-muted mx-auto w-75">
        Powerful, self-serve product and growth analytics to help you convert, engage, and
        retain more users. Trusted by over 4,000 startups.
      </p>
    </section>
    <section className="container py-5">
      <div className="row align-items-center justify-content-between">
        {/* Left Side - Text Content */}
        <div className="col-md-5">
          <h2 className="fw-semibold">Product # 1</h2>
          <p className="text-muted" style={{}}>
            Whether you have a team of 2 or 200, our shared team inboxes keep
            everyone on the same page and in the loop. Leverage automation to
            move fast, while always giving customers a human, helpful
            experience.
          </p>
          {/* Buttons */}
          <div className="d-flex gap-3">
            <button className="btn  d-flex align-items-center " style={{border:'1px solid #D0D5DD', color:'#344054' ,fontWeight:'600'}}>
              <FiPlayCircle className="me-2" style={{color:'#344054'}}/> Demo
            </button>
            <button className="btn btn-primary portfolio-btn" style={{backgroundColor:'#1D315F'}}>Learn more</button>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="col-md-5 text-center portfolio-img">
        <img
            src={product}
            alt="Product Dashboard"
            className="img-fluid rounded product"
          />
        <img
            src={linepattern}
            alt="Lines"
            className="img-fluid rounded line-pattern"
          />
         
        </div>
      </div>
    </section>
    <section className="container py-5">
      <div className="row align-items-center justify-content-between  mobile-reverse">
        
        <div className="col-md-5 text-center portfolio-img">
        <img
            src={product}
            alt="Product Dashboard"
            className="img-fluid rounded product"
          />
        <img
            src={linepattern}
            alt="Lines"
            className="img-fluid rounded line-pattern-left"
          />
         
        </div>
        <div className="col-md-5">
          <h2 className="fw-semibold">Product # 2</h2>
          <p className="text-muted" style={{}}>
          Keep your customers in the flow by embedding help articles right on your website. With Beacon, they never have to leave the page to find an answer.
          </p>
          
          <div className="d-flex gap-3">
            <button className="btn  d-flex align-items-center" style={{border:'1px solid #D0D5DD', color:'#344054' ,fontWeight:'600'}}>
              <FiPlayCircle className="me-2" style={{color:'#344054'}}/> Demo
            </button>
            <button className="btn btn-primary portfolio-btn" style={{backgroundColor:'#1D315F'}}>Learn more</button>
          </div>
        </div>
      </div>
    </section>
    <section className="container py-5">
      <div className="row align-items-center justify-content-between">
        {/* Left Side - Text Content */}
        <div className="col-md-5">
          <h2 className="fw-semibold">Product # 3</h2>
          <p className="text-muted" style={{}}>
          Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.
          </p>
          {/* Buttons */}
          <div className="d-flex gap-3">
            <button className="btn  d-flex align-items-center" style={{border:'1px solid #D0D5DD', color:'#344054' ,fontWeight:'600'}}>
              <FiPlayCircle className="me-2" style={{color:'#344054'}}/> Demo
            </button>
            <button className="btn btn-primary portfolio-btn" style={{backgroundColor:'#1D315F'}}>Learn more</button>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="col-md-5 text-center portfolio-img">
        <img
            src={product}
            alt="Product Dashboard"
            className="img-fluid rounded product"
          />
        <img
            src={linepattern}
            alt="Lines"
            className="img-fluid rounded line-pattern"
          />
         
        </div>
      </div>
    </section>

        </div>
    );


}

export default Portfolio;