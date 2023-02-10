import React from "react";
import Head from "next/head";
import Script from "next/script";
import Cursor from "../components/Cursor";
import ScrollToTop from "../components/Scroll-to-top";
import LoadingScreen from "../components/Loading-Screen";
import "../styles/globals.css";
import "../styles/custom.css";
import ReactGA from 'react-ga';

const TRACKING_ID = "G-JWP3C2H0XE";
ReactGA.initialize(TRACKING_ID);

function MyApp({ Component, pageProps }) {
  return (
    <> 
      <Head>
        <title>Russell John Javier | Web Designer and Developer</title>
        <link rel="icon" href="./images/favicon.ico" />
      </Head>
      <div className="tey-cursor">
        <Cursor />
      </div>
      <ScrollToTop />
      <Component {...pageProps} />

      <Script
        strategy="beforeInteractive"
        id="wow"
        src="/js/wow.min.js"
      >
      </Script>
      <Script
        strategy="beforeInteractive"
        id="splitting"
        src="/js/splitting.min.js"
      ></Script>
      <Script id="simpleParallax" src="/js/simpleParallax.min.js"></Script>
      <Script
        strategy="beforeInteractive"
        id="isotope"
        src="/js/isotope.pkgd.min.js"
      ></Script>
      <Script
        strategy="lazyOnload" 
        id="initWow" 
        src="/js/initWow.js"
      ></Script>
    </>
  );
}

export default MyApp;
