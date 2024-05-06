import { graphql } from "gatsby";
import React from "react";
import HelmetWrapper from "../components/helmetWrapper";
import Layout from "../components/layout";

const ContactPage = ({ data: { site } }) => {
  return (
    <Layout>
      <HelmetWrapper
        title={`Contact | ${site.siteMetadata.title}`}
        description={"Contact page of " + site.siteMetadata.description}
      />
      <div className="two-grids -contact">
        <div>
          <h1 className="post-title">Contact us</h1>
          <div className="primary-content">
            If you're interested in joining the lab, collaborating, or have any
            inquiries, please don't hesitate to send us an email at
            <a href="mailto:congthanh.le@student.unimelb.edu.au">
              {" "}
              congthanh.le@student.unimelb.edu.au{" "}
            </a>
            or send an email to the research group directly.
          </div>
          <div className="primary-content">
            <b>Student Recruitment for Research Team:</b>
            The Research Group for Intelligent Software Engineering (RISE) is
            looking for undergraduate students driven by excellence, excited
            about innovation, and looking to make a difference. If this sounds
            like you, you have come to the right place!
          </div>
          <div className="primary-content">
            <b>Your Role:</b>
            The students will be instructed by supervisors and participate in
            professional, scientific research. The research topics include but
            are not limited to:
            <ul>
              <li>Automated Bug Fixing</li>
              <li>Just-in-time Defect Prediction</li>
              <li>Automatic Code Summarization</li>
              <li>Software Supply Chain Security</li>
              <li>Automated Software Verification</li>
              <li>Bidirectional Programming</li>
            </ul>
            The position holder will be required to perform the following tasks:
            <ul>
              <li>Complete the tasks assigned by mentors</li>
              <li>
                Perform literature review and empirical studies on assigned
                topics
              </li>
              <li>Implement solutions</li>
              <li>Present and report at least once a week</li>
              <li>Communicate and coordinate with partners</li>
              <li>Plan and participate in project meetings</li>
            </ul>
          </div>
          <div className="primary-content">
            <b>Qualifications:</b>
            <ul>
              <li>
                Have a passion for academic research or have a studying
                orientation in advanced countries for postgraduate (Master's or
                Ph.D.)
              </li>
              <li>
                Interest in one of the following areas: Software Engineering,
                Artificial Intelligence, Machine Learning
              </li>
              <li>
                Good background in Deep Learning or Program Analysis/Software
                Testing or Web Development
              </li>
              <li>Strong programming skills</li>
              <li>English skills: reading and writing (optional)</li>
            </ul>
          </div>
          <div className="primary-content">
            <b>Office:</b> Hanoi University of Science and Technology, B1
            Building, Room 409, Tran Dai Nghia Road, Hai Ba Trung District,
            Hanoi, Vietnam.
          </div>
        </div>
        <div>
          <img
            src="/assets/logos/we-want-you.png"
            alt="Research Lab Team"
            style={{ width: "100%", borderRadius: "8px" }}
          />
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;
export const pageQuery = graphql`
  query ContactPageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;
