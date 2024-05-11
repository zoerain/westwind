import React from "react";

function BoardingPage() {

    const headerStyle = {
      paddingTop: "20px",
      backgroundColor: "#F0F8FF",
      color: "#8B4513",
      fontFamily: '"Abril Fatface", serif',
      paddingLeft: "15px",
      paddingRight: "15px",
      display: "inline-block",
    };

    const textStyle = {
      fontFamily: '"Quicksand", sansSerif',
      fontWeight: 500,
      color: "#8B4513",
      fontWeight: "600",
      paddingLeft: "60px",
    };

    const priceStyle = {
      fontFamily: '"Quicksand", sansSerif',
      fontWeight: 500,
      color: "#8B4513",
      fontWeight: "600",
      textAlign: "center",
      paddingTop: "40px",
      paddingBottom: "70px",
    };
    
    return (
      <div style={{ backgroundColor: "#F0F8FF" }}>
        <img
          src="https://images.pexels.com/photos/2042161/pexels-photo-2042161.jpeg"
          alt="horse field"
          style={{ height: "650px", width: "100%" }}
        />
        <div>
          <div>
            <h2 style={headerStyle}>Boarding Includes:</h2>
            <ul style={textStyle}>
              <li style={{ paddingTop: "15px" }}>Feeding</li>
              <li style={{ paddingTop: "15px" }}>Blanketing</li>
              <li style={{ paddingTop: "15px" }}>Heated water</li>
              <li style={{ paddingTop: "15px" }}>Shelter</li>
              <li style={{ paddingTop: "15px" }}>
                Use of indoor/ outdoor arena
              </li>
              <li style={{ paddingTop: "15px" }}>Free trailer parking</li>
              <li style={{ paddingTop: "15px" }}>Tack room</li>
            </ul>
          </div>
          <hr></hr>
          <div style={priceStyle}>
            <h4>Boarding is $450 monthly.</h4>
            <p>
              Contact exampleemaim@gmail.com if interested in boarding with us!
            </p>
          </div>
          <hr></hr>
        </div>
      </div>
    );
}

export default BoardingPage;