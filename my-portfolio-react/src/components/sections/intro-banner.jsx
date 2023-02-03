import { useEffect } from 'react';
import addParlx from '../../common/addParlx';

const Intro = () => {
  useEffect(() => {
    setTimeout(() => addParlx());
  }, []);

  return (
    <header className="slider simpl fixed-slider bg-img valign" style={{ backgroundImage: "url(/images/tey-banner-img.webp)" }} data-overlay-dark="6">
      <div className="container">
        <div className="row">
          <div className="col-lg-9">
            <div className="caption center mt-50">
              <h6>Web Developer</h6>
              <h1>Russell John Javier</h1>
              <p>If you are in need of an online presence for your portfolio, require a platform to build your online store, or are looking for a talented front-end developer to join your team, I am here to help.</p>
              <a href="#contact" className="btn-curve btn-lit mt-40">
                <span>Contact Me</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Intro