import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import HeroHeader from "../components/heroHeader";
import { useThemeContext } from "../contexts/theme-context";
import HelmetWrapper from "../components/helmetWrapper";

const IndexPage = ({
  data: {
    site: {
      siteMetadata: { title, description, home },
    },
  },
}) => {
  const { theme } = useThemeContext();

  // Render collaborator images
  const CollaboratorImages = home.collaborators[theme].map((imgPath) => (
    <div key={imgPath} className="image-container funder">
      <img src={imgPath} alt={imgPath} />
    </div>
  ));

  return (
    <Layout>
      <HelmetWrapper />
      <HeroHeader />
      <h2>Collaborators</h2>
      <div className="grids outer-container small small-on-mobile">{CollaboratorImages}</div>
    </Layout>
  );
};

export default IndexPage;
export const pageQuery = graphql`
  query indexPageQuery {
    site {
      siteMetadata {
        title
        description
        home {
          title
          description
          interests
          collaborators {
            dark
            light
          }
        }
      }
    }
  }
`;
