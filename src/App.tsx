import React, { useState} from 'react';
import './css/style.css';
import Header from './components/header/Header';
import Aboutme from './components/header/Aboutme';
import Technologies from './components/tech/Technologies';
import Contact from './components/bottom/Contact';
import Content from './components/portfolio/Content';

function App() {

  const [isDarkMode, setIsDarkMode] = useState(false);
  
  return (
    <div className={`all ${isDarkMode ? 'bg-dark-mode' : ''}`}>
      {/* left */}
      <div className="container-all">

        <div className="block-header">
          <div id="main" className={`${isDarkMode ? 'dark-mode' : ''}`}>
            <div className="inner">
              <Header isDarkMode={isDarkMode}/>
              <Aboutme isDarkMode={isDarkMode}/>
              <Technologies isDarkMode={isDarkMode}/>
                <hr id="divider02" className="style1 full"></hr>
              <Contact />
            </div>
          </div>
        </div>
        {/* content */}
        <div className="block-content">
          <div id="main" className={`${isDarkMode ? 'dark-mode' : ''}`}>
            <div className="inner-content">
              <Content isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
            </div>
          </div>
        </div>

      </div>
      
    </div>
    
  );
}

export default App;