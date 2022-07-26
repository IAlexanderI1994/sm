import AboutSchool from '../AboutSchool'
import Account from '../Account'
import AdviceAndTest from '../AdviceAndTest'
import FootballMap from '../FootballMap'
// import AboutSchool from 'components/MainContent/AboutSchool/AboutSchool'
import styles from './MainContent.module.scss'

const MainContent = () => {
  return (
    <main className={styles.root}>
      <AboutSchool />
      <FootballMap />
      <AdviceAndTest />
      <Account />
    </main>
  )
}

export default MainContent
