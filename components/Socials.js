import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { Icon } from '@iconify/react';

const Socials = ({ link, icon }) => {
    return (
        <Link href={link}>
            <a target="_blank">
                <Icon icon={icon} className={styles.footerIcon} />
            </a>

        </Link>
    )
}

export default Socials