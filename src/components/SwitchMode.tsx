import React from 'react';
import '../css/style.css';

interface SwitchModeProps {
    isDarkMode: boolean;
    setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  }

function SwitchMode({ isDarkMode, setIsDarkMode }: SwitchModeProps) {

    const handleToggle = () => {
        const button = document.querySelector('.theme-switch');
        if (button) {
          const currentAriaPressed = button.getAttribute('aria-pressed');
          const newAriaPressed = currentAriaPressed === 'true' ? 'false' : 'true';
          button.setAttribute('aria-pressed', newAriaPressed);
        }
        setIsDarkMode(!isDarkMode);
      }
    
  return (
    <div className='buttonEnd'>
        <button
        className={`theme-switch ${isDarkMode ? 'dark-mode' : ''}`}
        type="button"
        aria-pressed={isDarkMode}
        aria-label="Toggle Dark Mode"
        onClick={handleToggle}
        >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
            focusable="false"
            >
            <path d="M21 13A9 9 0 1 1 11 3a7 7 0 0 0 10 10z" />
        </svg>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
            focusable="false"
            >
            <circle cx="12" cy="12" r="5" />
            <path
                d="M12 1v2m0 18v2M4 4l2 2m12 12 2 2M1 12h2m18 0h2M4 20l2-2M18 6l2-2"
            />
        </svg>
        </button>

    </div>

  );
}

export default SwitchMode;
