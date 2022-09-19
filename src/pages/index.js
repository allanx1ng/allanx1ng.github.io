import logo from '../logo.svg';
import '../App.css';

import Header from '../components/Header'
import Projects from "../components/Projects"
import About from '../components/About'
import Particles from '../components/Particles';
import ScrollButton from '../components/ScrollButton'
import Socials from '../components/Socials'
import Skills from '../components/Skills'
import Contact from '../components/Contact'
import Footer from '../components/Footer';

import { Icon } from '@iconify/react'

import Main from '../components/Main';

const HomePage = () => {
  return (
    <div>
      
      <Header />
      <div className='body'>

        <div className='intro' id='intro'>
          <div className='nameText'>
            Hello World, I{"'"}m{' '}
            <div className='nameText_Name'>
              Allan Xing
            </div>
          </div>
          <div className='animatedText'>
            Software Developer

          </div>
          <button className='aboutMeButton'>
            <a href='#about'>
              About Me{' '}
            </a>

            <Icon icon="akar-icons:person" />
          </button>

          <div className='socials'>
            <Socials link='https://github.com/allanx1ng' icon="icon-park-outline:github-one" />
            <Socials link='https://www.linkedin.com/in/allan-xing-53b853236/' icon="akar-icons:linkedin-fill" />
            <Socials link='https://github.com/allanx1ng' icon="akar-icons:instagram-fill" />
            {/* <Socials link='https://github.com/allanx1ng' icon="ant-design:youtube-outlined" />
            <Socials link='https://github.com/allanx1ng' icon="ant-design:camera-outlined" /> */}
          </div>


        </div>

        <div className='pfp'>
          <img src='/pfp.png' width={500} />
        </div>

      </div>
      <ScrollButton icon={"ep:arrow-up-bold"} width={30} height={30} />

      <About />

      <Skills />

      <Projects />

      <Contact />

      <Particles className='particles' />

    </div>

  )
}

export default HomePage;
