import React from "react";

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Our Services</h2>
          <p>
            Foley's Landscaping offer the following servies across the Limerick, Clare and Tipperary region.
          </p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-lg-6 col-sm-6 col-xs-12">
                  {" "}
                  <i className={d.icon}></i>
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    {d.text.map((text, i) => <p key={i}>{text}</p>)}
                  </div>
                  
                  <b>
                  <div className="list-style">
                    <div className="col-lg-6 col-sm-6 col-xs-12">
                      <ul>
                        {
                           d.servicesLeft.map((d, i) => (
                              <li key={`${d}-${i}`}>{d}</li>
                            ))
                        }
                      </ul>
                    </div>
                    <div className="col-lg-6 col-sm-6 col-xs-12">
                      <ul>
                        {
                           d.servicesRight.map((d, i) => (
                              <li key={`${d}-${i}`}>{d}</li>
                            ))
                        }
                      </ul>
                    </div>
                  </div>
                  </b>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
