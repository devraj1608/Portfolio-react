import React from 'react';
import './contact.css';
import { Link } from 'react-router-dom'; // Import Link for social media links

function Contact() {
  return (
    <>
      <div className="contact">
        <div className="contact-container">
          <h1>Contact Information</h1>
          <p className="intro">Feel free to reach out to me for any inquiries, collaborations, or just to connect!</p>

          <div className="contact-info">
            <div className="info-item">
              <h2>Email:</h2>
              <p>devrajsaini2005@gmail.com</p>
            </div>

            <div className="info-item">
              <h2>Phone:</h2>
              <p style={{ filter: "blur(2px)" }}>(+91) 9528551448</p>
            </div>

            <div className="info-item">
              <h2>Social Media:</h2>
              <div className="social-icons">
                <a href="https://x.com/Debu_saini_?t=Q1w0JRN8vf74-pJ2C9Ox0g&s=08"><i className="ri-twitter-fill"></i></a>
                <a href="https://www.linkedin.com/in/devraj-saini-54476b267?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><i className="ri-linkedin-fill"></i></a>
                <a href="https://www.facebook.com/share/KgYQFvv4k2AH7mq2/?mibextid=qi2Omg"><i className="ri-facebook-fill"></i></a>
                <a href="https://www.instagram.com/invites/contact/?igsh=qqnpji2dkdp5&utm_content=picndy7"><i className="ri-instagram-fill"></i></a>
                <a href="https://github.com/devraj1608"><i className="ri-github-fill"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
