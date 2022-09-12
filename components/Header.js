import styles from '../styles/Home.module.css'
import icon from '../public/25231.png'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
    return (
        <div className={styles.header}>
            {/* <Image className={styles.logo} src={icon} width={160} height={160} /> */}
            <h1 className={styles.logo}>Hello World</h1>
            <div className={styles.navButtons}>
                <button>
                    <Link href='/'>
                        Home
                    </Link>
                </button>
                <button>
                    <Link href='/about'>
                        About
                    </Link>
                </button>
                <button>
                    <Link href='/projects'>
                        Projects
                    </Link>
                </button>
                <button>
                    <Link href='/'>
                        Contact
                    </Link>
                </button>
            </div>
        </div>
    )
}