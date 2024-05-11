import React from "react";

function Training() {

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
          src="https://images.unsplash.com/photo-1624125276915-39e2afd37438?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="cows on green hills"
          style={{ height: "650px", width: "100%" }}
        />
        <div style={headerStyle}>
          <h2 style={{ padding: "30px" }}>
            Interested in ranch versatility skills? Contact
            exampleemail@gmail.com to get experienced!
          </h2>
        </div>
      </div>
    );
}

export default Training;