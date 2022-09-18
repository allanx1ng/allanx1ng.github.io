import { Router, useRouter } from 'next/router'
import projects from '../../data/projects.json'

import Projects from '../../components/Project';
import Header from '../../components/Header';


export default function Project() {

    const router = useRouter();
    const projectid = router.query.id;


    return (
        <>
            <Header page={'project'}/>
            <div>
                {projects.map((project) => (
                    (project.name == projectid ? (

                        <Projects title={project.name} date={project.date} link={project.links} description={project.description} image={project.fullImage} />

                    ) : (<></>))

                ))}
            </div>

        </>

    )
}