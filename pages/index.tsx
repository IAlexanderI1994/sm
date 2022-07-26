import Footer from '../components/Footer/Footer'

import { MainWrapper } from '../components/elements'
import Header from 'features/app/UI/Header'
import MainContent from 'features/app/UI/MainContent'

const Home = () => {
  return (
    <MainWrapper>
      <Header />
      <MainContent />
      {/* <Footer /> */}
    </MainWrapper>
  )
}

export default Home
