import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Project from '../components/Project'
import ProjectsFile from '../data/projects.json'

export default function ProjectsPage() {
    return (
        <>
            <div className={styles.projects} id='projects'>
                <h1>
                    Projects
                </h1>
                <p>
                    Click on a project to learn more!
                </p>
                {/* <Link href="/projects">

                </Link> */}

                <span>

                    {ProjectsFile.map((project) => (
                        <span>

                            <Link href={'./projects/' + project.name}>

                                <img src='/rectangle2.png' width={600} />


                            </Link>

                            <p className={styles.projects_name}>
                                <Link href={'./projects/' + project.name}>
                                    <a>
                                        {project.name}
                                    </a>
                                </Link>
                            </p>



                        </span>
                    ))}
                </span>
            </div>
        </>
    )
}