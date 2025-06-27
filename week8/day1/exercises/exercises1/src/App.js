import { useContext } from 'react';
import { ThemeProvider, ThemeContext } from './ThemeContext';
import ThemeSwitcher from './ThemeSwitcher';
import './App.css';

const ThemedContent = () => {
  const { theme } = useContext(ThemeContext);

  const styles = {
    backgroundColor: theme === 'light' ? '#ffffff' : '#121212',
    color: theme === 'light' ? '#000000' : '#ffffff',
    minHeight: '100vh',
    padding: '2rem',
    transition: 'all 0.3s ease',
  };

  return (
    <div style={styles}>
      <h1>{theme.charAt(0).toUpperCase() + theme.slice(1)} Theme</h1>
      <p>This is a {theme} themed content area.</p>
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <ThemeSwitcher />
      <ThemedContent />
    </ThemeProvider>
  );
}

export default App;
