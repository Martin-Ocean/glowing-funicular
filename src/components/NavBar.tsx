"use client"
import React, { useState, useEffect } from 'react';
import Hamburger from 'hamburger-react';
import { motion } from "framer-motion";
import { useActiveSectionContext } from '@/context/active-section-context';


const NavBar: React.FC<any> = ({ }) => {
    const [scrolling, setScrolling] = useState<boolean>(false);
    const [hamburgerOnClick, setHamburgerOnClick] = useState<boolean>(false);
    const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext()

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header>
            <nav className={`fixed flex w-full h-[64px] z-50 font-home ${scrolling ? 'bg-homeSecondary text-black' : 'bg-black'}`}>
                <div className="flex flex-wrap items-center md:p-0 justify-between w-full md:mx-12 border-b border-white">
                    <div className={`p-3 px-4 text-2xl  ${scrolling ? 'bg-homeSecondary text-black' : 'text-white'} md:ml-12`}>吃吃派对陪玩零食店</div>
                    <div className={` md:hidden pr-1 ${scrolling ? 'text-black' : 'text-white'}`}>
                        <Hamburger toggled={hamburgerOnClick} toggle={setHamburgerOnClick} />
                    </div>
                    <div className={`${hamburgerOnClick ? '' : 'hidden'} md:block md:mr-12 ${scrolling ? 'text-black bg-homeSecondary' : 'bg-black'} `}>
                        <ul className="items-center w-screen md:w-auto md:flex ">
                            <motion.li
                                className={`${activeSection === 'home' ? 'border-b-2 borderhomeSecondary' : 'hover:border-b-2'} ${scrolling ? 'text-black hover:border-black ' : 'text-white hover:borderhomeSecondary'}`}
                                initial={{ y: -100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}>
                                <a href="#home" className='p-4 flex h-full w-full' onClick={() => {
                                    setActiveSection('home')
                                    setTimeOfLastClick(Date.now());
                                }}>首页</a></motion.li>
                            <motion.li
                                className={`${activeSection === 'pricing' ? 'border-b-2 border-black' : 'hover:border-b-2'} ${scrolling ? 'text-black hover:border-black ' : 'text-white hover:borderhomeSecondary'}`}
                                initial={{ y: -100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}>
                                <a href="#pricing" className='p-4 flex h-full w-full' onClick={() => {
                                    setActiveSection('pricing')
                                    setTimeOfLastClick(Date.now());
                                }}>项目价格</a></motion.li>
                            <motion.li className={`${activeSection === 'snacks' ? 'border-b-2 border-black' : 'hover:border-b-2'} ${scrolling ? 'text-black hover:border-black ' : 'text-white hover:borderhomeSecondary'}`}
                                initial={{ y: -100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}>
                                <a href="#snacks" className='p-4 flex h-full w-full' onClick={() => {
                                    setActiveSection('snacks')
                                    setTimeOfLastClick(Date.now());
                                }}>零食菜单</a></motion.li>
                            <motion.li className={`${activeSection === 'events' ? 'border-b-2 border-black' : 'hover:border-b-2'} ${scrolling ? 'text-black hover:border-black ' : 'text-white hover:borderhomeSecondary'}`}
                                initial={{ y: -100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}>
                                <a href="#events" className='p-4 flex h-full w-full' onClick={() => {
                                    setActiveSection('events')
                                    setTimeOfLastClick(Date.now());
                                }}>福利活动</a></motion.li>
                            <motion.li className={`hover:border-b-2 ${scrolling ? 'text-black hover:border-black ' : 'text-white hover:borderhomeSecondary'}`}>
                                <a href={"https://discord.gg/narutoclub66"}
                                    className='p-4 flex h-full w-full' >Discord</a></motion.li>
                        </ul>
                    </div>
                </div>
            </nav>S
        </header>
    );
};


export default NavBar;
