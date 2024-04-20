import React from 'react';
import { Link } from 'react-router-dom';

function HeaderNav() {
    const style = {
        padding: '2rem',
    };

    const italic = {
        fonstyle: 'italic',
    };

    const navStyle = "font-poppins-heading nav-link mx-2 text-secondary";

    return (
      <ul className="nav justify-content-center border nav-bar" style={style}>
        <li className="">
          <Link className={navStyle} to="/">
            <h1 className="h5" style={italic}>
              Home
            </h1>
          </Link>
        </li>
        <li className="nav-item">
          <Link className={navStyle}>
            <h1 className="h5" style={italic}>
              About
            </h1>
          </Link>
        </li>
        <li>
          <Link className={navStyle}>
            <h1 className="h5" style={italic}>
              Boarding
            </h1>
          </Link>
        </li>
        <li>
          <Link className={navStyle}>
            <h1 className="h5" style={italic}>
              Horse Sales
            </h1>
          </Link>
        </li>
        <li>
          <Link className={navStyle}>
            <h1 className="h5" style={italic}>
              Lessons
            </h1>
          </Link>
        </li>
        <li>
          <Link className={navStyle}>
            <h1 className="h5" style={italic}>
              Training
            </h1>
          </Link>
        </li>
        <li>
          <Link className={navStyle}>
            <h1 className="h5" style={italic}>
              Contact
            </h1>
          </Link>
        </li>
      </ul>
    );
}

export default HeaderNav;