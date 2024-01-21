import "../App.css"
import Project from "./Project"
import ProjectsFile from "../data/projects.json"
import { Link } from "react-router-dom"

export default function ProjectsPage() {
  return (
    <>
      <div className="projects" id="projects">
        <h1>- Projects -</h1>
        <p>Click on a project to learn more!</p>
        <ul>
          <li>
            <a href="https://github.com/Kevmister331/nwHacks-2024" target="_blank">Leaguify</a>
          </li>
          <li>
            <a href="https://github.com/allanx1ng/Twitter-Clone" target="_blank">Twitter Clone</a>
          </li>
          <li>
            <a href="https://github.com/allanx1ng/GPT-Chatbot" target="_blank">GPT Chatbot</a>
          </li>
          <li>
            <a href="https://github.com/allanx1ng/3DRunnerMobileGame" target="_blank">Block Run</a>
          </li>
        </ul>

        {/* <Link href="/projects">

                </Link> */}

        <span>
          {/* <span>
            <a href="/#/project7" className="projects-img">
              <img width={600} alt="" />
            </a>
            <p className="projects_name">
              <a href="/#/project7">Leaguify</a>
            </p>
          </span>
          <span>
            <a href="/#/project6" className="projects-img">
              <img width={600} alt="" />
            </a>
            <p className="projects_name">
              <a href="/#/project6">Twitter Clone</a>
            </p>
          </span>
          <span>
            <a href="/#/project5" className="projects-img">
              <img width={600} alt="" />
            </a>
            <p className="projects_name">
              <a href="/#/project5">GPT Chatbot</a>
            </p>
          </span>
          <span>
            <a href="/#/project4" className="projects-img">
              <img width={600} alt="" />
            </a>
            <p className="projects_name">
              <a href="/#/project4">Block Run</a>
            </p>
          </span> */}

          <span>
            <a
              href="https://allanxing.com/sorting-visualizer"
              target="blank"
              className="projects-img"
            >
              <img src="/SortingVisualizer.png" width={600} />
            </a>
            <p className="projects_name">
              <a href="https://allanxing.com/sorting-visualizer" target="blank">
                Sorting Visualizer
              </a>
            </p>
          </span>

          <span>
            <a href="/#/project3" className="projects-img">
              <img src="/website-homescreen.png" width={600} />
            </a>
            <p className="projects_name">
              <a href="/#/project3">Personal Website</a>
            </p>
          </span>

          <span>
            <a href="/#/project2" className="projects-img">
              <img src="/Roblox1.png" width={600} />
            </a>
            <p className="projects_name">
              <a href="/#/project2">Game Development Contractor</a>
            </p>
          </span>

          <span>
            <a href="/#/project1" className="projects-img">
              <img src="/Roblox2.png" width={600} />
            </a>
            <p className="projects_name">
              <a href="/#/project1">Super Galaxy Jump Obby</a>
            </p>
          </span>
        </span>
      </div>
    </>
  )
}
