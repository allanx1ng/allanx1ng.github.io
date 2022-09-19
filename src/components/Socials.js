import '../App.css';
import { Icon } from '@iconify/react';

const Socials = ({ link, icon }) => {
    return (
        <a target="_blank" href={link}>
            <Icon icon={icon} className='footerIcon' />

        </a>
    )
}

export default Socials