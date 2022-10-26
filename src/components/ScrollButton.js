import { Icon } from '@iconify/react';
import '../App.css';

const ScrollButton = ({ text, destination, style }) => {

    const scrollToTop = () => {
        document.getElementById(destination).scrollIntoView()

        console.log('scrolled')
    };


    switch (style) {
        case "aboutMeButton":
            return (
                
                <>
                    <button className={style} onClick={scrollToTop}>
                        {text}
                        <Icon icon="akar-icons:person" />
                    </button>
                </>

            )


        default:

            return (

                <>
                    <button className='navbuttons button' onClick={scrollToTop}>
                        {text}
                    </button>
                </>

            )
    }

}

export default ScrollButton