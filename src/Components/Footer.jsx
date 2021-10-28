import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  const footerImg =
    "https://www.premier-roofing.com/wp-content/uploads/2019/01/Logo-Stripes-White-e1545330364583.png";

  return (
    <div className="footerContainer">
      <div className="copyrightContainer">
        <p className="copyrightText">
          Copyright © 2005-2020 Premier Roofing LLC All Rights Reserved
        </p>
      </div>
      <div className="footerLogoContainer">
        <img src={footerImg} alt="premierRoofingImage" className="footerImg" />
      </div>
      <div className="contactItemsContainer">
        <ul className="contactItemsList">
          <li>
            <span>
              <a href="https://www.facebook.com/premier.roofing.company/">
                <FacebookIcon />
              </a>
            </span>
          </li>
          <li>
            <span>
              <a href="https://www.youtube.com/user/ctulppremier">
                <YouTubeIcon />
              </a>
            </span>
          </li>
          <li>
            <span>
              <a href="https://www.instagram.com/premierroofing/">
                <InstagramIcon />
              </a>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
