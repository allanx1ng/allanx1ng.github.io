import { Icon } from '@iconify/react';
import '../App.css';

const ScrollButton = ({ text, destination, style }) => {

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
        document.getElementById(destination).scrollIntoView()

        console.log('scrolled')
    };

    // window.addEventListener('scroll', toggleVisible);


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