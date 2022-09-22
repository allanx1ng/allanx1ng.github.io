import Header from '../components/Header';
import Projects from '../components/Project';


export default function Project() {
    const project = {
        name: "Game Development Contractor",
        page: "/#/project2",
        description: "Designed and implemented a full combat system for a client's game using Lua and Roblox Studio.",
        links: "https://www.roblox.com/games/8371862873/contract-testing",
        date: "Dec 2021 - Feb 2022",
        homeImage: "/Roblox1.png",
        fullImage: "/Roblox1.png"

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

