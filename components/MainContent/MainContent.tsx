import {WrapperMainContent} from './elements'
import AboutSchool from './AboutSchool/AboutSchool'
import Map from './Map/Map'
import AdviceAndTest from "./AdviceAndTest/AdviceAndTest";
import ChildrenAccount from './ChildrenAccount/ChildrenAccount';


const MainContent = () => {
    return (
        <WrapperMainContent>
            <AboutSchool/>
            <Map/>
            <AdviceAndTest/>
            <ChildrenAccount/>
        </WrapperMainContent>

    )
}

export default MainContent