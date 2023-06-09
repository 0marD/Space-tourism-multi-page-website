import { useState } from "react";
import { Link } from "react-router-dom";

const Nav = (): JSX.Element => {
  const [activeLink, setActiveLink] = useState("");

  const handleClick = (path: string) => {
    setActiveLink(path);
  };

  return (
    <nav className="nav">
        <div className="nav__line"></div>
      <Link
        to={"/"}
        className={`nav__link ${activeLink === "/" ? "active" : ""}`}
        onClick={() => handleClick("/")}
      >
        <span className="nav__link-number">00</span>
        <span className="nav__link-text">Home</span>
      </Link>
      <Link
        to={"/destination"}
        className={`nav__link ${activeLink === "/destination" ? "active" : ""}`}
        onClick={() => handleClick("/destination")}
      >
        <span className="nav__link-number">01</span>
        <span className="nav__link-text">Destination</span>
      </Link>
      <Link
        to={"/crew"}
        className={`nav__link ${activeLink === "/crew" ? "active" : ""}`}
        onClick={() => handleClick("/crew")}
      >
        <span className="nav__link-number">02</span>
        <span className="nav__link-text">Crew</span>
      </Link>
      <Link
        to={"/technology"}
        className={`nav__link ${activeLink === "/technology" ? "active" : ""}`}
        onClick={() => handleClick("/technology")}
      >
        <span className="nav__link-number">03</span>
        <span className="nav__link-text">Technology</span>
      </Link>
    </nav>
  );
};

export { Nav };
