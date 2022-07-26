import { WrapperMainContent } from './elements'
import AboutSchool from './AboutSchool/AboutSchool'
import Map from './Map/Map'
import AdviceAndTest from './AdviceAndTest/AdviceAndTest'
import ChildrenAccount from './ChildrenAccount/ChildrenAccount'
import Welcome from './Welcome/Welcome'
import Registration from './Registration/Registration'
import Gallery from './Gallery/Gallery'
import Methodology from './Methodology/Methodology'
import Coaches from './Coaches'

const MainContent = () => {
  return (
    <WrapperMainContent>
      <AboutSchool />
      <Map />
      <AdviceAndTest />
      <ChildrenAccount />
      <Welcome />
      <Registration />
      <Gallery />
      <Methodology />
      <Coaches />
    </WrapperMainContent>
  )
}

export default MainContent
