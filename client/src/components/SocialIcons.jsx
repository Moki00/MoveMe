import React from "react";
import insta from "../images/instagram.png";
import facebook from "../images/facebook.png";
import twitter from "../images/twitter.png";
import whatsapp from "../images/whatsapp.png";
import "./styles/social.css";

const SocialIcons = () => {
  return (
    <div className="iconspanel">
      <a href="">
        <img src={insta} className="fa" alt="" />
      </a>
      <a href="">
        <img src={facebook} className="fa" alt="" />
      </a>
      <a href="">
        <img src={twitter} className="fa" alt="" />
      </a>
      <a href="">
        <img src={whatsapp} className="fa" alt="" />
      </a>
    </div>
  );
};

// to remove

export default SocialIcons;
