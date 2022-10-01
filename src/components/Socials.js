import '../App.css';
import { Icon } from '@iconify/react';

const Socials = () => {
    return (
        <div>
            <a target="_blank" href='https://github.com/allanx1ng'>
                <Icon icon="icon-park-outline:github-one" className='footerIcon' />

            </a>
            <a target="_blank" href='https://www.linkedin.com/in/allan-xing-53b853236/'>
                <Icon icon="akar-icons:linkedin-fill" className='footerIcon' />

            </a>
            <a target="_blank" href='https://www.instagram.com/allanxiing'>
                <Icon icon="akar-icons:instagram-fill" className='footerIcon' />

            </a>
            {/* <a target="_blank" href='https://github.com/allanx1ng'>
                <Icon icon="ant-design:youtube-outlined" className='footerIcon' />

            </a>
            <a target="_blank" href='https://github.com/allanx1ng'>
                <Icon icon="ant-design:camera-outlined" className='footerIcon' />

            </a> */}
        </div>

    )
}

export default Socials