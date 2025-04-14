// DarkModeToggle.jsx

import {useTheme } from './ThemeContext';

const DarkModeToggle = () => {
    const {isDarkMode, toggleDarkMode} = useTheme();

    return (
        <button onClick = {toggleDarkMode}>
            {isDarkMode ? '🌞 Light' : '🌙 Dark'}
        </button>
    );
};

export default DarkModeToggle;