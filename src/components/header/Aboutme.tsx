import React from 'react';

import '../../css/style.css';

function Aboutme({ isDarkMode }: { isDarkMode: boolean }) {
  return (
    <div id="aboutMe" className={`block-highlight ${isDarkMode ? 'dark-mode' : ''}`}>
      {/* AboutMe */}

      <h2 id="text05" data-scroll-id="aboutme" className="style4">
        ABOUT ME
      </h2>
      <hr></hr>
      <p id="text17" className="style2">
        I have a degree in <strong>Economics</strong> and I am a <strong>Data Scientist</strong> working at <strong>SEGWARE</strong>.
      </p>
      <hr></hr>
      <p id="text04" className="style2">
        I have experience creating projects with <strong>databases</strong>,
        predictive models such as <strong>forecasting</strong>, <strong>classification</strong>, and
        <strong> neural networks</strong>, and creating <strong>business analytics dashboards</strong>.
      </p>

    </div>
  );
}

export default Aboutme;
