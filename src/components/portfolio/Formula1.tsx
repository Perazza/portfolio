import React from 'react';
import '../../css/style.css';

function Formula1({ isDarkMode }: { isDarkMode: boolean }) {

    const powerBiUrl = "https://app.powerbi.com/view?r=eyJrIjoiMDk0YjAzYzQtZTFkYS00ZDRjLWIwNzctMGY4NmNlNGIzZTM5IiwidCI6ImMwYTk0NzFhLTJmOTgtNGUyZi1hODM3LWM5NWJhNTRlMWIxNyJ9";

    const embeddedUrl = `${powerBiUrl}`;
    
  return (
    <div className = "inner"> 
        <p id="text10" className={`style5 portfolio-text ${isDarkMode ? 'dark-mode' : ''}`}>
            <strong>DASHBOARD FORMULA 1</strong> 
        </p>
        <div className={`bg-highlight ${isDarkMode ? 'dark-mode' : ''}`}>
            <div className = "frame">
                <iframe 
                    title="F1 Dashboard" 
                    width="1176" 
                    height="721" 
                    src={embeddedUrl}
                    allowFullScreen
                ></iframe>
            </div>
        </div>

        <hr></hr>
    </div>

    );
}

export default Formula1;