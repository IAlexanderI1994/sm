import {WrapperMainContent} from './elements'
import AboutSchool from './AboutSchool/AboutSchool'
import Map from './Map/Map'
import AdviceAndTest from "./AdviceAndTest/AdviceAndTest";


const MainContent = () => {
    return (
        <WrapperMainContent>
            <AboutSchool/>
            <Map/>
            <AdviceAndTest/>
        </WrapperMainContent>

    )
}

export default MainContent