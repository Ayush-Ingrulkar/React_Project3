
import React, { useEffect } from "react"; 
import "./HomePage.css";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import AOS from "aos";
import "aos/dist/aos.css";

const HomePage = () => {
  useEffect(() => { AOS.init({ duration: 2000 }); }, []);
  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="text-content">
          <h1 className="animated-text">
            Hello, I am <span className="highlight">Ayush Ingrulkar</span>
          </h1>
          <h2 className="animated-text">Tech Enthusiast</h2>
          <p className="animated-text">
          As a full-stack web developer, I thrive on bringing ideas to life through interactive and engaging web applications. I'm passionate about creating seamless user experiences.. Attired with a variety of tools and technologies and keen to
            learn new ones.
          </p>
            
          <div className="contact-icons animated-text">
            <i className="fas fa-phone"></i>
            <i className="fas fa-envelope"></i>
          </div>
        </div>
      </div>
{/* Resume Button Section */}
 <div className="resume-section" data-aos="fade-up"> 
<h2 className="resume-highlight">Here's My <span className="highlight">RESUME</span></h2>
  <a href="C:\Users\Ayush\Desktop\Ayush Ingrulkar Resume.pdf" target="_blank" className="btn resume-btn"> View Resume </a> 
  </div>
      {/* Login Section */}
      <div className="login-section"  data-aos="fade-up">
        <h4 className="login-text">Please Login to my page</h4>
        <Link to="/login">
          <button className="btn login-btn">Login</button>
        </Link>
      </div>

      {/* Skills Section */}
      <div className="skills-section" data-aos="fade-up">
        <h2>SKILLS</h2>
        <div className="skills-grid">
          <div className="skill-card">
            <i className="fab fa-js"></i>
            <p>JavaScript</p>
          </div>
          <div className="skill-card">
            <i className="fab fa-react"></i>
            <p>React JS</p>
          </div>
          <div className="skill-card">
            <i className="fas fa-database"></i>
            <p>SQL</p>
          </div>
          <div className="skill-card">
            <i className="fab fa-git"></i>
            <p>Git</p>
          </div>
          <div className="skill-card">
            <i className="fas fa-leaf"></i>
            <p>MongoDB</p>
          </div>
          <div className="skill-card">
            <i className="fab fa-node"></i>
            <p>Node.js</p>
          </div>
        </div>
      </div>


      {/* About Section */}
      <div className="about-section" data-aos="fade-up"> 
        <h3 className="about-title">Everything About Me</h3>
         <p className="about-text"> I am a dedicated and passionate developer with expertise in front-end development,
           focusing on creating dynamic and responsive web applications. I have experience working with various technologies, 
           including JavaScript, React and more. My professional journey has been marked by continuous learning and 
           adapting to new challenges in the tech industry. Whether collaborating with teams or working independently, I
            strive to deliver high-quality work that meets and exceeds expectations. On the back end, I'm proficient in building robust and scalable server-side logic using technologies like 
             Node.js,MongoDB,MySql .This includes designing databases, implementing APIs, and ensuring application security and performance. 
             I believe that a strong back end is crucial for delivering a truly interactive and responsive user experience. 
             My full-stack expertise allows me to handle all aspects of development, from designing intuitive user interfaces to building robust back-end systems.
             This comprehensive skill set enables me to create dynamic web experiences that are not only visually appealing but also performant and scalable, providing users with a seamless and interactive journey.</p> </div>

      {/* Social Media Buttons Section */}
      <div className="social-buttons">
        <a
          href="https://github.com/Ayush-Ingrulkar/React_Project2"
          className="social-btn github"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/ayush-ingrulkar-23079933b/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3B227jVcrXTKSQmkKzs3Y3%2FA%3D%3D"
          className="social-btn linkedin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a
          href="https://www.instagram.com/ayush_680.8/"
          className="social-btn instagram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </div>
  );
};

export default HomePage;
