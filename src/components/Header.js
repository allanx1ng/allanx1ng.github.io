import '../App.css';

import ScrollButton from './ScrollButton';



const Header = ({ page }) => {

    switch (page) {
        case "project":


            return (

                <div className='header' id='home'>

                    <h1 className='logo'>
                        <a href='/'>
                            Hello World
                        </a>
                    </h1>
                    <div className='navButtons'>
                        <button>
                            <a href='/'>
                                Home
                            </a>
                        </button>
                    </div>
                </div>
            )

        default:



            return (

                <div className='header' id='home'>

                    <h1 className='logo'>
                        <a href='/'>
                            Hello World
                        </a>
                    </h1>
                    <div className='navButtons'>
                        <ScrollButton text={'About'} destination={'about'}/>
                        <ScrollButton text={'Skills'} destination={'skills'}/>
                        <ScrollButton text={'Projects'} destination={'projects'}/>
                        <ScrollButton text={'Contact'} destination={'contact'}/>
                    </div>
                </div>
            )
    }


}

export default Header