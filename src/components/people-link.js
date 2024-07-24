import React from "react";
import { Link } from "gatsby";
import { useLanguageContext } from "../contexts/language-context";

const PeopleLink = ({ data }) => {
  const { language } = useLanguageContext();
  const description = language === "en" ? data.frontmatter.metaDescription : data.frontmatter.metaDescriptionvn;

  return (
    <article className="card">
      <Link to={data.frontmatter.path}>
        {!!data.frontmatter.thumbnail && (
          <img
            className="people-avatar"
            src={data.frontmatter.thumbnail}
            alt={data.frontmatter.title + "- Featured Shot"}
          />
        )}
      </Link>
      <header>
        <h2 className="post-title">
          <Link to={data.frontmatter.path} className="post-link">
            {data.frontmatter.title}
          </Link>
        </h2>
        {data.frontmatter.position !== "alumni" ? (
          <div className="post-meta">{description}</div>
        ) : (
          <div className="post-meta">
            {language === "en"
              ? `Graduated since ${data.frontmatter.endYear}. ${description}`
              : `Tốt nghiệp từ năm ${data.frontmatter.endYear}. ${description}`}
          </div>
        )}
      </header>
    </article>
  );
};

export default PeopleLink;
