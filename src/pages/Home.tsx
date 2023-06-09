import bgMobile from "../assets/home/background-home-mobile.jpg";
import bgTablet from "../assets/home/background-home-tablet.jpg";
import bgDesk from "../assets/home/background-home-desktop.jpg";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = (): JSX.Element => {
  const [backgroundImage, setBackgroundImage] = useState<string>(bgMobile);

  useEffect(() => {
    const screenWidth = window.innerWidth;

    if (screenWidth >= 1023) {
      setBackgroundImage(bgDesk);
    } else if (screenWidth >= 768) {
      setBackgroundImage(bgTablet);
    }
  }, []);

 
  return (
    <main className="home" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <section className="home__content" >
        <p className="home__text">
          <span className="home__text-line">So, you want to travel to</span>
          <span className="home__text-line">Space</span>
        </p>
        <p className="home__text">
          Let’s face it; if you want to go to space, you might as well genuinely go to
          outer space and not hover kind of on the edge of it. Well sit back, and relax
          because we’ll give you a truly out of this world experience!
        </p>
      </section>
      <section className="home__cta">
        <div className="home__cta-container">
          <Link to={"/destination"} className="home__cta-link" >Explore</Link>
          <div className="home__cta-link--shadow"></div>
        </div>
      </section>
    </main>
  );
};

export { Home };
