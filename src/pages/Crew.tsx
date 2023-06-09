import { useEffect, useState } from "react";
import bgMobile from "../assets/crew/background-crew-mobile.jpg";
import bgTablet from "../assets/crew/background-crew-tablet.jpg";
import bgDesk from "../assets/crew/background-crew-desktop.jpg";
import data from "../data/data.json";

const dataCrew = data.crew;

const Crew = (): JSX.Element => {
    const [backgroundImage, setBackgroundImage] = useState<string>(bgMobile);
    const [cardIndex, setCardIndex] = useState<number>(0);

    const handleCardIndex = (index: number) => {
        setCardIndex(index);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCardIndex((prevIndex) => (prevIndex + 1) % 4);
        }, 16000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    useEffect(() => {
        const screenWidth = window.innerWidth;

        if (screenWidth >= 1023) {
            setBackgroundImage(bgDesk);
        } else if (screenWidth >= 768) {
            setBackgroundImage(bgTablet);
        }
    }, []);

    return (
        <main className="crew" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="crew__carousel">
                <p className="crew__heading">
                    <span className="crew__step">02</span>
                    <span className="crew__title">Meet your crew</span>
                </p>
                {dataCrew.map((mem, index) => (
                    <div className={`crew__card ${index === cardIndex ? "crew__card--active" : ""}`} key={mem.name}>
                        <figure className="crew__figure">
                            <img className="crew__image" src={mem.images.webp} alt={`${mem.name}'s photo`} />
                        </figure>
                        <div className="crew__content">
                            <ul className="crew__dots">
                                {dataCrew.map((mem, index) => (
                                    <li
                                        className={`crew__dot ${index === cardIndex ? "crew__dot--active" : ""}`}
                                        key={mem.name}
                                        onClick={() => handleCardIndex(index)}
                                    ></li>
                                ))}
                            </ul>
                            <div className="crew__info">
                                <p className="crew__role">{mem.role}</p>
                                <p className="crew__name">{mem.name}</p>
                            </div>
                            <p className="crew__bio">{mem.bio}</p>
                            <ul className="crew__dots--tablet">
                                {dataCrew.map((mem, index) => (
                                    <li
                                        className={`crew__dot--tablet ${index === cardIndex ? "crew__dot--tablet--active" : ""}`}
                                        key={mem.name}
                                        onClick={() => handleCardIndex(index)}
                                    ></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
};

export { Crew };
