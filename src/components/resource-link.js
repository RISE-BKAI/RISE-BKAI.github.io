import React from "react";
import { useLanguageContext } from "../contexts/language-context";

const ResourceLink = ({ resource }) => {
  const { language } = useLanguageContext();
  
  return (
    <article className="card">
      <header>
        <h2 className="post-title">
          <a
            href={resource.url}
            target="_blank"
            rel="noopener noreferrer"
            className="post-link"
          >
            {resource.name}
          </a>
        </h2>
        <div className="post-meta">
          {language === "en" ? resource.description : resource.descriptionvn}
        </div>
      </header>
    </article>
  );
};

export default ResourceLink;
