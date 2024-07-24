import React from "react";
import { Link } from "gatsby";
import ThemeChanger from "../components/themeChanger";
import { useLanguageContext } from "../contexts/language-context";
import { useThemeContext } from "../contexts/theme-context";
import ToggleSwitch from "../components/toggleSwitch"; // Import the ToggleSwitch component

const Navigation = (props) => {
  const { language, setLanguage } = useLanguageContext();
  const { theme } = useThemeContext();

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "vi" : "en");
  };

  return (
    <nav className={`navigation ${theme}`}>
      <Link to="/people">{language === "en" ? "Team" : "Nhóm"}</Link>|
      <Link to="/publications">{language === "en" ? "Publications" : "Công bố"}</Link>|
      <Link to="/resources">{language === "en" ? "Resources" : "Tài liệu"}</Link>|
      <Link to="/contact">{language === "en" ? "Contact" : "Liên hệ"}</Link>
      <div style={{ display: "inline-block", marginLeft: "16px" }}>
        <ThemeChanger />
      </div>
      <ToggleSwitch
        isChecked={language === "en"}
        onToggle={toggleLanguage}
        labels={["VN", "EN"]}
      />
    </nav>
  );
};

export default Navigation;
