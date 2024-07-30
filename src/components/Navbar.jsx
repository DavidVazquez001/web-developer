import React from 'react';
import logo from '../assets/logoWhite.png';
import { IoMdMail } from 'react-icons/io';
import { FaLinkedin } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        navigate('/');
    };

    const openMail = () => {
        const isMobile = window.matchMedia('(max-width: 768px)').matches;

        if (isMobile) {
            window.open('mailto:david.martinez.vqz@gmail.com');
        } else {
            window.open(
                'https://mail.google.com/mail/?view=cm&fs=1&to=david.martinez.vqz@gmail.com',
            );
        }
    };

    const openWhatsApp = () => {
        const isMobile = window.matchMedia('(max-width: 768px)').matches;

        if (isMobile) {
            window.open('https://wa.me/525524094471');
        } else {
            window.open('https://web.whatsapp.com/send?phone=525524094471');
        }
    };

    return (
        <nav className="fixed left-0 top-0 z-50 flex w-full items-center justify-between bg-transparent px-8 py-6 backdrop-blur-lg md:px-16 lg:px-28">
            <div className="flex flex-shrink-0 items-center">
                <img
                    src={logo}
                    alt="logo"
                    className="h-14 cursor-pointer"
                    onClick={scrollToTop}
                />
            </div>

            <div>
                <a className="text-3xl lg:text-5xl" href="/portafolio">
                    Portafolio
                </a>
            </div>

            <div className="flex items-center justify-center gap-4 text-2xl">
                <a href="#" onClick={openWhatsApp}>
                    <FaWhatsapp />
                </a>

                <a href="#" onClick={openMail}>
                    <IoMdMail />
                </a>

                <a
                    href="https://www.linkedin.com/in/jose-david-martinez-vazquez/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaLinkedin />
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
