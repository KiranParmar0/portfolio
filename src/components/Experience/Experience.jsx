import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./Experience.css";
const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (


    <div className="experience" id='experience'>
      <span className="work" id='work' > Work Experience</span>
      <br></br>
      <div className="achievement">
        {/* darkMode */}
        <div className="circle" style={{ color: darkMode ? 'var(--orange)' : '' }}>6</div>
        <span style={{ color: darkMode ? 'white' : '' }}>Years </span>
        <span>Teaching Experience </span>
      </div>
      <div className="achievement">
        {/* darkMode */}
        <div className="circle" style={{ color: darkMode ? 'var(--orange)' : '' }}>2 +</div>
        <span style={{ color: darkMode ? 'white' : '' }}>Years </span>
        <span>Company Experience</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{ color: darkMode ? 'var(--orange)' : '' }}>2</div>
        <span style={{ color: darkMode ? 'white' : '' }}>Completed </span>
        <span>Projects</span>
      </div>

    </div>

  );
};

export default Experience;
