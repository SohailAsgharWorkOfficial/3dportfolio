import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer</h4>
                <h5>Inventocube</h5>
              </div>
              <h3>May 25-Present</h3>
            </div>
            <p>
              Implementing production-ready features across frontend and backend,
              ensuring reliability, maintainability, and modular architecture.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web App Developer</h4>
                <h5>Ethisol</h5>
              </div>
              <h3>Jan 24-Apr 25</h3>
            </div>
            <p>
              Developed and deployed modern, responsive web applications for
              diverse clients across multiple industries successfully.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Frontend Developer</h4>
                <h5>Ethisol</h5>
              </div>
              <h3>Mar 22-Jan 24</h3>
            </div>
            <p>
              Converted Figma and Adobe XD designs into high-quality,
              maintainable code with pixel-perfect accuracy consistently.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Programming Intern</h4>
                <h5>AICP</h5>
              </div>
              <h3>Oct 23-Dec 23</h3>
            </div>
            <p>
              Contributed to the development of enterprise-level applications
              by assisting in design, feature implementation, and system
              optimization. 
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Dev Intern</h4>
                <h5>Codsoft</h5>
              </div>
              <h3>Sep 23-Oct 23</h3>
            </div>
            <p>
               Successfully completed a Web Development internship at Codsoft, gaining practical experience in building responsive and user-friendly web applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
