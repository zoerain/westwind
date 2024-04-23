import React from 'react';
//import headerImage from './headerImage';

function Header() {
    const style = {
      backgroungPosition: "center",
      backGroundSize: "100% auto",
      backgroundColor: "#F0F8FF",
    };


     const h1Style = {
       color: "#8B4513",
       fontFamily: '"Abril Fatface", serif',
       fontWeight: 400,
       fontStyle: "normal",
       padding: "100px",
       paddingLeft: "0px",
       marginTop: "75px",
     };

return (
  <div
    className="jumbotron jumbotron-fluid text-grey border border-dark pt-0"
    style={style}
  >
    <div className="container">
      <h1 className="display-4" style={h1Style}>
        Welcome to Westwind Equestrian!
      </h1>
      <p className="lead" style={{ color: "#8B4513" }}>
        <em>Westwind</em> provides exceptional care, training, and experiences
        for horses and riders of all levels. We are dedicated to fostering a
        supportive and welcoming community where equestrians can pursue their
        passion and achieve their goals.
      </p>
    </div>
  </div>
);
}

export default Header;