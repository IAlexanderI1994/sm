import LogoSpartak from './LogoSpartak/LogoSpartak'
import Menu from './Menu/Menu'
import Phone from './Phone/Phone'
import FreeLesson from './FreeLesson/FreeLesson'

import { HeaderContainer,HeaderWrapper } from './elements'
import {useEffect, useState} from "react";

const Header = () => {
    const [fixed, setFixed] = useState<boolean>(false)
    useEffect(() => {
        const showHeader = () => {
            console.log('window.scrollY',window.scrollY)
            if(window.scrollY > 100){
                setFixed(true)
            }else {
                setFixed(false)
            }
        }

        window.addEventListener('scroll',showHeader)
        return () => window.removeEventListener("scroll", showHeader);
    }, [fixed]);
    console.log('fixed',fixed)

  return (
      <>
          {fixed && <div style={{height: '103px'}}/>}
          <HeaderContainer id='header' className={fixed ? 'fixed' : ''}>
              <HeaderWrapper>
                  <LogoSpartak headerFixed={fixed}/>
                  <Menu />
                  <Phone />
                  <FreeLesson />
              </HeaderWrapper>
          </HeaderContainer>
      </>

  )
}
export default Header
