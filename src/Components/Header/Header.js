import React from 'react';
import HeaderNav from './HeaderNav';
import "./Header.css";
//import headerImage from './headerImage';

function Header() {
    const style = {
        //add 'url(${headerImage})`, to the end of background once u find a headerImage to use
      backgroungPosition: 'center',
      backGroundSize: '100% auto',
    };



return (
    <div
        className='jumbotron jumbotron-fluid text-grey border-bottom border-dark pt-0'
        style={style}
    >
        <div className='container'>
            <h1 className='display-4'>Cute and short on-brand message!</h1>
            <p className='lead'>
                <em>WestWind</em> is... give a short description.
            </p>
        </div>
    </div>
 );
}

export default Header;