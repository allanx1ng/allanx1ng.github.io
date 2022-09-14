import { Icon } from "@iconify/react"
import styles from '../styles/Home.module.css'


const Skills = () => {
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
            <h1>
                Skills
            </h1>
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
        </div>
    )
}

export default Skills