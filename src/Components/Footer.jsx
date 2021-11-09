import React from "react";
import AltRouteIcon from '@mui/icons-material/AltRoute';
import YouTubeIcon from "@mui/icons-material/YouTube";
import VideogameAssetOutlinedIcon from '@mui/icons-material/VideogameAssetOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
  const footerImg =
    "https://www.premier-roofing.com/wp-content/uploads/2019/01/Logo-Stripes-White-e1545330364583.png";

  return (
    <div className="footerContainer">
      <div className="copyrightContainer">
        <p className="copyrightText">
          Copyright © Route Planner | All Rights Reserved
        </p>
      </div>
      <div className="footerLogoContainer">
        <AltRouteIcon className='footerImg'/> 
      </div>
      <div className="contactItemsContainer">
        <ul className="contactItemsList">
          <li>
            <span>
              <a href="https://github.com/catman237">
                <GitHubIcon />
              </a>
            </span>
          </li>
          <li>
            <span>
              <a href="https://www.youtube.com/channel/UCHrHk4VFIE2s4hpvQAm_OEA">
                <YouTubeIcon />
              </a>
            </span>
          </li>
          <li>
            <span>
              <a href="https://game-of-dice-app.netlify.app/">
                <VideogameAssetOutlinedIcon />
              </a>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
