import React from 'react';

function DarkModeToggle({ toggleTheme, theme }) {
  return (
    <button
      onClick={toggleTheme}
      className="dark-mode-toggle"
    >
      Switch to {theme === 'light' ? 'Dark' : '☀️'} Mode
    </button>
  );
}

export default DarkModeToggle;