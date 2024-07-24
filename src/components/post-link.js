import React from "react";
import { Link } from "gatsby";
import { useLanguageContext } from "../contexts/language-context";

const PostLink = ({ post }) => {
  const { language } = useLanguageContext();

  return (
    <article className="card ">
      <Link to={post.frontmatter.path}>
        {!!post.frontmatter.thumbnail && (
          <img
            src={post.frontmatter.thumbnail}
            alt={post.frontmatter.title + "- Featured Shot"}
          />
        )}
      </Link>
      <header>
        <h2 className="post-title">
          <Link to={post.frontmatter.path} className="post-link">
            {language === "en" ? post.frontmatter.title : post.frontmatter.titlevn}
          </Link>
        </h2>
        <div className="post-meta">{post.frontmatter.date}</div>
      </header>
    </article>
  );
};

export default PostLink;
