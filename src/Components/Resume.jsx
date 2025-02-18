import React, { useRef } from 'react';
import "./Resume.css";
import devimage from "./dev.jpg";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

function Resume() {
  const resumeRef = useRef(null);

  const generatePdf = () => {
    const input = resumeRef.current;
    const isMobile = window.innerWidth <= 768;

    // Add appropriate classes for PDF generation
    input.classList.add('pdf-generation');
    if (isMobile) {
      input.classList.add('force-mobile');
    }

    html2canvas(input, {
      scale: isMobile ? 3 : 2,
      backgroundColor: '#ffffff',
      useCORS: true
    }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pageWidth = pdf.internal.pageSize.getWidth();
      const imgHeight = (canvas.height * pageWidth) / canvas.width;

      // Add image to PDF
      pdf.addImage(imgData, 'PNG', 0, 0, pageWidth, imgHeight);
      pdf.save("Devraj_Saini_Resume.pdf");

      // Clean up classes
      input.classList.remove('pdf-generation', 'force-mobile');
    });
  };

  return (
    <>
      <div className="infocontainer" ref={resumeRef}>
        <div className="personalinfo">
          <img src={devimage} alt="Devraj" />
          <h1>Devraj Saini</h1>
          <div className="detail">
            <p>Email: <a href='mailto:devrajsaini2005@gmail.com'>devrajsaini2005@gmail.com</a> | Phone: +91 9528551448</p>
            <p>LinkedIn: <a href='https://www.linkedin.com/in/devraj-saini-54476b267/'>linkedin.com/in/Devraj Saini</a> | GitHub: <a href="https://github.com/devraj1608">github.com/devraj1608</a></p>
          </div>
        </div>

        <div className="container">
          <div className="first">
            <h1 style={{ color: "rgb(120, 192, 233)" }}>Resume:</h1>
            <h2>Summary</h2>
            <p>A passionate and highly motivated Computer Science graduate with a strong foundation in programming, problem-solving, and software development. Proficient in languages such as Python, C, and Java, with hands-on experience in web development and database management. Enthusiastic about learning new technologies, collaborating in team environments, and building innovative solutions. Seeking an opportunity to apply technical knowledge and grow in a dynamic software development role.</p>

            <h2>Experience</h2>
            <p>
              As a recent Computer Science graduate, I have worked on multiple academic and personal projects that have strengthened my problem-solving and coding skills. Developed a portfolio website using HTML, CSS, and JavaScript, built a unique image QR-Generator by bit manipulation with HTML, CSS, and JavaScript, and created a weather app integrating APIs. I have also built a project in App development (OCR-Transaction Receipt Scanner App). Gained hands-on experience with version control using Git and collaborated on coding assignments, enhancing teamwork and debugging abilities. Actively participated in hackathons and coding challenges to improve logical thinking and real-world application of programming concepts.
            </p>

            <h2>Education</h2>
            <p>
              <strong>Bachelor of Technology (B.Tech) in Computer Science</strong> <br />
              IMS Engineering College (Ghaziabad) Affiliated from AKTU University, Year- 2026 <br />
              <strong>Intermediate (12th Grade)</strong> <br />
              Tagore Shiksha Sadan (Hapur), Year-2022 <br />
              <strong>High School (10th Grade)</strong> <br />
              Tagore Shiksha Sadan (Hapur), Year-2020
            </p>

            <h2>Technical Assessment</h2>
            <p>Proficient in programming languages like Python, C, and Java with a strong understanding of data structures and algorithms. Hands-on experience in web development using HTML, CSS, and JavaScript. Familiar with database management using MySQL and MongoDB. Knowledge of software development methodologies, version control (Git/GitHub), and basic cloud computing concepts. Completed projects involving API integration, object-oriented programming, and problem-solving through competitive coding platforms. Enthusiastic about learning emerging technologies and applying technical skills to real-world challenges.</p>
          </div>

          <div className="second">
            <h2>Skills</h2>
            <p>
              <b>Programming Languages:</b> C, Python, Java <br />
              <b>Web Development:</b> HTML, CSS, JavaScript, Node.js, React <br />
              <b>Database:</b> MySQL, MongoDB <br />
              <b>Version Control:</b> Git, GitHub <br />
              <b>Operating Systems:</b> Windows, Linux.
            </p>

            <h2>Achievements</h2>
            <ul>
              <li>Successfully developed and deployed personal projects, including a portfolio website and a weather app.</li>
              <li>Completed online certifications in Python, Data Structures & Algorithms, and Web Development.</li>
              <li>Contributed to open-source projects on GitHub, enhancing collaboration and version control knowledge.</li>
              <li>Secured a high rank in competitive coding platforms like LeetCode.</li>
            </ul>

            <h2>Strengths</h2>
            <p>
              Problem-Solving Ability: Strong analytical skills to tackle coding challenges and debug efficiently. <br />
              Quick Learner: Adaptable to new technologies, programming languages, and development frameworks. <br />
              Logical Thinking: Strong foundation in data structures, algorithms, and computational logic. <br />
              Time Management: Capable of handling multiple tasks and meeting deadlines efficiently. <br />
              Creativity & Innovation: Passion for exploring new ideas and building innovative software solutions. <br />
            </p>

            <h2>Certifications</h2>
            <p>I have received certifications for completing my web development training organized by the college. <br />
              Additionally, I hold basic certifications in Python and Java courses.
            </p>

            <h2>Projects</h2>
            <p>
              <b>Portfolio Website</b> - Built a personal website using HTML, CSS, JavaScript, and React.js. <br />
              <b>Image-QR Generator with Bit Manipulation</b> - Created using HTML, CSS, and JavaScript. <br />
              <b>Weather App</b> - Developed a weather forecasting app using JavaScript and API integration. <br />
              <b>OCR-Receipt-Transaction Scanner App</b> - Built using Kotlin and XML in Android Studio.
            </p>
          </div>
        </div>
      </div>
      <button onClick={generatePdf} className="download-button">
        Download PDF
      </button>
    </>
  );
}

export default Resume;