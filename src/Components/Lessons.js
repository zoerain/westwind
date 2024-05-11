import React from "react";

function Lessons() {

    const headerStyle = {
      fontFamily: '"Quicksand", sansSerif',
      fontWeight: 500,
      color: "#8B4513",
      fontWeight: "600",
      paddingLeft: "60px",
    };

    return (
      <div style={{ backgroundColor: "#F0F8FF" }}>
        <img
          src="https://images.pexels.com/photos/4326742/pexels-photo-4326742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="guy riding horse in field"
          style={{ height: "650px", width: "100%" }}
        />
        <div style={headerStyle}>
          <h2 style={{ padding: "30px" }}>Group lessons $20 per person</h2>
          <h2 style={{ padding: "30px" }}>Private Lessons $50 per person</h2>
          <h4 style={{ padding: "30px" }}>
            Contact exampleemail@gmail to schedule a lesson!
          </h4>
        </div>
      </div>
    );
}

export default Lessons;