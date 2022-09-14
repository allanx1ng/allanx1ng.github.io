import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function AboutPage() {
    return (
        <div className={styles.about}>
            <span className={styles.about_box}>
                
                <span>
                    <h1>
                        About me
                    </h1>
                    <p>
                        My name is Allan Xing and I'm currently in my second year of studying computer science at UBC.
                        I have programmed in various languages such as Java, Javascript and Python, through personal projects
                        such as full-stack web development, smart contrat development and game development.
                        In addition to personal projects, I am experienced in object-oriented design, data structures and algorithms.
                    </p>
                </span>
                <span>
                    <img src='pfp.png' width='400'/>
                </span>

            </span>

        </div>
    )
}