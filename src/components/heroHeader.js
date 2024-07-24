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
              descriptionvn
              interests
              interestsvn
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
        dangerouslySetInnerHTML={language === "en" ? {
          __html: data.site.siteMetadata.home.description,
        } : {
          __html: data.site.siteMetadata.home.descriptionvn,
        }}
      />
      <div className="primary-content">
        {language === "en" ? data.site.siteMetadata.home.interests : data.site.siteMetadata.home.interestsvn}
      </div>
    </div>
  );
};

export default HeroHeader;
