import { useSelector } from 'react-redux';
import b1 from 'C:/Users/dell/Desktop/myblog/b1.png';

export default function ThemeProvider({ children }) {
  const { theme } = useSelector((state) => state.theme);
  const isDarkMode = theme === 'dark'; // Assuming 'theme' is a string with values 'light' or 'dark'

  return (
    <div className={theme}>
      <div className={`bg-white text-gray-700 bg-cover bg-center h-screen ${isDarkMode ? 'dark:text-black-200 dark:bg-[rgb(16,23,42)]' : ''}`} style={{backgroundImage: !isDarkMode ? `url(${b1})` : 'none' }}>
        {children}
      </div>
    </div>
  );
}
