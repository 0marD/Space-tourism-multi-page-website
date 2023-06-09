import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../redux/slices/menuSlice";
import { basicsProps } from "../models/basicsProps";
import { RootState } from "../redux/store";

const MenuBurger = ({className}: basicsProps): JSX.Element => {
    const isMenuOpen = useSelector((state: RootState) => state.menuToogle.isOpen);
    const dispatch = useDispatch();

    const handleMenuClick = () => {
        dispatch(toggleMenu());
    }

    return (
        <div onClick={handleMenuClick} className={className}>
            <div className={`line  ${isMenuOpen && "active"}`}></div>
            <div className={`line  ${isMenuOpen && "active"}`}></div>
            <div className={`line  ${isMenuOpen && "active"}`}></div>
        </div>
    );
}

export { MenuBurger }