import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toggleMenu } from "../redux/slices/menuSlice";

const NavModal = (): JSX.Element => {
    const isMenuOpen = useSelector((state: RootState) => state.menuToogle.isOpen);
    const dispatch = useDispatch();
    const [activeLink, setActiveLink] = useState("");

    const handleClick = (path: string) => {
        setActiveLink(path);
        dispatch(toggleMenu());
    };

    return (
        <nav className={`nav-modal ${isMenuOpen && 'active'}`}>
            <Link
                to={"/"}
                className={`nav-modal__link ${activeLink === "/" ? "active" : ""}`}
                onClick={() => handleClick("/")}
            >
                <span className="nav-modal__link-number">00</span>
                <span className="nav-modal__link-text">Home</span>
            </Link>
            <Link
                to={"/destination"}
                className={`nav-modal__link ${activeLink === "/destination" ? "active" : ""}`}
                onClick={() => handleClick("/destination")}
            >
                <span className="nav-modal__link-number">01</span>
                <span className="nav-modal__link-text">Destination</span>
            </Link>
            <Link
                to={"/crew"}
                className={`nav-modal__link ${activeLink === "/crew" ? "active" : ""}`}
                onClick={() => handleClick("/crew")}
            >
                <span className="nav-modal__link-number">02</span>
                <span className="nav-modal__link-text">Crew</span>
            </Link>
            <Link
                to={"/technology"}
                className={`nav-modal__link ${activeLink === "/technology" ? "active" : ""}`}
                onClick={() => handleClick("/technology")}
            >
                <span className="nav-modal__link-number">03</span>
                <span className="nav-modal__link-text">Technology</span>
            </Link>
        </nav>
    )
}

export { NavModal }