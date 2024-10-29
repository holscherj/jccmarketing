import "./Home.css";
import dots_img from "../../assets/dots.png";
import logo_svg from "../../assets/logo.svg";
import digital_marketing from "../../assets/digital-marketing.png"

function Home() {
    return (
    <>
        <div className="landing-page">
            <nav className="navbar">
                <div className="logo">
                    <img src={logo_svg} alt="Company Logo" />
                    <span className="company-name">JCC Marketing Group</span>
                </div>
                <div className="nav-links">
                    <a href="/about">About</a>
                    <a href="/getstarted">Services</a>
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
    </>
    );
}

export default Home;