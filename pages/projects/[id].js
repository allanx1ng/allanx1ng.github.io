import {Router, useRouter} from 'next/router'
import projects from '../../data/projects.json'

import Projects from '../../components/Project';


export default function Project() {

    const router = useRouter();
    const projectid = router.query.id;

    return (
        projects.map((project) => (
        (project.name == projectid ? (

        <Projects title={project.name} date={project.date} link={project.links} description={project.description} image={project.image} />

        ) : (<></>))
            
    ))
    )
}