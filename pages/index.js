
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import App from './_app'
import Head from 'next/head'
import Link from 'next/link'

import Projects from "../components/HomepageProjects"
import About from '../components/HomepageAbout'
import Particles from '../components/Particles';
import ScrollButton from '../components/ScrollButton'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Allan Xing 🚀🌙</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className={styles.intro}>
        <div className={styles.nameText}>
          Deez Nuts deez
          <div className={styles.nameText_Name}>
            deez nuts gay
          </div>
        </div>
        <div className={styles.animatedText}>
          Deez Nuts
        </div>
        <button className={styles.aboutMeButton}>
          Deez nuts
        </button>
        <Particles className={styles.particles}/>
      </div>

      
      <Projects className={styles.projects} />
      <About className={styles.about}/>
      <ScrollButton/>

      
    </div>

  )
}
