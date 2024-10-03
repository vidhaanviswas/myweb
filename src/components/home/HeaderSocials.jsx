import React from 'react';
import { FaGithub, FaLinkedinIn, FaTwitter} from 'react-icons/fa';
// import { SiHashnode } from 'react-icons/si'

const HeaderSocials = () => {
    return (
        <div className='home__socials'>
            <a href='https://vidhaanviswas.netlify.app/' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaGithub />
            </a>

            {/* <a href='https://vidhaanviswas.netlify.app/' className='home__social-link' target='_blank' rel='noreferrer'>
                <SiHashnode />
            </a> */}

            {/* <a href='https://vidhaanviswas.netlify.app/' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaDev />
            </a> */}

            <a href='https://vidhaanviswas.netlify.app/' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaLinkedinIn />
            </a>

            {/* <a href='https://vidhaanviswas.netlify.app/' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaFacebookF />
            </a> */}

            <a href='https://vidhaanviswas.netlify.app/' className='home__social-link' target='__blank' rel='noreferrer'>
                <FaTwitter />
            </a>
        </div>
    );
};

export default HeaderSocials;
