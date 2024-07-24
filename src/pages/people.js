import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import PeopleLink from "../components/people-link";
import HelmetWrapper from "../components/helmetWrapper";
import { useLanguageContext } from "../contexts/language-context";

const PeoplePage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const { language } = useLanguageContext();

  // Filter and map current people (excluding alumni, supervisors, and leaders)
  const currentPeople = edges
    .filter(
      (edge) =>
        !!edge.node.frontmatter.date &&
        edge.node.frontmatter.position !== "alumni" &&
        edge.node.frontmatter.position !== "supervisor" &&
        edge.node.frontmatter.position !== "leader"
    )
    .map((edge) => <PeopleLink key={edge.node.id} data={edge.node} />);

  // Filter and map previous lab members (alumni)
  const prevPeople = edges
    .filter(
      (edge) =>
        !!edge.node.frontmatter.date &&
        edge.node.frontmatter.position === "alumni"
    )
    .map((edge) => <PeopleLink key={edge.node.id} data={edge.node} />);

  // Filter and map supervisors
  const supervisors = edges
    .filter(
      (edge) =>
        !!edge.node.frontmatter.date &&
        edge.node.frontmatter.position === "supervisor"
    )
    .map((edge) => <PeopleLink key={edge.node.id} data={edge.node} />);

  // Filter and map leaders
  const leaders = edges
    .filter(
      (edge) =>
        !!edge.node.frontmatter.date &&
        edge.node.frontmatter.position === "leader"
    )
    .map((edge) => <PeopleLink key={edge.node.id} data={edge.node} />);

  return (
    <Layout>
      <HelmetWrapper title="People" />
      <h1>{language === "en" ? "Team Members" : "Thành Viên Nhóm"}</h1>
      <h2>{language === "en" ? "Supervisors" : "Giảng viên hướng dẫn"}</h2>
      <div className="grids small" style={{ marginBottom: "32px" }}>
        {supervisors}
      </div>
      <h2>{language === "en" ? "Leaders" : "Trưởng nhóm"}</h2>
      <div className="grids small" style={{ marginBottom: "32px" }}>
        {leaders}
      </div>
      <h2>{language === "en" ? "Members" : "Thành Viên"}</h2>
      <div className="grids small" style={{ marginBottom: "32px" }}>
        {currentPeople}
      </div>
      <h2>{language === "en" ? "Alumni" : "Cựu Thành Viên"}</h2>
      <div className="grids small" style={{ marginBottom: "32px" }}>
        {prevPeople}
      </div>
    </Layout>
  );
};

export default PeoplePage;

export const pageQuery = graphql`
  query peoplePageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(
      sort: { order: ASC, fields: [frontmatter___order] }
      filter: { frontmatter: { path: { regex: "/people/" } } }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            thumbnail
            metaDescription
            metaDescriptionvn
            position
            endYear
          }
        }
      }
    }
  }
`;
