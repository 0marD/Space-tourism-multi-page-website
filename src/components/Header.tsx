import { basicsProps } from '../models/basicsProps'
import logo from '../../public/assets/shared/logo.svg'

const Header = ({ children }: basicsProps): JSX.Element => {

    return (
        <header className={`header`}>
            <img src={logo} alt="logo" className="header__logo" />
            {children}
        </header>
    )
}

export { Header }