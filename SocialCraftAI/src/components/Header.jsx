import MoonIcon from './icons/MoonIcon';
import SunIcon from './icons/SunIcon';
import SparkleIcon from './icons/SparkleIcon';

export default function Header({ theme, onToggle }) {
  return (
    <header className="header">
      <div className="header__brand">
        <div className="header__icon">
          <SparkleIcon />
        </div>
        <div>
          <h1 className="header__title">SocialCraft AI</h1>
          <p className="header__subtitle">
            Generate platform-ready content in seconds
          </p>
        </div>
      </div>
      <button
        className="theme-toggle"
        onClick={onToggle}
        aria-label="Toggle theme"
      >
        {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
      </button>
    </header>
  );
}
