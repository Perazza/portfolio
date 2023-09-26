import React from 'react';
import '../../css/style.css';
import scrollToSection from '../scrollUtils';

function Buttons() {
  return (
    <div>
      {/* Buttons header */}
      <hr></hr>

      <div id="container01" className="container default">
        <div className="wrapper">
          <div className="inner">
            <ul id="buttons03" className="style1 buttons">
              <li>
                <a href="#getInTouch" className="button n01" onClick={() => scrollToSection("getInTouch")}>
                  <svg></svg>
                  <span className="label">GET IN TOUCH</span>
                </a>
              </li>
            </ul>
            <ul id="buttons01" className="style2 buttons">
              <li>
                <a href="#aboutMe" className="button n01" onClick={() => scrollToSection("aboutMe")}>
                  <svg></svg>
                  <span className="label">ABOUT ME</span>
                </a>
              </li>
              <li>
                <a href="#technologies" className="button n03" onClick={() => scrollToSection("technologies")}>
                  <svg></svg>
                  <span className="label">TECHNOLOGIES</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Buttons;