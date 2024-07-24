import React from "react";
import { Link } from "gatsby";
import ThemeChanger from "../components/themeChanger";
import { useLanguageContext } from "../contexts/language-context";
import { useThemeContext } from "../contexts/theme-context";

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
      <button onClick={toggleLanguage} className="language-toggle">
        {language === "en" ? "VN" : "EN"}
      </button>
      <ThemeChanger />
    </nav>
  );
};

export default Navigation;
