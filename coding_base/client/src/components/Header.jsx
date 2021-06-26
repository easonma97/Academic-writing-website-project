import React from "react";
import image from '../assets/img/logo.png';
import { Link } from 'react-router-dom';

function Header(){
    // return <header>
    // <nav class="navbar navbar-expand-lg fixed-top navbar-light bg-light">
    // <a class="navbar-brand" href="/">
    //     <img src={image} alt="" height="70 px"></img>
    // </a>
    // <div class="collapse navbar-collapse" id="navbarSupportedContent">
    //     <ul class="navbar-nav me-auto mb-2 mb-lg-0">
    //         <li class="nav-item">
    //           <Link class="nav-link active" to="/">Home</Link>
    //         </li>
    //         <li class="nav-item">
    //           <Link class="nav-link active" to="/signUp">SignUp</Link>
    //         </li>
    //         <li class="nav-item">
    //           <Link class="nav-link active" to="/about">About</Link>
    //         </li>
    //     </ul>
    // </div>
    // </nav>

    // </header>
    return <header id="header">
    <div className="container">
      <div className="logo float-left">
        <a href='/'><img src={image} alt="" className="img-fluid" /></a>
      </div>
      <nav className="nav-menu float-right d-none d-lg-block">
        <ul>
          <li className="active"><Link to='/'><span>Home</span></Link></li>
          <li><Link to='/about'><span>About Us</span></Link></li>
          {/* <li><Link to='/signUp'><span>Sign Up</span></Link></li>
          <li><Link to='/login'><span>Log In</span></Link></li> */}
        </ul>
      </nav>
      {/* .nav-menu */}
    </div>
  </header>
}

export default Header;