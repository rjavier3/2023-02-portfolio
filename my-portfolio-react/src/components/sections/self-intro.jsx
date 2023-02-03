/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from 'react'
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";

const Services5 = () => {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    console.clear();
  }, []);

  return (
    <section className="simpl-intro section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 offset-lg-1 md-mb50">
            <div className="img">
              <img src="/images/computer.jpg" alt="" />
            </div>
          </div>
          <div className="col-lg-5 offset-lg-1 valign">
            <div className="cont">
              <div className="sub-title">
                <h6>Who am I ?</h6>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <h3 className="mb-30 fw-700">My passion is<br /> creating website</h3>
              <p>It all began when I was born, as digital technology was just starting to gain mainstream popularity. Some individuals were skeptical and believed that investing in it would result in homelessness or even death within just two years. However, my mother had faith in its potential so the moment she gave birth to me she told me that I will become a web developer to save humanity.</p>
              <p><a >Learn more about my journey as a web developer</a></p>
            </div>
          </div>
        </div>
      </div>
      {
        typeof window !== "undefined" && (
          <ModalVideo
            channel="vimeo"
            autoplay
            isOpen={isOpen}
            videoId="127203262"
            onClose={() => setOpen(false)}
          />
        )
      }
    </section>
  )
}

export default Services5