
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import App from './_app'
import Head from 'next/head'
import Link from 'next/link'

import Projects from "../components/HomepageProjects"
import About from '../components/HomepageAbout'
import Particles from '../components/Particles';
import ScrollButton from '../components/ScrollButton'
import Socials from '../components/Socials'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Allan Xing 🚀🌙</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>


      <div className={styles.intro}>
        <div className={styles.nameText}>
          Hello World{' '}
          <div className={styles.nameText_Name}>
            hello world

          </div>
        </div>
        <div className={styles.animatedText}>
          hello world
        </div>
        <button className={styles.aboutMeButton}>
          hello world
        </button>

        <div className={styles.socials}>
          <Socials link='https://github.com/allanx1ng' icon="icon-park-outline:github-one" />
          <Socials link='https://www.linkedin.com/in/allan-xing-53b853236/' icon="akar-icons:linkedin-fill" />
          <Socials link='https://github.com/allanx1ng' icon="akar-icons:instagram-fill" />
          <Socials link='https://github.com/allanx1ng' icon="ant-design:youtube-outlined" />
          <Socials link='https://github.com/allanx1ng' icon="ant-design:camera-outlined" />
        </div>

      </div>


      <Projects className={styles.projects} />
      <About className={styles.about} />
      <ScrollButton />



      <Particles className={styles.particles} />
    </div>

  )
}
