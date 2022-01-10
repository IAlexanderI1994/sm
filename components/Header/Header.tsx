import LogoSpartak from './LogoSpartak/LogoSpartak'
import Menu from './Menu/Menu'
import Phone from './Phone/Phone'
import FreeLesson from './FreeLesson/FreeLesson'

import { HeaderContainer,HeaderWrapper } from './elements'
import {useEffect, useState} from "react";



const Header = () => {
    const [fixed, setFixed] = useState<boolean>(false)
    const showHeader = () => {
        if(window.scrollY > 50){
            setFixed(true)
        }else {
            setFixed(false)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll',showHeader)
        return () => window.removeEventListener("scroll", showHeader);
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
