import React from 'react';
import '../../css/style.css';
import avatar from '../../images/avatar.jpg';

function Header({ isDarkMode }: { isDarkMode: boolean }) {
  return (
    <div>
      <hr></hr>
      <div id="image03" className="style1 image">
        
        <span className={`frame ${isDarkMode ? 'dark-mode' : ''}`}>
          <img src={avatar} alt="Avatar" />
        </span>
      </div>

      <hr></hr>
      {/* texto header */}
      <h1 id="text01" className="style1">
        <strong>Vinícius Perazza</strong>
      </h1>
      <hr></hr>
      <p id="text02" className="style2">
        <strong>Economist</strong> and <strong>Data Scientist</strong>
      </p>
      <hr></hr>
      <p id="text03" className="style2">
        “The most valuable of all capital is that invested in human beings” - Alfred Marshall
      </p>
    </div>
  );
}

export default Header;
