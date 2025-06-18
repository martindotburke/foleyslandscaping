export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          
          <div className="col-12">
            <div className="about-text">
              <h2>About Us</h2>
              <p>{props.data ? props.data.paragraph1 : "loading..."}</p>
              <p>{props.data ? props.data.paragraph2 : "loading..."}</p>
              <p>{props.data ? props.data.paragraph3 : "loading..."}</p>
              <p><b>{props.data ? props.data.paragraph4 : "loading..."}</b></p>
              <h3>Why Choose Us?</h3>
              
              <div >
                <div>
                  {props.data ? <img src={props.data.acliImg} className="about-alci" alt="alci accredited icon"></img> : "loading..."}
               </div>
                <div >
                  <ul>
                    {props.data
                      ? props.data.Why.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
