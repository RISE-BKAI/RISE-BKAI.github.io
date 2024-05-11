import { graphql } from "gatsby";
import React, { useState } from "react";
import emailjs from "emailjs-com";
import HelmetWrapper from "../components/helmetWrapper";
import Layout from "../components/layout";

const RequiredWarning = ({ fieldName }) => {
  return (
    <span style={{ color: "#ff4542" }}>{` — ${fieldName} is required!`}</span>
  );
};

const ContactPage = ({ data: { site } }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formdata = new FormData(e.target);

    const templateParams = {
      name: formdata.get("w3lName"),
      replyTo: formdata.get("w3lSender"),
      subject: formdata.get("w3lSubject"),
      message: formdata.get("w3lMessage"),
    };

    // Check required fields
    let checkedFields = [];

    Object.entries(templateParams).forEach(([key, value]) => {
      if (!value) {
        checkedFields.push(key);
      } else {
        checkedFields = checkedFields.filter((field) => field !== key);
      }
    });

    setFormError(checkedFields);

    if (checkedFields.length === 0) {
      emailjs
        .send(
          "service_uqpndcg", // Replace with your EmailJS Service ID
          "template_m09ybqm", // Replace with your EmailJS Template ID
          templateParams,
          "t2_39GqpP09bl4pnN" // Replace with your EmailJS User ID
        )
        .then(
          (result) => {
            console.log(result.text);
            setSubmitted(true);
          },
          (error) => {
            console.error(error.text);
          }
        );
    }
  };

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
            <a href="mailto:rise.bkai@gmail.com">
              {" "}
              rise.bkai@gmail.com{" "}
            </a>
            or use the form on this page &rarr;
          </div>
          <div className="primary-content">
            <b>Student Recruitment for Research Team:</b>
            The Research Group for Intelligent Software Engineering (RISE) is
            looking for undergraduate students driven by excellence, excited
            about innovation, and looking to make a difference. If this sounds
            like you, you have come to the right place!
          </div>
          <div className="primary-content">
            <b>Opportunities & Benefit:</b>
            <ul>
              <li>
                To work on cutting-edge research topics in Software Engineering and Artificial Intelligence;
              </li>
              <li>
                To be instructed and collaborated by/with prestigious professors and researchers from HUST and collaborated universities, e.g., University of Melbourne, and Singapore Management University;
              </li>
              <li>
                To work in a professional, open-minded environment with energetic and experienced colleagues;
              </li>
              <li>
                To have publications in top-tier journals and conferences in Software Engineering and Artificial Intelligence;
              </li>
              <li>
                To be supported in applying for the scholarship in developed countries, e.g., US, Singapore and Australia, for postgraduate (Master's or Ph.D.).
              </li>
            </ul>
          </div>    
          <div className="primary-content">
            <b>Your Role:</b>
            The students will be instructed by supervisors and participate in
            professional, scientific research. The research topics include but
            are not limited to:
            <ul>
              <li>AI for Software Engineering</li>
              <li>Large Language Models for Code-related tasks, e.g., Bug Detection, Bug Fixing and Code Generation</li>
              <li>Software Supply Chain Security</li>
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
                Testing
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
          <form className="form-container" onSubmit={handleSubmit}>
            {submitted ? (
              <p style={{ margin: 0, lineHeight: "1.5em" }}>
                Your message has successfully been sent! It generally takes one
                to two days for us to reply.
              </p>
            ) : (
              <>
                <div>
                  <label htmlFor="w3lName">
                    Name{" "}
                    {formError.includes("name") && (
                      <RequiredWarning fieldName={"Name"} />
                    )}
                  </label>
                  <input type="text" name="w3lName" id="w3lName" />
                </div>
                <div>
                  <label htmlFor="w3lSender">
                    Email
                    {formError.includes("replyTo") && (
                      <RequiredWarning fieldName={"Email"} />
                    )}
                  </label>
                  <input type="email" name="w3lSender" id="w3lSender" />
                </div>
                <div>
                  <label htmlFor="w3lSubject">
                    Subject
                    {formError.includes("subject") && (
                      <RequiredWarning fieldName={"Subject"} />
                    )}
                  </label>
                  <input type="text" name="w3lSubject" id="w3lSubject" />
                </div>
                <div>
                  <label htmlFor="w3lMessage">
                    Message
                    {formError.includes("message") && (
                      <RequiredWarning fieldName={"Message"} />
                    )}
                  </label>
                  <textarea name="w3lMessage" id="w3lMessage"></textarea>
                </div>
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <input
                    type="submit"
                    className="button -primary"
                    style={{ marginRight: 0 }}
                  />
                </div>
              </>
            )}
          </form>
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
