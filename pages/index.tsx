import Header from "../components/Header/Header";
import MainContent from "../components/MainContent/MainContent";
import Footer from "../components/Footer/Footer";

import {MainWrapper} from '../components/elements'

const Home = () => {
  return (
      <MainWrapper>
          <Header/>
          <MainContent/>
          <Footer/>
      </MainWrapper>
  )
}

export default Home
