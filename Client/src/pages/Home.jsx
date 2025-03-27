import React from "react";
import HeroSection from "../components/HeroSection.jsx";
import AboutSection from "../components/AboutSection.jsx";
import HeroServices from "../components/HeroServices.jsx";
import DifferentiatorsSection from "../components/DifferentiatorsSection.jsx";
import DigitalServices from "../components/DigitalServices.jsx";
import PRAgencySection from "../components/PRAgencySection.jsx";
import HeroBlog from "../components/HeroBlog.jsx";
import TestimonialsMarquee from "../components/TestimonialsMarquee.jsx";
import HeroFooter from "../components/HeroFooter.jsx";
import AdvertisingSection from "../components/AdvertisingSection.jsx";
import DigitalMarketingTraining from "../components/DigitalMarketingTraining.jsx";
import Clients from "../components/Clients.jsx";
import NewServices from "../components/NewServices.jsx";
import StartAProject from "../components/StartAProject.jsx";
import CaseStudy from "../components/CaseStudy.jsx";
import Marquee from "../components/Marquee.jsx";
import Info from "../components/Info.jsx";
import WeWorkWith from "../components/WeWorkWith.jsx";
import LetsTalk from "../components/LetsTalk.jsx";
const Home = () => {
  return (
    <div>
      <HeroSection />
      <Clients />
     <NewServices />
      <Marquee />
      <StartAProject />
      <CaseStudy />
      <Info />
      <WeWorkWith />
      <LetsTalk />

      {/* old */}
      {/* <AboutSection /> */}
      {/* <HeroServices /> */}
      {/* <DifferentiatorsSection /> */}
      <TestimonialsMarquee />

      <DigitalServices />
      {/* <PRAgencySection /> */}
      {/* <DigitalMarketingTraining /> */}
      {/* <AdvertisingSection /> */}

      {/* <HeroFooter /> */}
      {/* <HeroBlog /> */}
    </div>
  );
};

export default Home;
