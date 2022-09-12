import styles from '../styles/Home.module.css'

import { Icon } from '@iconify/react';

const ScrollButton = () => {

    const scrollToTop = () => {
        document.querySelector('body').scrollTo({
            top: 0,
            behavior: 'smooth'
        })

        console.log('scrolled')
    }

    return (
        <button className={styles.scrollButton} onClick={scrollToTop}>
            Back to top 
            <Icon icon="akar-icons:arrow-up-thick" width="50" height="50" />
        </button>
    )
}

export default ScrollButton