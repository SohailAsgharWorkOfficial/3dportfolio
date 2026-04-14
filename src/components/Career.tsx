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
              <h3>NOW</h3>
            </div>
            <p>
              Implement production-ready features across frontend and backend,
              ensuring reliability, maintainability, and modular architecture.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web App Developer</h4>
                <h5>Ethisol</h5>
              </div>
              <h3>24-25</h3>
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
              <h3>22-24</h3>
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
                <h5>Artificial Intelligence Community of Pakistan</h5>
              </div>
              <h3></h3>
            </div>
            <p>
              Contributed to the development of enterprise-level applications
              by assisting in design, feature implementation, and system
              optimization. Collaborated with teams to deliver scalable,
              high-performance business solutions while following industry best
              practices.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
