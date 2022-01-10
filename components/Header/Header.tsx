import LogoSpartak from './LogoSpartak/LogoSpartak'
import Menu from './Menu/Menu'
import Phone from './Phone/Phone'
import FreeLesson from './FreeLesson/FreeLesson'

import { HeaderContainer,HeaderWrapper } from './elements'
import {useEffect, useState} from "react";

interface Props {
    headerFixed: boolean;
}

const Header = () => {
    const [fixed, setFixed] = useState<boolean>(false)
    useEffect(() => {
        window.onscroll = function showHeader () {
            if(window.scrollY > 50){
                setFixed(true)
            }else {
                setFixed(false)
            }
        }
    }, []);

  return (
    <HeaderContainer id='header' className={!fixed ? 'visible' : 'fixed'} >
        <HeaderWrapper >
            <LogoSpartak headerFixed={fixed}/>
            <Menu />
            <Phone />
            <FreeLesson />
        </HeaderWrapper>
    </HeaderContainer>
  )
}
export default Header
