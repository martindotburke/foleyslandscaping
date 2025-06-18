export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      
      
      <div>
        <div className="navbar-header">
          {props.data ? <img src={props.data.bannerDesktop} alt="..." className="navbar-logo-desktop" /> : ""}
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-left">
            <li>{props.data ? <img src={props.data.bannerMobile} alt="..." className="navbar-logo-mobile" /> : ""}</li>
            {props.data ? props.data.sections.map((section, i) => {
              return (<li key={i}>
                <a href={section.target} className="page-scroll" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">{section.title}</a>
              </li>)
            }) : null}
          </ul>
        </div>
      </div>
    </nav>
    
  );
};
