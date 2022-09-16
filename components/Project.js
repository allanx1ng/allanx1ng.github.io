import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Projects({ title, date, link, description, image }) {

    const scrollToTop = () => {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0;

        console.log('scrolled')
    }

    return (
        <div className={styles.project} onLoad={scrollToTop}>
            <h1>
                {title}
            </h1>
            <p>
                {date}
            </p>
            <Link href={link}>

                <a target="_blank">
                    {link}
                </a>
            </Link>
            <p>
                {description}
            </p>
            <Image src={image} alt='Image unavailable' />
        </div>
    )
}