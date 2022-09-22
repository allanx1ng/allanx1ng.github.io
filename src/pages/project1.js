import Header from '../components/Header';
import Projects from '../components/Project';


export default function Project() {
    const project = {
        name: "Super Galaxy Jump Obby",
        page: "/#/project1",
        description: "Created a parkour game with a team of 4 developers using Roblox Studio where players jump over obstacles to progress through levels.",
        links: "https://www.roblox.com/games/5479060116/NEW-SUPER-GALAXY-JUMP-Obby",
        date: "May 2020 - August 2020",
        homeImage: "/Roblox2.png",
        fullImage: "/Roblox2.png"

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

