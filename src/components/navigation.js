import React from "react";
import { Link } from "gatsby";
import ThemeChanger from "../components/themeChanger";

export default (props) => (
  <nav className="navigation">
    <Link to="/people">Team</Link>|<Link to="/people-vn">Nhóm</Link>
    <Link to="/publications">Publications | Công bố</Link>
    <Link to="/resources">Resources | Tài liệu</Link>
    <Link to="/contact">Contact | Liên hệ</Link>
    <ThemeChanger />
  </nav>
);
