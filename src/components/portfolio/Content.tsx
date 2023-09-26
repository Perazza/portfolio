import React from 'react';
import '../../css/style.css';
import SwitchMode from '../SwitchMode';
import Formula1 from './Formula1';

interface SwitchModeProps {
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}


function Content({ isDarkMode, setIsDarkMode }: SwitchModeProps) {

  return (
    <div id="portfolio">
      <SwitchMode isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      {/* Title Content */}
      <h2 id="text03" className="style4">PORTFOLIO</h2>
      <p id="text09" className="style2">This is my portfolio!</p>
      <hr id="divider02" className="style1 full"></hr>

      <div id="gallery01" className="style1">
        {/* Content */}
        <Formula1 isDarkMode={isDarkMode}/>
      </div>
    </div>
  );
}

export default Content;
