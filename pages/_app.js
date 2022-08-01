import '../styles/globals.css'
import Header from '../components/Header'
import Projects from '../components/Projects'
import Footer from '../components/Footer'
import styles from '../styles/Home.module.css'

function MyApp() {
  return (
      <div className={styles.app}>
        <Header/>
        <Projects text={"sjhfgkuydgfuyehwrgiuyerkduygdsuiydhgudahgouyadhguafguia"}/>
        <Projects text={"sjhfgkuydgfuyehwrgiuyerkduygdsuiydhgudahgouyadhguafguia"}/>
        <Projects text={"sjhfgkuydgfuyehwrgiuyerkduygdsuiydhgudahgouyadhguafguia"}/>
        <Footer/>
      </div>
  )
}

export default MyApp
