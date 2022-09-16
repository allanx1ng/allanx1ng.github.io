import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { Icon } from '@iconify/react';
import Socials from './Socials';

export default function Footer() {
    return (
        <div className={styles.footer}>

            <Socials link='https://github.com/allanx1ng' icon="icon-park-outline:github-one" />
            <Socials link='https://www.linkedin.com/in/allan-xing-53b853236/' icon="akar-icons:linkedin-fill" />
            <Socials link='https://github.com/allanx1ng' icon="akar-icons:instagram-fill" />
            {/* <Socials link='https://github.com/allanx1ng' icon="ant-design:youtube-outlined" />
            <Socials link='https://github.com/allanx1ng' icon="ant-design:camera-outlined" /> */}

        </div >
    )
}