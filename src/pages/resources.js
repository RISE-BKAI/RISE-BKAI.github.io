import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import ResourceLink from "../components/resource-link";
import PostLink from "../components/post-link";
import HelmetWrapper from "../components/helmetWrapper";
import { useLanguageContext } from "../contexts/language-context";

const ResourcePage = ({
  data: {
    allResourcesYaml: { edges: yamlEdges },
    allMarkdownRemark: { edges: mdEdges },
  },
}) => {
  const { language } = useLanguageContext();

  const Resources = yamlEdges
    .filter((edge) => !!edge.node.name)
    .map((edge) => (
      <ResourceLink key={edge.node.id} resource={edge.node} language={language} />
    ));

  const Posts = mdEdges
    .filter((edge) => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map((edge) => <PostLink key={edge.node.id} post={edge.node} />);

  return (
    <Layout>
      <HelmetWrapper title={language === "en" ? "Resources" : "Tài nguyên"} />
      <h1>{language === "en" ? "Resources" : "Tài nguyên"}</h1>
      <h2>{language === "en" ? "Tools" : "Công cụ"}</h2>
      <div className="primary-content">
        {language === "en" ? (
          <>
            Our lab has built many tools from research, aiming at real-world application and technical transfer. You can check some tools below.
          </>
        ) : (
          <>
            Chúng tôi đã xây dựng nhiều công cụ từ các nghiên cứu, hướng tới ứng dụng và chuyển giao. Bạn có thể xem một số công cụ dưới đây.
          </>
        )}
        <div className="grids">{Resources}</div>
      </div>

      <h2>{language === "en" ? "Resources" : "Tài nguyên"}</h2>
      <div className="primary-content">
        {language === "en" ? (
          <>
            Curated some good resources when joining the lab.
          </>
        ) : (
          <>
            Đã chọn lọc một số tài nguyên tốt khi tham gia phòng thí nghiệm.
          </>
        )}
        <div className="grids">{Posts}</div>
      </div>
    </Layout>
  );
};

export default ResourcePage;
export const pageQuery = graphql`
  query resourcePageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    allResourcesYaml {
      edges {
        node {
          id
          description
          descriptionvn
          name
          url
        }
      }
    }
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { path: { regex: "/resources/" } } }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            titlevn
            thumbnail
          }
        }
      }
    }
  }
`;
