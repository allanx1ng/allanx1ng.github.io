import styles from '../styles/Home.module.css'
import { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';



const ScrollButton = ({ icon, width, height }) => {

    // useEffect(function onFirstMount() {
    
    //     window.addEventListener("scroll", toggleVisible);
    
    //    return () => {
    //       window.removeEventListener("scroll", toggleVisible);
    //     }
    //   }, []);


    // const [visible, setVisible] = useState(false)

    // const toggleVisible = () => {
    //     const scrolled = document.body.scrollTop || document.documentElement.scrollTop;
    //     if (scrolled > 100) {
    //         setVisible(true)
    //     }
    //     else if (scrolled <= 100) {
    //         setVisible(false)
    //     }
    // };

    // const isBrowser = () => typeof window !== "undefined"

    // if(!isBrowser) {
    //     window.addEventListener("scroll", toggleVisible);
    //     console.log('listener added')
    // } else {
    //     globalThis.addEventListener("scroll", toggleVisible);
    //     console.log('client listener added')
    // }
   

    const scrollToTop = () => {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0;
        // document.querySelector('body').scrollTo({
        //     top: 0,
        //     behavior: 'smooth'
        // })

        console.log('scrolled')
    }

    return (
        <>
            <button className={styles.scrollButton} onClick={scrollToTop}>
                <Icon icon={icon} width={width} height={height} />
            </button>
        </>

    )
}

export default ScrollButton