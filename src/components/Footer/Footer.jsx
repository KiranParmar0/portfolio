import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
import LinkedIn from "@iconscout/react-unicons/icons/uil-linkedin";
import VisitorCounter from "../VisitorCounter/Visitors";

const Footer = () => {
  return (
    
    <div className="footer">
      <img src={Wave} alt="" class="color-change"  />
      <div className="f-content">
        <span><b>Kiranparmar2900@gmail.com </b></span>
        <div className="f-icons">
         <a href="https://www.instagram.com/kiranparmar00/"> <Insta color="white" size={"3rem"} /></a>
         <a href="https://www.facebook.com/kp700"> <Facebook color="white" size={"3rem"} /></a>
          <a href="https://github.com/KiranParmar0"> <Gitub color="white" size={"3rem"} /></a>
          <a href="https://www.linkedin.com/in/kiran-parmar-b128051a/" > <LinkedIn color="white" size={"3rem"}  /></a>
          <VisitorCounter />
        </div>
       
      </div>
      
    </div>
    
  );
};

export default Footer;
