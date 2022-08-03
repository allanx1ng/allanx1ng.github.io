import styles from '../styles/Home.module.css'

export default function About() {
    return (
        <div className={styles.about}>
            <h3>
                About me
            </h3>
            <p>
                My name is Allan Xing and I'm currently in my second year of studying computer science at UBC.
                I have programmed in various languages such as Java, Javascript and Python, through personal projects
                such as full-stack web development, smart contrat development and game development.
                In addition to personal projects, I am experienced in object-oriented design, data structures and algorithms.
            </p>


            <h3 className={styles.sectionTitle}>
                    Technical Skills
                </h3>
            <div className={styles.skills}>
                <p className={styles.skill}>
                    Java
                </p>
                <p className={styles.skill}>
                    HTML/CSS/JS
                </p>
                <p className={styles.skill}>
                    React/NextJs
                </p>
                <p className={styles.skill}>
                    Lua & Roblox Studio
                </p>
                <p className={styles.skill}>
                    Python
                </p>
                <p className={styles.skill}>
                    C/C++
                </p>
                <p className={styles.skill}>
                    C# & Unity Engine
                </p>
                <p className={styles.skill}>
                    Github
                </p>
            </div>


            <h3 className={styles.sectionTitle}>
                    Other Skills
                </h3>
            <div className={styles.skills}>
                <p className={styles.skill}>
                    Adobe Photoshop/Lightroom
                </p>
                <p className={styles.skill}>
                    Adobe Premiere Pro
                </p>
                <p className={styles.skill}>
                    Microsoft Excel
                </p>
                <p className={styles.skill}>
                    Photography
                </p>
                <p className={styles.skill}>
                    Drone pilot
                </p>
            </div>

            <h3>
                About me
            </h3>
            <p>
                My name is Allan Xing and I'm currently in my second year of studying computer science at UBC.
            </p>
        </div>
    )
}