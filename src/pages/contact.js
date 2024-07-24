import { graphql } from "gatsby";
import React, { useState } from "react";
import emailjs from "emailjs-com";
import HelmetWrapper from "../components/helmetWrapper";
import Layout from "../components/layout";
import { useLanguageContext } from "../contexts/language-context";

const RequiredWarning = ({ fieldName }) => {
  return (
    <span style={{ color: "#ff4542" }}>
      {` — ${fieldName} is required!`}
    </span>
  );
};

const ContactPage = ({ data: { site } }) => {
  const { language } = useLanguageContext();
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
        description={`Contact page of ${site.siteMetadata.description}`}
      />
      <div className="two-grids -contact">
        <div>
          <h1 className="post-title">
            {language === "en" ? "Contact us" : "Liên hệ"}
          </h1>
          <div className="primary-content">
            {language === "en" ? (
              <>
                If you're interested in joining the lab, collaborating, or have
                any inquiries, please don't hesitate to send us an email at
                <a href="mailto:rise.bkai@gmail.com"> rise.bkai@gmail.com </a>
                or use the form on this page &rarr;
              </>
            ) : (
              <>
                Nếu bạn quan tâm đến việc tham gia phòng thí nghiệm, hợp tác hoặc có bất kỳ thắc mắc nào, vui lòng gửi email cho chúng tôi tại
                <a href="mailto:rise.bkai@gmail.com"> rise.bkai@gmail.com </a>
                hoặc sử dụng biểu mẫu trên trang này &rarr;
              </>
            )}
          </div>
          <div className="primary-content">
            <b>{language === "en" ? "Student Recruitment for Research Team:" : "Tuyển sinh viên cho nhóm nghiên cứu:"}</b>
            {language === "en" ? (
              <>
                The Research Group for Intelligent Software Engineering (RISE) is
                looking for undergraduate students driven by excellence, excited
                about innovation, and looking to make a difference. If this sounds
                like you, you have come to the right place!
              </>
            ) : (
              <>
                Nhóm Nghiên cứu Kỹ thuật Phần mềm Thông minh (RISE) đang tìm kiếm các sinh viên đại học đam mê xuất sắc, hứng thú với đổi mới và muốn tạo sự khác biệt. Nếu điều này nghe giống bạn, bạn đã đến đúng chỗ!
              </>
            )}
          </div>
          <div className="primary-content">
            <b>{language === "en" ? "Opportunities & Benefit:" : "Cơ hội & Lợi ích:"}</b>
            <ul>
              {language === "en" ? (
                <>
                  <li>To work on cutting-edge research topics in Software Engineering and Artificial Intelligence;</li>
                  <li>To be instructed and collaborated by/with prestigious professors and researchers from HUST and collaborated universities, e.g., University of Melbourne, and Singapore Management University;</li>
                  <li>To work in a professional, open-minded environment with energetic and experienced colleagues;</li>
                  <li>To have publications in top-tier journals and conferences in Software Engineering and Artificial Intelligence;</li>
                  <li>To be supported in applying for the scholarship in developed countries, e.g., US, Singapore and Australia, for postgraduate (Master's or Ph.D.).</li>
                </>
              ) : (
                <>
                  <li>Được làm việc trên các chủ đề nghiên cứu tiên tiến trong Kỹ thuật Phần mềm và Trí tuệ Nhân tạo;</li>
                  <li>Được hướng dẫn và hợp tác với các giáo sư và nhà nghiên cứu uy tín từ HUST và các trường đại học hợp tác, ví dụ: Đại học Melbourne và Đại học Quản lý Singapore;</li>
                  <li>Được làm việc trong môi trường chuyên nghiệp, cởi mở với các đồng nghiệp năng động và có kinh nghiệm;</li>
                  <li>Được xuất bản trong các tạp chí và hội nghị hàng đầu trong lĩnh vực Kỹ thuật Phần mềm và Trí tuệ Nhân tạo;</li>
                  <li>Được hỗ trợ trong việc xin học bổng tại các nước phát triển, ví dụ: Mỹ, Singapore và Úc, cho sau đại học (Thạc sĩ hoặc Tiến sĩ).</li>
                </>
              )}
            </ul>
          </div>    
          <div className="primary-content">
            <b>{language === "en" ? "Your Role:" : "Vai trò của bạn:"}</b>
            {language === "en" ? (
              <>
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
                  <li>Perform literature review and empirical studies on assigned topics</li>
                  <li>Implement solutions</li>
                  <li>Present and report at least once a week</li>
                  <li>Communicate and coordinate with partners</li>
                  <li>Plan and participate in project meetings</li>
                </ul>
              </>
            ) : (
              <>
                Các sinh viên sẽ được hướng dẫn bởi các giám sát viên và tham gia vào
                nghiên cứu khoa học chuyên nghiệp. Các chủ đề nghiên cứu bao gồm nhưng
                không giới hạn ở:
                <ul>
                  <li>AI cho Kỹ thuật Phần mềm</li>
                  <li>Mô hình Ngôn ngữ Lớn cho các tác vụ liên quan đến mã, ví dụ: Phát hiện lỗi, Sửa lỗi và Tạo mã</li>
                  <li>An ninh Chuỗi Cung ứng Phần mềm</li>
                </ul>
                Người giữ vị trí này sẽ được yêu cầu thực hiện các nhiệm vụ sau:
                <ul>
                  <li>Hoàn thành các nhiệm vụ do người hướng dẫn giao</li>
                  <li>Thực hiện tổng quan tài liệu và các nghiên cứu thực nghiệm về các chủ đề được giao</li>
                  <li>Triển khai các giải pháp</li>
                  <li>Trình bày và báo cáo ít nhất một lần một tuần</li>
                  <li>Giao tiếp và phối hợp với các đối tác</li>
                  <li>Lên kế hoạch và tham gia các cuộc họp dự án</li>
                </ul>
              </>
            )}
          </div>
          <div className="primary-content">
            <b>{language === "en" ? "Qualifications:" : "Yêu cầu:"}</b>
            <ul>
              {language === "en" ? (
                <>
                  <li>Have a passion for academic research or have a studying orientation in advanced countries for postgraduate (Master's or Ph.D.)</li>
                  <li>Interest in one of the following areas: Software Engineering, Artificial Intelligence, Machine Learning</li>
                  <li>Good background in Deep Learning or Program Analysis/Software Testing</li>
                  <li>Strong programming skills</li>
                  <li>English skills: reading and writing (optional)</li>
                </>
              ) : (
                <>
                  <li>Có đam mê nghiên cứu học thuật hoặc có định hướng học tập tại các quốc gia tiên tiến cho sau đại học (Thạc sĩ hoặc Tiến sĩ)</li>
                  <li>Quan tâm đến một trong các lĩnh vực sau: Kỹ thuật Phần mềm, Trí tuệ Nhân tạo, Học máy</li>
                  <li>Nền tảng tốt về Học sâu hoặc Phân tích Chương trình/ Kiểm thử Phần mềm</li>
                  <li>Kỹ năng lập trình mạnh</li>
                  <li>Kỹ năng tiếng Anh: đọc và viết (tùy chọn)</li>
                </>
              )}
            </ul>
          </div> 
          <div className="primary-content">
            <b>{language === "en" ? "Office:" : "Văn phòng:"}</b> 
            {language === "en" ? (
              <>Hanoi University of Science and Technology, B1 Building, Room 409, Tran Dai Nghia Road, Hai Ba Trung District, Hanoi, Vietnam.</>
            ) : (
              <>Đại học Bách Khoa Hà Nội, Tòa nhà B1, Phòng 409, Đường Trần Đại Nghĩa, Quận Hai Bà Trưng, Hà Nội, Việt Nam.</>
            )}
          </div>
        </div>
        <div>
          <form className="form-container" onSubmit={handleSubmit}>
            {submitted ? (
              <p style={{ margin: 0, lineHeight: "1.5em" }}>
                {language === "en" ? "Your message has successfully been sent! It generally takes one to two days for us to reply." : "Tin nhắn của bạn đã được gửi thành công! Thường mất từ một đến hai ngày để chúng tôi trả lời."}
              </p>
            ) : (
              <>
                <div>
                  <label htmlFor="w3lName">
                    {language === "en" ? "Name" : "Tên"}
                    {formError.includes("name") && (
                      <RequiredWarning fieldName={language === "en" ? "Name" : "Tên"} />
                    )}
                  </label>
                  <input type="text" name="w3lName" id="w3lName" />
                </div>
                <div>
                  <label htmlFor="w3lSender">
                    {language === "en" ? "Email" : "Email"}
                    {formError.includes("replyTo") && (
                      <RequiredWarning fieldName={language === "en" ? "Email" : "Email"} />
                    )}
                  </label>
                  <input type="email" name="w3lSender" id="w3lSender" />
                </div>
                <div>
                  <label htmlFor="w3lSubject">
                    {language === "en" ? "Subject" : "Chủ đề"}
                    {formError.includes("subject") && (
                      <RequiredWarning fieldName={language === "en" ? "Subject" : "Chủ đề"} />
                    )}
                  </label>
                  <input type="text" name="w3lSubject" id="w3lSubject" />
                </div>
                <div>
                  <label htmlFor="w3lMessage">
                    {language === "en" ? "Message" : "Tin nhắn"}
                    {formError.includes("message") && (
                      <RequiredWarning fieldName={language === "en" ? "Message" : "Tin nhắn"} />
                    )}
                  </label>
                  <textarea 
                    name="w3lMessage" 
                    id="w3lMessage" 
                    placeholder={language === "en" ? "Tell us about yourself and Why you'd like to enroll into our lab ..." : "Hãy giới thiệu bản thân của bạn, cũng như lý do bạn muốn tham gia vào lab này ..."}
                  ></textarea>
                </div>
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <input
                    type="submit"
                    className="button -primary"
                    style={{ marginRight: 0 }}
                    value={language === "en" ? "Send" : "Gửi"}
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
