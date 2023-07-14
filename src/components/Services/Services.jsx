import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import emo from "../../img/emo.png"
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import Resume from './resume.pdf';

const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}>My Technical </span>
        <span>Skills</span>
        <span>
          
        </span>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "25rem",top: "0 rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Programming Languages"}
            detail={"C, C++, Java, Python, TypeScript, HTML, CSS, SQL, NoSQL"}
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <Card
            emoji={Humble}
            heading={"Libraries/frameworks "}
            detail={
              "Angular JS, React JS, JavaScript, Bootstrap, Material UI, Node Js, Express Js"
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-3rem" }}
          transition={transition}
        >
          <Card
            emoji={Glasses}
            heading={"Tools / Platforms"}
            detail={"Visual Studio Code, Git, IntelliJ IDEA, AWS"}
          />
        </motion.div>
        {/* 4rd */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "30rem" }}
          transition={transition}
        >
          <Card
            emoji={emo}
            heading={"Databases"}
            detail={"MongoDB, MySQL, Oracle"}
          />
        </motion.div>




        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
