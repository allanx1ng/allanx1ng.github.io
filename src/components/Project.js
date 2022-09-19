import '../App.css';
export default function Projects({ title, date, link, description, image }) {

    const scrollToTop = () => {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0;

        console.log('scrolled')
    }

    return (
        <div className='project' onLoad={scrollToTop}>
            <h1>
                {title}
            </h1>
            <p>
                {date}
            </p>
            <a href={link} target="_blank">
                {link}

            </a>
            <p>
                {description}
            </p>
            <img src={image} alt='Image unavailable' width={100} />
        </div>
    )
}