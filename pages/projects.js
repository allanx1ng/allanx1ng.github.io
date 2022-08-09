import Projects from "../components/HomepageProjects"
import styles from '../styles/Home.module.css'
import ProjectCard from "../components/ProjectCard"
import ProjectsFile from '../data/projects.json'

import Image from "next/image"


import { Container, Row, Col, Tab, Nav } from "react-bootstrap";

import imgTest from '../public/rectangle2.png'


import TrackVisibility from 'react-on-screen';
//import 'animate.css';

export default function ProjectsPage() {

  return (
    <>
      <div className={styles.proj_container_box}>
        <h1>
          Projects
        </h1>
        <span>
          Click on a project to learn more!
        </span>
        <div className={styles.proj_container}>
          {ProjectsFile.map((project) => (
            <ProjectCard title={project.name} description={project.description} imgUrl={imgTest} />
          ))}
        </div>
      </div>
    </>


  )
}