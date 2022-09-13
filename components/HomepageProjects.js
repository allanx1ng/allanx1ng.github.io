import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function ProjectsPage() {
    return (
        <>
            <div className={styles.projects}>
                <h1>
                    Projects
                </h1>
                <Link href="/projects">
                    Click here to learn more about my projects!
                </Link>

                <span>
                    <span>
                    <img src='/rectangle2.png' width={200}/>
                        xd
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