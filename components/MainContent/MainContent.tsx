import {WrapperMainContent} from './elements'
import AboutSchool from './AboutSchool/AboutSchool'
import Map from './Map/Map'
import AdviceAndTest from "./AdviceAndTest/AdviceAndTest";
import ChildrenAccount from './ChildrenAccount/ChildrenAccount';
import Welcome from "./Welcome/Welcome";
import Registration from "./Registration/Registration";
import Gallery from './Gallery/Gallery';


const MainContent = () => {
    return (
        <WrapperMainContent>
            <AboutSchool/>
            <Map/>
            <AdviceAndTest/>
            <ChildrenAccount/>
            <Welcome/>
            <Registration/>
            <Gallery/>


        </WrapperMainContent>

    )
}

export default MainContent