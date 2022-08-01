import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Link from 'next/link'
import icon from '../public/25231.png'
import { Icon } from '@iconify/react';

export default function Footer() {
    return (
        <div className={styles.footer}>

            

            <Link href={'https://github.com/allanx1ng'}>
                <a target="_blank">
                    <Icon icon="icon-park-outline:github-one" className={styles.footerIcon} />
                </a>

            </Link>

            <Link href={'https://www.linkedin.com/in/allan-xing-53b853236/'}>
                <a target="_blank">
                <Icon icon="akar-icons:linkedin-fill" className={styles.footerIcon} />
                </a>

            </Link>

            <Link href={'https://github.com/allanx1ng'}>
                <a target="_blank">
                <Icon icon="akar-icons:instagram-fill" className={styles.footerIcon} />
                </a>

            </Link>

            <Link href={'https://github.com/allanx1ng'}>
                <a target="_blank">
                <Icon icon="ant-design:youtube-outlined" className={styles.footerIcon} />
                </a>

            </Link>

            <Link href={'https://github.com/allanx1ng'}>
                <a target="_blank">
                <Icon icon="ant-design:camera-outlined" className={styles.footerIcon} />
                </a>

            </Link>






        </div >
    )
}