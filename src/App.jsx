import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSection from "./sections/HeroSection";
import BrandSection from "./sections/BrandsSection";
import OurServices from "./sections/OurServices";
import WhyUs from "./sections/WhyUs";
import Portfolio from "./sections/Portfolio";
import Location from "./sections/Location";
import ContactForm from "./sections/ContactForm";
import OurTeam from "./sections/OurTeam";

function App() {
  return (
    <div id="root">
      <Header />
      <div className="main-content">
  
          <HeroSection/>
          <BrandSection/>
          <OurServices/>
          <WhyUs/>
          <Portfolio/>
          <Location/>
          <OurTeam/>
          <ContactForm/>
      
      </div>
      <Footer />
    </div>
  );
}

export default App;
