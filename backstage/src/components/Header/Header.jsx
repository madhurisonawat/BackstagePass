import ThemeToggle from "../ThemeToggle";
import "./Header.css";

export default function Header({ theme, setTheme }) {
  return (
    <header className="page-header">
      <div className="page-header-left">
        <span className="back-arrow">{"<"}</span>
        <span className="back-text">Back</span>
        <span className="divider">|</span>
        <span className="header-title">Day 1 of 9</span>
      </div>

      <div className="page-header-right">
        <span className="header-title">9-Day Fitness Challenge</span>
        <ThemeToggle theme={theme} setTheme={setTheme} />
        <span className="info-icon">ⓘ</span>
      </div>
    </header>
  );
}
