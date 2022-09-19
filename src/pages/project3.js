import Header from '../components/Header';
import Projects from '../components/Project';


export default function Project() {
    const project = {
        name: "Personal Website",
        page: "/#/project3",
        description: "Personal website showcasing my software development portfolio",
        links: "https://www.roblox.com/games/5479060116/NEW-SUPER-GALAXY-JUMP-Obby",
        date: "Aug 2022 - Sept 2022",
        homeImage: "/website-homescreen.png",
        fullImage: "/website-full.png"

    }


    return (
        <>
            <Header page={'project'} />
            <div>

                <Projects title={project.name} date={project.date} link={project.links} description={project.description} image={project.fullImage} />

            </div>

        </>

    )
}

