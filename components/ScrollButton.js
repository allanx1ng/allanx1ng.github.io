import styles from '../styles/Home.module.css'

import { Icon } from '@iconify/react';

const ScrollButton = ({icon, width, height}) => {

    const scrollToTop = () => {
        document.querySelector('body').scrollTo({
            top: 0,
            behavior: 'smooth'
        })

        console.log('scrolled')
    }

    return (
        <>
        <button className={styles.scrollButton} onClick={scrollToTop}>
            <p>Back to top{' '}</p>
            <Icon icon={icon} width={width} height={height} />
        </button>
        </>
        
    )
}

export default ScrollButton