import React from 'react';
//import headerImage from './headerImage';

function Header() {
    const style = {
        //add 'url(${headerImage})`, to the end of background once u find a headerImage to use
      backgroungPosition: 'center',
      backGroundSize: '100% auto',
    };


     const h1Style = {
       color: "#8B4513",
       fontFamily: '"Abril Fatface", serif',
       fontWeight: 400,
       fontStyle: "normal",
       padding: "100px",
       paddingLeft: "0px",
     };

     const westStyle = {
        color: "#8B4513",
     }

return (
  <div
    className="jumbotron jumbotron-fluid text-grey border border-dark pt-0"
    style={style}
  >
    <div className="container">
      <h1 className="display-4" style={h1Style}>
        Welcome to Westwind Equestrian!
      </h1>
      <p className="lead" style={westStyle}>
        <em>WestWind</em> provides exceptional care, training, and experiences
        for horses and riders of all levels. We are dedicated to fostering a
        supportive and welcoming community where equestrians can pursue their
        passion and achieve their goals.
      </p>
    </div>
  </div>
);
}

export default Header;