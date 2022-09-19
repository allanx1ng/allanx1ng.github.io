import '../App.css';
import Project from './Project'
import ProjectsFile from '../data/projects.json'
import { Link } from 'react-router-dom'

export default function ProjectsPage() {

    return (
        <>
            <div className='projects' id='projects'>
                <h1>
                    - Projects -
                </h1>
                <p>
                    Click on a project to learn more!
                </p>
                {/* <Link href="/projects">

                </Link> */}

                <span>

                    <span>
                        <a href='/project3' className='projects-img'>
                            <img src="/website-homescreen.png" width={600} />
                        </a>
                        <p className='projects_name'>
                            <a href='/project3'>
                                Personal Website
                            </a>
                        </p>
                    </span>

                    <span>
                        <a href='/project2' className='projects-img'>
                            <img src="/Roblox1.png" width={600} />
                        </a>
                        <p className='projects_name'>
                            <a href='/project2'>
                                Game Development Contractor
                            </a>
                        </p>
                    </span>

                    <span>
                        <a href='/project1' className='projects-img'>
                            <img src="/Roblox2.png" width={600} />
                        </a>
                        <p className='projects_name'>
                            <a href='/project1'>
                                Super Galaxy Jump Obby
                            </a>
                        </p>
                    </span>

                </span>
            </div>
        </>
    )
}