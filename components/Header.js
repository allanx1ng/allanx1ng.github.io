import styles from '../styles/Home.module.css'
import icon from '../public/25231.png'
import Image from 'next/image'

export default function Header() {
    return (
        <div className={styles.header}>
            <Image className={styles.logo} src={icon} width={160} height={160} />
            <div className={styles.navButtons}>
                <button className={styles.neon_button}>Home</button>
                <button className={styles.neon_button}>About</button>
                <button className={styles.neon_button}>Projects</button>
                <button className={styles.neon_button}>Contact</button>
            </div>



        </div>
    )
}