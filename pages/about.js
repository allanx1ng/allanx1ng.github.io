import styles from '../styles/Home.module.css'

import Particles from '../components/Particles'

export default function About() {

    const technicalSkills = ["Java", "HTML/CSS/JS", "React/NextJs", "Lua & Roblox Studio,", "Python", "C/C++", "C# & Unity Engine", "Github"]
    const otherSkills = ["Adobe Photoshop/Lightroom", "Adobe Premiere Pro", "Microsoft Excel", "Blender", "Photography"]

    return (

        <div className={styles.aboutpage}>
            <h2>
                About me
            </h2>
            <p>
                My name is Allan Xing and I'm currently in my second year of studying computer science at UBC.
                I have programmed in various languages such as Java, Javascript and Python, through personal projects
                such as full-stack web development, smart contrat development and game development.
                In addition to personal projects, I am experienced in object-oriented design, data structures and algorithms.
            </p>


            <h2 className={styles.sectionTitle}>
                Technical Skills
            </h2>
            <div className={styles.skills}>
                {technicalSkills.map((skill) => (
                    <p className={styles.skill}>
                        {skill}
                    </p>
                ))}
            </div>


            <h2 className={styles.sectionTitle}>
                Other Skills
            </h2>
            <div className={styles.skills}>
                {otherSkills.map((skill) => (
                    <p className={styles.skill}>
                        {skill}
                    </p>
                ))}
            </div>

            <h2>
                About me
            </h2>
            <p>
                My name is Allan Xing and I'm currently in my second year of studying computer science at UBC.
            </p>

            <Particles/>
        </div>
    )
}