import { useNavigate } from 'react-router-dom';

function Home() {
    return (
        <>
            <header id="header">
                <span id='header-company'> JCC Marketing Group </span>
                <span id='header-logo'> Logo </span>
            </header>
                <main id="main">
                <section id="main-opening">
                    <div id="main-welcome"> Welcome to JCC Marketing Group </div>
                    <div id="main-tagline"> Providing the Northern Michigan area with marketing solutions of all kinds - for all businesses. </div>
                    <hr id="main-break"/>
                </section>
                <MainLinks />
            </main>
        </>
    );
}

function MainLinks() {
    return (
      <section id="main-links">
        <MainLink name="About Us" path="/about" />
        <MainLink name="Get Started" path="/getstarted" />
        <MainLink name="Contact" path="/contact" />
      </section>
    );
  }
  
  function MainLink({path, name}) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(path);
    };

    return (
        <button className="main-link-button" onClick={handleClick}>
        {name}
        </button>
    );
  }

export default Home;