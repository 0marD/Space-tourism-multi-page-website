import { useEffect, useState } from "react";
import bgMobile from "../../public/assets/technology/background-technology-mobile.jpg";
import bgTablet from "../../public/assets/technology/background-technology-tablet.jpg";
import bgDesk from "../../public/assets/technology/background-technology-tablet.jpg";
import data from "../data/data.json";

const dataTech = data.technology;

const Technology = (): JSX.Element => {

    const [backgroundImage, setBackgroundImage] = useState<string>(bgMobile);
    const [cardImage, setCardImage] = useState<string>("landscape");
    const [cardIndex, setCardIndex] = useState<number>(0);

    const handleCardIndex = (index: number) => {
        setCardIndex(index);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCardIndex((prevIndex) => (prevIndex + 1) % 3);
        }, 16000);

        return () => {
            clearInterval(interval);
        };
    }, []);


    useEffect(() => {
        const screenWidth = window.innerWidth;

        if (screenWidth >= 1024) {
            setBackgroundImage(bgDesk);
        } else if (screenWidth >= 768) {
            setBackgroundImage(bgTablet);
        }
    }, []);

    useEffect(() => {
        const screenWidth = window.innerWidth;

        if (screenWidth >= 1024) {
            setCardImage("portrait")
        } else if (screenWidth >= 0) {
            setCardImage("landscape")
        }
    }, []);


    return (
        <main className="tech" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <p className="tech__heading">
                <span className="tech__step">03</span>
                <span className="tech__title">Space launch 101</span>
            </p>
            <div className="tech__carousel">
                {
                    dataTech.map((tech, index) => (
                        <div className={`card ${index === cardIndex ? "card--active" : ""}`} key={tech.name}>

                            <figure className="card__figure">
                                <img src={cardImage === "landscape" ? tech.images.landscape : tech.images.portrait} alt={`Technology image`} className={`card__image`} />
                            </figure>

                            <div className="card__content">
                                <ul className="card__nav">
                                    {
                                        dataTech.map((tech, index) => (
                                            <li onClick={() => handleCardIndex(index)} className={`card__nav-item ${index === cardIndex ? "card__nav-item--active" : ""}`} key={tech.name}>{index + 1}</li>
                                        ))
                                    }
                                </ul>
                                <div className="card__body">
                                    <div className="card__heading">
                                        <p className="card__title">The terminology...</p>
                                        <p className="card__name">{tech.name}</p>
                                    </div>
                                    <p className="card__description">{tech.description}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </main>
    )
}

export { Technology }