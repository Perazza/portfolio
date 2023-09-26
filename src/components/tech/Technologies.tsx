import React from 'react';
import '../../css/style.css';
import python from '../../images/python.webp';
import powerbi from '../../images/power-bi.png';
import tensorflow from '../../images/tensorflow.png';
import sql from '../../images/sql.png';

function Technologies({ isDarkMode }: { isDarkMode: boolean }) {
  return (
    <div id="technologies" className={`block-highlight ${isDarkMode ? 'dark-mode' : ''}`}>
      {/* Technologies */}
      <h2 id="text07" data-scroll-id="tech" className="style4">
        TECHNOLOGIES
      </h2>
      <hr></hr>
      <div id="container02" className="container columns">
        <div className="wrapper">
          <div className="inner">
            <div>
              <div id="image06" className="style2 image">
                <span className="frame">
                  <img src={python} alt="Python" />
                </span>
              </div>
              <h3 id="text13" className="style3">
                <strong>Python</strong> 
              </h3>
              <p id="text14" className="style5">Programming language for data analysis</p>
            </div>
            <div>
              <div id="image07" className="style2 image">
                <span className="frame">
                  <img src={powerbi} alt="Power BI" />
                </span>
              </div>
              <h3 id="text11" className="style3">
                <strong>Power BI</strong>
              </h3>
              <p id="text10" className="style5">A powerful tool to create dashboards</p>
            </div>
            <div>
              <div id="image08" className="style2 image">
                <span className="frame">
                  <img src={tensorflow} alt="TensorFlow" />
                </span>
              </div>
              <h3 id="text12" className="style3">
                <strong>TensorFlow</strong>
              </h3>
              <p id="text15" className="style5">
                A framework for advanced statistical analyses and AI
              </p>
            </div>
            <div>
              <div id="image09" className="style2 image">
                <span className="frame">
                  <img src={sql} alt="SQL" />
                </span>
              </div>
              <h3 id="text08" className="style3">
                <strong>SQL</strong>
              </h3>
              <p id="text16" className="style5">T-SQL and PL/SQL for creating and manipulating databases</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Technologies;
