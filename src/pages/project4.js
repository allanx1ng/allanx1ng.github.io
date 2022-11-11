import Header from '../components/Header';
import Projects from '../components/Project';


export default function Project() {
    const project = {
        name: "Sorting Algorithm Visualizer",
        page: "/#/project4",
        description: "This project sorting algorithm visualizer with quick sort, merge sort, insertion sort and bubble sort",
        links: "https://github.com/allanx1ng/sorting-visualizer",
        date: "Nov 2022",
        homeImage: "/SortingVisualizer.png",
        fullImage: "/SortingVisualizer.png"

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

