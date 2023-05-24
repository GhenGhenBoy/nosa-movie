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
            <a href="https://nosaportfolio.netlify.app/#contact" target="_blank" rel="noreferrer">Contact Nosa
            </a>
            <Link to={`/${Config.HOME_PAGE}`}>Term of service</Link>
            <a href="https://nosaportfolio.netlify.app/#about" target="_blank" rel="noreferrer">About
            </a>
          </div>
          <div className="footer__content__menu">
          <a href="https://nosaportfolio.netlify.app/" target="_blank" rel="noreferrer">Portfolio
            </a>
            <a href="https://web.facebook.com/profile.php?id=100090189356410" target="_blank" rel="noreferrer">Facebook
            </a>
            <a href="https://www.imdb.com/?ref_=nv_home" target="_blank" rel="noreferrer">IMDB
            </a>
            <Link to={`/${Config.HOME_PAGE}`}>Privacy policy</Link>
          </div>
          <div className="footer__content__menu">
          <a href="https://ghenghenboy.github.io/nosa-movie/#/nosa-movie/movie" target="_blank" rel="noreferrer">You must watch
            </a>
            <a href="https://ghenghenboy.github.io/nosa-movie/" target="_blank" rel="noreferrer">Recent release
            </a>
            <a href="https://goal.com/mancity" target="_blank" rel="noreferrer">Sport
            </a>
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
