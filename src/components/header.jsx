import React from "react";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <div className="intro-text-shade">
                  {props.data ? <img src ={props.data.title} alt=""></img> : "Loading"}
                   
                  <p>{props.data ? props.data.paragraph : "Loading"}</p>
                </div>
                <div className="header-button">
                    <a
                    href="#features"
                    className="btn btn-custom btn-lg page-scroll"
                  >
                    Learn More
                  </a>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
