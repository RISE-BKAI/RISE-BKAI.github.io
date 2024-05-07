import React from "react";
import { Link } from "gatsby";
import ThemeChanger from "../components/themeChanger";

export default (props) => (
  <nav className="navigation">
    <Link to="/people">Team</Link>
    <Link to="/publications">Publications</Link>
    <Link to="/blog">News</Link>
    <Link to="/resources">Resources</Link>
    <Link to="/contact">Contact</Link>
    <ThemeChanger />
  </nav>
);
