import styles from '../styles/Home.module.css'
import icon from '../public/25231.png'
import Image from 'next/image'
import Link from 'next/link'

const Header = ({ page }) => {

    switch (page) {
        case "project":

            return (

                <div className={styles.header} id='home'>
                    {/* <Image className={styles.logo} src={icon} width={160} height={160} /> */}
                    <h1 className={styles.logo}>
                        <Link href='/'>
                            Hello World
                        </Link>
                    </h1>
                    <div className={styles.navButtons}>
                        <button>
                            <Link href='/'>
                                Home
                            </Link>
                        </button>
                    </div>
                </div>
            )

        default:

            return (

                <div className={styles.header} id='home'>
                    {/* <Image className={styles.logo} src={icon} width={160} height={160} /> */}
                    <h1 className={styles.logo}>
                        <Link href='/'>
                            Hello World
                        </Link>
                    </h1>
                    <div className={styles.navButtons}>
                        <button>
                            <Link href='#intro'>
                                Home
                            </Link>
                        </button>
                        <button >
                            <Link href='#about'>
                                About
                            </Link>
                        </button>
                        <button >
                            <Link href='#skills'>
                                Skills
                            </Link>
                        </button>
                        <button>
                            <Link href='#projects'>
                                Projects
                            </Link>
                        </button>
                        <button>
                            <Link href='#contact'>
                                Contact
                            </Link>
                        </button>
                    </div>
                </div>
            )
    }


}

export default Header