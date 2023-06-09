import { useEffect, useState } from "react";
import bgMobile from "../../public/assets/destination/background-destination-mobile.jpg";
import bgTablet from "../../public/assets/destination/background-destination-tablet.jpg";
import bgDesk from "../../public/assets/destination/background-destination-desktop.jpg";
import data from "../data/data.json";

const dataDestinations = data.destinations;

const Destinations = (): JSX.Element => {
    const [backgroundImage, setBackgroundImage] = useState<string>(bgMobile);
    const [cardIndex, setCardIndex] = useState<number>(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCardIndex((prevIndex) => (prevIndex + 1) % 4);
        }, 15000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    const handleCardIndex = (index: number) => {
       setCardIndex(index);
    }; 

    useEffect(() => {
        const screenWidth = window.innerWidth;

        if (screenWidth >= 1023) {
            setBackgroundImage(bgDesk);
        } else if (screenWidth >= 768) {
            setBackgroundImage(bgTablet);
        }
    }, []);

    return (
        <main className="destinations" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <p className="destinations__heading">
                <span className="destinations__step">01</span>
                <span className="destinations__title">Pick your destination</span>
            </p>
            <div className="destinations__carousel">
                {dataDestinations.map((dest, index) => (
                    <div
                        className={`card ${index === cardIndex ? "active" : ""}`}
                        key={dest.name}
                    >
                        <img
                            className="card__image"
                            src={`${dest.images.webp}`}
                            alt={`${dest.name} image`}
                        />
                        <div className="card__content">
                            <ul className="card__destination-list">
                                {dataDestinations.map((dest,index) => (
                                    <li className={`card__destination ${index === cardIndex && "active"}`} key={dest.name} onClick={() => handleCardIndex(index)}>
                                        {dest.name}
                                    </li>
                                ))}
                            </ul>
                            <div className="card__details">
                                <h2 className="card__name">{dest.name}</h2>
                                <p className="card__description">{dest.description}</p>
                                <div className="card__info">
                                    <p className="card__info-item">
                                        <span className="card__info-label">Avg. distance</span>
                                        <span className="card__info-value">{dest.distance}</span>
                                    </p>
                                    <p className="card__info-item">
                                        <span className="card__info-label">Est. travel time</span>
                                        <span className="card__info-value">{dest.travel}</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
};

export { Destinations };
