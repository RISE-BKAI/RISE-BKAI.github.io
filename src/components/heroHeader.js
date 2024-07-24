import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { useLanguageContext } from "../contexts/language-context";

const HeroHeader = () => {
  const data = useStaticQuery(
    graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            home {
              title
              titlevn
              description
              interests
            }
          }
        }
      }
    `
  );

  const { language } = useLanguageContext();

  return (
    <div className="hero-header">
      <div className="headline">
        {language === "en" ? data.site.siteMetadata.home.title : data.site.siteMetadata.home.titlevn}
      </div>
      <div
        className="primary-content"
        dangerouslySetInnerHTML={{
          __html: data.site.siteMetadata.home.description,
        }}
      />
      <div className="primary-content">
        {data.site.siteMetadata.home.interests}
      </div>
    </div>
  );
};

export default HeroHeader;
