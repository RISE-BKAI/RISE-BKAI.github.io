import React from "react";
import { graphql } from "gatsby";
import Slider from "react-slick";
import Layout from "../components/layout";
import HeroHeader from "../components/heroHeader";
import { useThemeContext } from "../contexts/theme-context";
import { useLanguageContext } from "../contexts/language-context";
import HelmetWrapper from "../components/helmetWrapper";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const IndexPage = ({
  data: {
    site: {
      siteMetadata: { title, description, home },
    },
  },
}) => {
  const { theme } = useThemeContext();
  const { language } = useLanguageContext();

  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  // Render lab images (for the slider)
  const LabImages = home.labImage[theme].map((imgPath) => (
    <div key={imgPath} className="image-container">
      <img
        src={imgPath}
        alt={imgPath}
        className="lab-slide-image"
        style={{ width: "100%" }}
      />
    </div>
  ));

  // Render collaborator images
  const CollaboratorImages = home.collaborators[theme].map((imgPath) => (
    <div key={imgPath} className="image-container funder">
      <img src={imgPath} alt={imgPath} style={{ width: "100%" }} />
    </div>
  ));

  // Render news
  const News = home.news.map((item, index) => (
    <li key={index}>
      <b>[{language === "en" ? item.date : item.datevn}]</b> {language === "en" ? item.content : item.contentvn}{" "}
      <a href={item.link} target="_blank" rel="noopener noreferrer">
        [{language === "en" ? "Read more" : "Đọc thêm"}]
      </a>
    </li>
  ));

  return (
    <Layout>
      <HelmetWrapper />
      <HeroHeader />
      <div className="outer-container">
        <Slider {...sliderSettings}>{LabImages}</Slider>
      </div>
      <h2>{language === "en" ? "News" : "Tin tức"}</h2>
      <ul className="news-list">{News}</ul>
      <h2>{language === "en" ? "Collaborators" : "Cộng tác viên"}</h2>
      <div className="grids outer-container small small-on-mobile">
        {CollaboratorImages}
      </div>
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
          titlevn
          description
          descriptionvn
          interests
          interestsvn
          labImage {
            dark
            light
          }
          news {
            date
            datevn
            content
            contentvn
            link
          }
          collaborators {
            dark
            light
          }
        }
      }
    }
  }
`;
