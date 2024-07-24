import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import PeopleLink from "../components/people-link";
import HelmetWrapper from "../components/helmetWrapper";

const PeoplePage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
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
      <h1>Team Members | Thành viên nhóm</h1>
      <h2>Supervisors | Giảng viên hướng dẫn</h2>
      <div className="grids small" style={{ marginBottom: "32px" }}>
        {supervisors}
      </div>
      <h2>Leaders | Trưởng nhóm</h2>
      <div className="grids small" style={{ marginBottom: "32px" }}>
        {leaders}
      </div>
      <h2>Members | Thành viên</h2>
      <div className="grids small" style={{ marginBottom: "32px" }}>
        {currentPeople}
      </div>
      <h2>Alumni | Cực sinh viên</h2>
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
            position
            endYear
          }
        }
      }
    }
  }
`;
