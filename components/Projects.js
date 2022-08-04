import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Projects from '../data/projects.json'
import Link from 'next/link'
import ProjectCard from './ProjectCard'

import imgTest from '../public/25231.png'

export default function ProjectsPage() {
    return (
        <>
            <div className={styles.projects}>
                <h1>
                    Projects
                </h1>
                {Projects.map((project) => (
                    <p>
                        <Link href={'./projects/' + project.name}>
                            {project.name}
                        </Link>
                        

                    </p>
                ))}
            </div>
        </>
    )
}