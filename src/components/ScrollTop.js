import "../App.css"
import { Icon } from "@iconify/react"

const ScrollButton = ({ icon, width, height }) => {
  const scrollToTop = () => {
    document.body.scrollTop = 0 // For Safari
    document.documentElement.scrollTop = 0

    console.log("scrolled")
  }

  return (
    <>
      <button className="scrollButton" onClick={scrollToTop}>
        <Icon icon={icon} width={width} height={height} />
      </button>
    </>
  )
}

export default ScrollButton
