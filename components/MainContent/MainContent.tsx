import {WrapperMainContent} from './elements'
import AboutSchool from './AboutSchool/AboutSchool'
import Map from './Map/Map'
import AdviceAndTest from "./AdviceAndTest/AdviceAndTest";
import ChildrenAccount from './ChildrenAccount/ChildrenAccount';
import Welcome from "./Welcome/Welcome";


const MainContent = () => {
    return (
        <WrapperMainContent>
            <AboutSchool/>
            <Map/>
            <AdviceAndTest/>
            <ChildrenAccount/>
            <Welcome/>
        </WrapperMainContent>

    )
}

export default MainContent