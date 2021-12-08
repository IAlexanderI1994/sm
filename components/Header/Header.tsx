import LogoSpartak from "./LogoSpartak/LogoSpartak";
import Menu from "./Menu/Menu";
import Phone from "./Phone/Phone";
import FreeLesson from "./FreeLesson/FreeLesson";

import { HeaderContainer } from "./elements";


const Header = () => {
    return (
        <HeaderContainer>
            <LogoSpartak/>
            <Menu/>
            <Phone/>
            <FreeLesson/>
        </HeaderContainer>
    )
}
export default Header