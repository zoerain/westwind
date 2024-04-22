import React from 'react';
import { Link } from 'react-router-dom';
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

    const navStyle = "font-poppins-heading nav-link mx-3";

    function handleHomeClick() {
      navigate("/");
    };

    function handleAboutClick() {
      navigate("/about");
    };

    function handleBoardingClick() {
      navigate("/boarding");
    };

    return (
      <ul
        className="nav justify-content-center border nav-bar"
        style={quicksand}
      >
        <li className="">
          <Link onClick={handleHomeClick()} className={navStyle} to="/">
            <h1 className="h5">Home</h1>
          </Link>
        </li>
        <li className="nav-item">
          <Link onClick={handleAboutClick()} className={navStyle}>
            <h1 className="h5">About</h1>
          </Link>
        </li>
        <li>
          <Link onClick={handleBoardingClick()} className={navStyle}>
            <h1 className="h5">Boarding</h1>
          </Link>
        </li>
        <li>
          <Link className={navStyle}>
            <h1 className="h5">Horse Sales</h1>
          </Link>
        </li>
        <li>
          <Link className={navStyle}>
            <h1 className="h5">Lessons</h1>
          </Link>
        </li>
        <li>
          <Link className={navStyle}>
            <h1 className="h5">Training</h1>
          </Link>
        </li>
        <li>
          <Link className={navStyle}>
            <h1 className="h5">Contact</h1>
          </Link>
        </li>
      </ul>
    );
};

export default HeaderNav;