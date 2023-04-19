import React from "react";
import "./SocialMedia.css";
import Logo from "../../public/Logo.png";
import FacebookIcon from "../assets/icons/FacebookIcon.svg";
import InstagramIcon from "../assets/icons/InstagramIcon.svg";
import TwitterIcon from "../assets/icons/TwitterIcon.svg";
const SocialMedia = () => {
  return (
    <section className="socialmedia">
      <div className="companylogo">
        <img src={Logo} alt="" />
      </div>
      <div className="socialmediaicons">
        <img src={FacebookIcon} alt="" />
        <img src={InstagramIcon} alt="" />
        <img src={TwitterIcon} alt="" />
      </div>
    </section>
  );
};

export default SocialMedia;
