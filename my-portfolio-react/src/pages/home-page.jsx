import { useRef, useEffect } from "react";
//= ================== Layout ==================//
import DarkTheme from "../layouts/Dark";
//= ================== Components ==================//
import Navbar from "../components/Navbar";
import Intro from "../components/sections/intro-banner";
import Features from "../components/Features";
import SelfIntro from "../components/sections/self-intro";
import Works from "../components/sections/works";
import Skills from "../components/Skills-circle2";
import ServicesBottom from "../components/Services6";
import Testimonials from "../components/Testimonials2";
import Clients from "../components/Clients1";
import Blogs from "../components/Blogs-three-column1";
import About from "../components/sections/about";
import ContactFull from "../components/sections/contact-full";
import CallToAction from "../components/sections/call-to-action";
import Contact from "../components/sections/contact";
import ContactInfo from "../components/sections/contact-info";
import Footer from "../components/sections/footer";

const Homepage = () => {
  const navbarRef = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    var navbar = navbarRef.current;

    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    });

    window.addEventListener("load", () => {
      document.body.classList.add('dark2');
      var slidHeight = document.querySelector('.fixed-slider').getBoundingClientRect().height;
      document.querySelector('.main-content').style.setProperty('margin-top', slidHeight + 'px');
    })

    // return () => {
    //   document.body.classList.remove('dark2');
    // }
  }, [navbarRef]);

  return (
    <DarkTheme>
      <Navbar nr={navbarRef} lr={logoRef} />
      <Intro />
      <div className="main-content">
        <Features />
        <Works />
        <About/>
        <ContactFull/>
        <Footer noSubBG />
      </div>
    </DarkTheme>
  );
};

export default Homepage;