import { useRef, useEffect } from "react";
//= ================== Layout ==================//
import DarkTheme from "../../layouts/Dark";
//= ================== Components ==================//
import Navbar from "../../components/sections/nav-bar";
import Intro from "../../components/sections/intro-banner";
import Features from "../../components/sections/features";
import Works from "../../components/sections/works";
import ContactFull from "../../components/sections/contact-full";
import Footer from "../../components/sections/footer";
import ReactGA from "react-ga";


const Homepage = () => {
  const navbarRef = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);

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
  }, [navbarRef]);

  return (
    <DarkTheme>
      <Navbar nr={navbarRef} lr={logoRef} />
      <Intro />
      <div className="main-content">
        <Features />
        <Works />
        <ContactFull/>
        <Footer noSubBG />
      </div>
    </DarkTheme>
  );
};

export default Homepage;