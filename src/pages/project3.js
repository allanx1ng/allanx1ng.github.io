import Header from '../components/Header';
import Projects from '../components/Project';


export default function Project() {
    const project = {
        name: "Personal Website",
        page: "/#/project3",
        description: "Personal website showcasing my software development portfolio. The website was build with React and hosted with GitHub Pages",
        links: "https://github.com/allanx1ng/allanx1ng.github.io",
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

