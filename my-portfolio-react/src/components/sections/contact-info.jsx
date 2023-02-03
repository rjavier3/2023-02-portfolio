import React from "react";
import Split from "../Split";
import services4Data from "../../data/sections/services4.json";

const Services4 = ({ withBG, withPadding, halfBG, withOutTitle }) => {
  return (
    <div
      className="services sub-bg">
      <div className="container">
        <div className="row">
          {services4Data.map((item, index) => (
            <div className="col-lg-4" key={item.id}>
              <div
                className={`item ${
                  index != services4Data.length - 1 ? "md-mb50" : ""
                } wow fadeInUp`}
                data-wow-delay={
                  item.id == 1 ? ".5s" : item.id == 2 ? ".3s" : ".8s"
                }
              >
                <span className={`icon ${item.icon}`}></span>
                <h6>{item.title}</h6>
                <p>{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services4;
