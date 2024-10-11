import Header from "../components/Header"
import Projects from "../components/Project"

export default function Project() {
  const project = {
    name: "Investment Portfolio Tracker",
    page: "/#/project5",
    description:
      "This project is an investment tracker that allows users to create different portfolios and track the total Profit/Loss of their assets. Users can also connect crypto wallets to automatically have their coins tracked in their portfolio. More features will be added in the future.",
    links: "https://github.com/allanx1ng/portfolio-tracker/",
    date: "May 2024",
    homeImage: "/PortfolioTracker.png",
    fullImage: "/PortfolioTracker.png",
  }

  return (
    <>
      <Header page={"project"} />
      <div>
        <Projects
          title={project.name}
          date={project.date}
          link={project.links}
          description={project.description}
          image={project.fullImage}
          extra={["/PortfolioTracker2.png", "/PortfolioTracker3.png"]}
        />
        {/* <img src='/PortfolioTracker2.png'/>
                <img src='/PortfolioTracker3.png'/> */}
      </div>
    </>
  )
}
