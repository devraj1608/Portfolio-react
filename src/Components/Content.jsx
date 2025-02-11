import React, { useState, useEffect } from 'react';
import './Content.css';
import devimage from "./dev.jpg";
import { Link } from 'react-router-dom';


function Content() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    useEffect(() => {
        const menu = document.querySelector('#menu-icon');
        const navlist = document.querySelector('.navlist');
        if (menu && navlist) {
            menu.onclick = toggleMenu;
        }
    }, []);

    useEffect(() => {
        const typed = new Typed(".input", {
            strings: ["Web Developer.", "App Developer."],
            typeSpeed: 80,
            backSpeed: 70,
            loop: true
        });

        return () => {
            typed.destroy(); // Clean up the Typed instance on component unmount
        };
    }, []);

    return (
        <>
            <section className="hero">
                <div className="hero-text">
                    <h6>Hello,<span>my name is  </span></h6>
                    <h1><span>Devraj</span>Saini</h1>
                    <h4>I am <span className="input"></span></h4>
                    <p>I am a passionate and results-driven Software Engineer with a strong background in designing, developing and optimizing software solutions.
                    With expertise in programming languages, e.g., Python, Java, Javascript, Html, CSS and C and experience in web development and the App development.
                    I thrive on solving complex technical challenges.
                    I have worked on react-project, node.js projects and the App development (Android Studio).
                    My goal is to build scalable, efficient and innovative software that enhances user experiences and drives business success.
                    Beyond coding, I enjoy learning about emerging technologies and continuously improving my skills to stay ahead in the fast-evolving tech industry.</p>
                    
                    <div className="social-icons">
                        <Link to="https://x.com/Debu_saini_?t=Q1w0JRN8vf74-pJ2C9Ox0g&s=08"><i className="ri-twitter-fill"></i></Link>
                        <a href="https://www.linkedin.com/in/devraj-saini-54476b267?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><i className="ri-linkedin-fill"></i></a>
                        <a href="https://www.facebook.com/share/KgYQFvv4k2AH7mq2/?mibextid=qi2Omg"><i className="ri-facebook-fill"></i></a>
                        <a href="https://www.instagram.com/invites/contact/?igsh=qqnpji2dkdp5&utm_content=picndy7"><i className="ri-instagram-fill"></i></a>
                        <a href="https://github.com/devraj1608"><i className="ri-github-fill"></i></a>
                    </div>

                    <div className="main-btn">
                        <Link to="/resume" className="btn" aria-label="Open Resume">Open Resume</Link>
                        <Link to="/myskills" className="btn2" aria-label="Open Myskills">My Skills</Link>
                    </div>
                </div>

                <div className="hero-img">
                    <img src={devimage} alt=""/>
                </div>
            </section>

         
        </>
    );
}

export default Content;
