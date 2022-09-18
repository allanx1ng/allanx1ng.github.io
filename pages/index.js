import styles from '../styles/Home.module.css'
import App from './_app'

import Header from '../components/Header'
import Projects from "../components/HomepageProjects"
import About from '../components/HomepageAbout'
import Particles from '../components/Particles';
import ScrollButton from '../components/ScrollButton'
import Socials from '../components/Socials'
import Skills from '../components/Skills'
import Contact from '../components/Contact'


import ProjectCard from "../components/ProjectCard"
import ProjectsFile from '../data/projects.json'
import { Icon } from '@iconify/react'

// import dynamic from "next/dynamic";

// const ScrollButton = dynamic(
//   () => {
//     return import("../components/ScrollButton");
//   },
//   { ssr: false }
// );



export default function Home() {
  return (
    <div>
      <Header />
      <div className={styles.body}>

        <div className={styles.intro} id='intro'>
          <div className={styles.nameText}>
            Hello World, I'm{' '}
            <div className={styles.nameText_Name}>
              hello world
            </div>
          </div>
          <div className={styles.animatedText}>
            Software Developer
          </div>
          <button className={styles.aboutMeButton}>
            <a href='#about'>
              About Me{' '}
            </a>

            <Icon icon="akar-icons:person" />
          </button>

          <div className={styles.socials}>
            <Socials link='https://github.com/allanx1ng' icon="icon-park-outline:github-one" />
            <Socials link='https://www.linkedin.com/in/allan-xing-53b853236/' icon="akar-icons:linkedin-fill" />
            <Socials link='https://github.com/allanx1ng' icon="akar-icons:instagram-fill" />
            {/* <Socials link='https://github.com/allanx1ng' icon="ant-design:youtube-outlined" />
            <Socials link='https://github.com/allanx1ng' icon="ant-design:camera-outlined" /> */}
          </div>


        </div>

        <div className={styles.pfp}>
          <img src='/pfp.png' width={500} />
        </div>

      </div>
      <ScrollButton icon={"ep:arrow-up-bold"} width={30} height={30} />

      <About />

      <Skills />

      <Projects />

      <Contact />

      <Particles className={styles.particles} />
    </div>

  )
}
