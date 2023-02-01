import { useEffect } from 'react';
import addParlx from '../../common/addParlx';

const Intro = () => {
  useEffect(() => {
    setTimeout(() => addParlx());
  }, []);

  return (
    <header className="slider simpl fixed-slider bg-img valign" style={{ backgroundImage: "url(/images/tey-banner-img.jpg)" }} data-overlay-dark="6">
      <div className="container">
        <div className="row">
          <div className="col-lg-9">
            <div className="caption center mt-50">
              <h6>Web Developer</h6>
              <h1>Russell John Javier</h1>
              <p>If you need an online presence for your porfolio, need to build a store for your shop, or need a front-end developer to be part of your team</p>
              <a href="#0" className="btn-curve btn-lit mt-40">
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