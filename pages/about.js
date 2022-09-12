import styles from '../styles/Home.module.css'

import Particles from '../components/Particles'
import { Icon } from '@iconify/react'

export default function About() {


    const technicalSkills = [
        { skill: "Java", icon: "logos:java" },
        { skill: "HTML", icon: "logos:html-5" },
        { skill: "CSS", icon: "vscode-icons:file-type-css" },
        { skill: "JavaScript", icon: "logos:javascript" },
        { skill: "Node.js", icon: "logos:nodejs" },
        { skill: "React", icon: "logos:react" },
        { skill: "Next.js", icon: "logos:nextjs" },
        { skill: "Lua", icon: "logos:lua" },
        { skill: "Roblox Studio", icon: "simple-icons:roblox" },
        { skill: "Python", icon: "logos:python" },
        { skill: "C", icon: "logos:c" },
        { skill: "C++", icon: "logos:c-plusplus" },
        { skill: "C#", icon: "logos:c-sharp" },
        { skill: "Unity", icon: "logos:unity" },
        { skill: "Github", icon: "akar-icons:github-fill" }]
    const otherSkills = [
        { skill: "Adobe Photoshop", icon: "logos:adobe-photoshop" },
        { skill: "Adobe Lightroom", icon: "logos:adobe-lightroom" },
        { skill: "Adobe Premiere Pro", icon: "logos:adobe-premiere" },
        { skill: "Adobe After Effects", icon: "logos:adobe-after-effects" },
        { skill: "Blender", icon: "logos:blender" },
        { skill: "Microsoft Excel", icon: "vscode-icons:file-type-excel" }]

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
                    <div className={styles.skill}>

                        <Icon icon={skill.icon} height="50" />
                        <br />
                        <span>
                            {skill.skill}
                        </span>

                    </div>

                ))}
            </div>


            <h2 className={styles.sectionTitle}>
                Other Skills
            </h2>
            <div className={styles.skills}>
                {otherSkills.map((skill) => (
                    <div className={styles.skill}>

                        <Icon icon={skill.icon} height="50" />
                        <br />
                        <span>
                            {skill.skill}
                        </span>

                    </div>
                ))}
            </div>

            <h2>
                About me
            </h2>
            <p>
                My name is Allan Xing and I'm currently in my second year of studying computer science at UBC.
            </p>

            <Particles />
        </div>
    )
}