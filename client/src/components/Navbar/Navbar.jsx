import React from 'react'
import { ArrowDropDown, Notifications, Search } from "@mui/icons-material";
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="left">
          <div className="item">
{/*             <img src="/img/en.png" /> */}
          <ArrowDropDown/>
          </div>
          <div className="item">
            <Link to="/products/1">Women</Link>
          </div>
          <div className="item">
            <Link to="/products/2">Men</Link>
          </div>
          <div className="item">
            <Link to="/products/3">Children</Link>
          </div>
        </div>
        <div className="center">
          <Link to="/">JULITOSTORE</Link>
        </div>
        <div className="right"></div>
      </div>
    </div>
  )
}

export default Navbar