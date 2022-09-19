import '../App.css';

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
                        <button>
                            <a href='#intro'>
                                Home
                            </a>
                        </button>
                        <button >
                            <a href='#about'>
                                About
                            </a>
                        </button>
                        <button >
                            <a href='#skills'>
                                Skills
                            </a>
                        </button>
                        <button>
                            <a href='#projects'>
                                Projects
                            </a>
                        </button>
                        <button>
                            <a href='#contact'>
                                Contact
                            </a>
                        </button>
                    </div>
                </div>
            )
    }


}

export default Header