import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function ProjectsPage() {
    return (
        <>
            <div className={styles.projects}  id='projects'>
                <h1>
                    Projects
                </h1>
                <p>
                    Click on a project to learn more!
                </p>
                {/* <Link href="/projects">

                </Link> */}

                <span>

                    <span>
                        <img src='/rectangle2.png' width={200} />
                        <p>
                            xd
                        </p>

                    </span>
                    <span>
                        xd
                    </span>
                    <span>
                        xd
                    </span>
                    <span>
                        xd
                    </span>
                </span>
            </div>
        </>
    )
}