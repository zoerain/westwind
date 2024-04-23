import React from "react";

const footerStyle = {
  marginTop: "200px",
  backgroundColor: "#F0F8FF",
  color: "#8B4513",
  padding: "20px",
  borderColor: "#8B4513",

  left: 0,
  bottom: 0,
  width: "100%",
  textAlign: "center",
  fontFamily: '"Quicksand", sansSerif',
  fontWeight: 650,
};

const footerItemStyle = {
  marginBottom: "35px",
}


function Footer() {
  return (
    <footer style={footerStyle}>
      <div className="footer-content">
        <div className="footer-item" style={footerItemStyle}>
          <h3>Address</h3>
          <p>123 Green Street, Cityville, Country</p>
        </div>
        <div className="footer-item" style={footerItemStyle}>
          <h3>Email</h3>
          <p>contact@example.com</p>
        </div>
        <div className="footer-item" style={footerItemStyle}>
          <h3>Phone Number</h3>
          <p>+1234567890</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
