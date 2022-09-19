import '../App.css';
import { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';



const ScrollButton = ({ icon, width, height }) => {

    // const [visible, setVisible] = useState(false)

    // const toggleVisible = () => {
    //     const scrolled = document.documentElement.scrollTop;
    //     if (scrolled > 100) {
    //         setVisible(true)
    //     }
    //     else if (scrolled <= 300) {
    //         setVisible(false)
    //     }
    // };

    const scrollToTop = () => {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0;
       window.scrollTo(0,0)

        console.log('scrolled')
    };

    // window.addEventListener('scroll', toggleVisible);


    return (
        <>
            <button className='scrollButton' onClick={scrollToTop}>
                <Icon icon={icon} width={width} height={height} />
            </button>
        </>

    )
}

export default ScrollButton