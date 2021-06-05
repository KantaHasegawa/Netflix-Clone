import './Nav.css'
import React, {useState, useEffect} from 'react'

const Nav = () => {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true)
      } else handleShow(false);

      return () => {
        window.removeEventListener("scroll");
      };
    });
  },[])


    return (
      <div className={`nav ${show && `nav_black`}`}>
        <img
          className="nav_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Netflix_2014_logo.svg/1920px-Netflix_2014_logo.svg.png"
          alt="Netflix Logo"
        />
        <img
          className="nav_avatar"
          src="https://cdn.logo.com/hotlink-ok/logo-social.png"
          alt="avatar"
        />
      </div>
    );
  }
export default Nav;
