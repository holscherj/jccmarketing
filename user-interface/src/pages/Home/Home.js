import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Home.css";
import dots_img from "../../assets/dots.png";
import logo_svg from "../../assets/logo.svg";
import digital_marketing from "../../assets/digital-marketing.jpg"
import digital_marketing1 from "../../assets/digital-marketing1.jpg"
import carson from "../../assets/carson.jpg";
import cooper from "../../assets/cooper.jpg";
import jack from "../../assets/jack.PNG";

function Home() {

    const navigate = useNavigate();
    const onContact = () => {
        navigate("/contact")
    }

    const [isNavOpen, setIsNavOpen] = useState(false);
    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
    <>
        <div className="landing-page">
            <nav className="navbar">
                <div className="logo">
                    <img src={logo_svg} alt="Company Logo" />
                    <span className="company-name">JCC Marketing Group</span>
                </div>
                <div className="hamburger" onClick={toggleNav}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className={`nav-links ${isNavOpen ? 'open' : ''}`}>
                    <a href="/about">Pricing</a>
                    <a href="/contact">Contact</a>
                </div>
            </nav>

            <div className="content">
                <div className="left-column">
                    <img src={dots_img} alt="Intro Image" />
                </div>
                <div className="right-column">
                    <h1 className="headline"> Welcome to JCC Marketing </h1>
                    <p className="tagline"> Providing Northern Michigan With Marketing Solutions of All Kinds - for All Businesses </p>
                </div>
            </div>

            <hr />
        </div>

        <div className="jcc-way">
            <div className="way-container">
                <div className="way-text">
                    <p className="way-text-big"> The JCC Way </p>
                    <p className="way-text-small"> 
                        Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet
                        Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet
                        Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet
                        Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet
                        Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet
                    </p>
                </div>
                <div className="way-image">
                    <img src={digital_marketing1}  />
                </div>
            </div>
        </div>

        <div className="what-we-offer">
            <div className="offer-text">
                <p> What We Offer </p>
            </div>

            <hr />

            <div className="offer-container">
                <div className="offer">
                    <img src={digital_marketing}/>
                    <p>
                        Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet
                        Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet
                        Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet
                    </p>
                </div>
                <div className="offer">
                    <img src={digital_marketing}/>
                    <p>
                        Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet
                        Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet
                        Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet
                    </p>
                </div>
                <div className="offer">
                    <img src={digital_marketing}/>
                    <p>
                        Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet
                        Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet
                        Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet
                    </p>
                </div>
            </div>
        </div>

        <div className="meet-the-team">
            <div className="team-text">
                <p> Our Team </p>
            </div>
            <div className="team-container">
                <div className="team-member">
                    <img src={carson}/>
                    <p>
                        Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet
                        Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet
                        Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet
                    </p>
                </div>
                <div className="team-member">
                    <img src={cooper}/>
                    <p>
                        Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet
                        Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet
                        Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet
                    </p>
                </div>
                <div className="team-member">
                    <img src={jack}/>
                    <p>
                        Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet
                        Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet
                        Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet
                    </p>
                </div>
            </div>
        </div>

        <div className="contact">
            <p className="contact-text-big">
                Talk to Us
            </p>
            <p className="contact-text-small">
                We’re excited to hear from you! The best way to get in touch is by emailing us directly.
                To help us serve you better, please include your name, business name, and a brief overview
                of what you’re hoping to accomplish. This information allows us to understand your needs
                and prepare for our conversation. Once we receive your message, we’ll reach out to
                schedule a meeting at the earliest possible convenience. We look forward to connecting
                with you soon!
            </p>
            <div className="contact-button" onClick={onContact}>
                Get Started
            </div>
        </div>

        <div className="footer">
            <hr />
            <div className="footer-title">
                <p> &copy; JCC Marketing Group, LLC 2024 </p>
            </div>
        </div>
    </>
    );
}

export default Home;