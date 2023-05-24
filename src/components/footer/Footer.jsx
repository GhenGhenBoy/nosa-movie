import React from "react";

import "./footer.scss";

import { Link } from "react-router-dom";

import bg from "./../../assets/footer-bg.jpg";
import logo from "./../../assets/logo.png";

import * as Config from "./../../constants/Config";



const Footer = () => {
  return (
    <div className="footer" style={{ backgroundImage: `url(${bg})` }}>
      <div className="footer__content container">
        <div className="footer__content__logo">
          <div className="logo">
            <img src={logo} alt="logo" />
            <Link to={`/${Config.HOME_PAGE}`}>NosaMovies</Link>
          </div>
        </div>

        <div className="footer__content__menus">
          <div className="footer__content__menu">
            <Link to={`/${Config.HOME_PAGE}`}>Home</Link>
            <Link to={`/${Config.HOME_PAGE}`}>Contact Nosa (+2348137252546)</Link>
            <Link to={`/${Config.HOME_PAGE}`}>Term of service</Link>
            <Link to={{ pathname: "https://nosaportfolio.netlify.app/#about" }} target="_blank">About Nosa</Link>
          </div>
          <div className="footer__content__menu">
          <Link to={{ pathname: "https://nosaportfolio.netlify.app/" }} target="_blank">Portfolio</Link>
            <Link to={{ pathname: "https://web.facebook.com/profile.php?id=100090189356410" }} target="_blank">Facebook</Link>
            <Link to={{ pathname: "https://www.imdb.com/?ref_=nv_home" }} target="_blank">IMDB</Link>
            <Link to={`/${Config.HOME_PAGE}`}>Privacy policy</Link>
          </div>
          <div className="footer__content__menu">
            <Link to={`/${Config.HOME_PAGE}`}>You must watch</Link>
            <Link to={{ pathname: " https://ghenghenboy.github.io/nosa-movie/movie" }} target="_blank">Recent Release</Link>
            <Link to={{ pathname: "https:/goal.com" }} target="_blank">Sports</Link>
          </div>                 
        </div>

      </div>
     
      
          <div className="me">
          <h3>&copy; 2022 Ehigiator Nosa John (GhenGhen) 08137252546, 08126786747</h3>
          </div>
    </div>
  );
};

export default Footer;
