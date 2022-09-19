import logo from '../logo.svg';
import '../App.css';

import Header from '../components/Header'
import Projects from "../components/Projects"
import About from '../components/About'
import Particles from '../components/Particles';
import ScrollTop from '../components/ScrollTop'
import Socials from '../components/Socials'
import Skills from '../components/Skills'
import Contact from '../components/Contact'

import { Icon } from '@iconify/react'
import ScrollButton from '../components/ScrollButton';

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
          <ScrollButton style={'aboutMeButton'} text={'About Me '} destination={'about'}/>

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
      <ScrollTop icon={"ep:arrow-up-bold"} width={30} height={30} />

      <About />

      <Skills />

      <Projects />

      <Contact />

      <Particles className='particles' />

    </div>

  )
}

export default HomePage;
