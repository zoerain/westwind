import React from 'react';
import { useNavigate } from "react-router-dom";


function HeaderNav() {

  const navigate = useNavigate();


    const quicksand = {
      color: "#8B4513",
      backgroundColor: "#F0F8FF",
      fontFamily: '"Quicksand", sansSerif',
      fontOpticalSizing: "auto",
      fontWeight: "650",
      fontStyle: "normal",
      padding: "16px",
      position: "fixed",
      width: "100%",
      zIndex: "999",
    };

    const navStyle = {
      color: "#8B4513",
      margin: "0 10px",
    };

    const item = {
      margin: "0 15px",
    }

    function handleHomeClick() {
      navigate("/");
    }

    function handleAboutClick() {
      navigate("/about");
    }

    function handleBoardingClick() {
      navigate("/boarding");
    }

    function handleHorseSalesClick() {
      navigate("/horsesales");
    }

    function handleLessonsClick() {
      navigate("/lessons");
    }

    return (
      <ul
        className="nav justify-content-center border nav-bar"
        style={quicksand}
      >
        <li>
          <h5 onClick={handleHomeClick} className={navStyle} style={item}>
            Home
          </h5>
        </li>
        <li>
          <h5 onClick={handleAboutClick} className={navStyle} style={item}>
            About
          </h5>
        </li>
        <li>
          <h5 onClick={handleBoardingClick} className={navStyle} style={item}>
            Boarding
          </h5>
        </li>
        <li>
          <h5 onClick={handleHorseSalesClick} className={navStyle} style={item}>
            Horse Sales
          </h5>
        </li>
        <li>
          <h5 onClick={handleLessonsClick} className={navStyle} style={item}>
            Lessons
          </h5>
        </li>
        <li>
          <h5 className={navStyle} style={item}>
            Training
          </h5>
        </li>
      </ul>
    );
};

export default HeaderNav;