import Logo from "./Logo/Logo";
import Menu from "./Menu/Menu";
import Phone from "./Phone/Phone";
import FreeLesson from "./FreeLesson/FreeLesson";

import { HeaderContainer } from "./elements";


const Header = () => {
    return (
        <HeaderContainer>
            <Logo/>
            <Menu/>
            <Phone/>
            <FreeLesson/>
        </HeaderContainer>
    )
}
export default Header