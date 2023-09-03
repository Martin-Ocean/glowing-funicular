"use client"
import React, { useState, useEffect } from 'react';
import Hamburger from 'hamburger-react';


type NavBarProps = {
    inViewOrNo: boolean[];
}
const NavBar: React.FC<NavBarProps> = ({ inViewOrNo }) => {
    const [scrolling, setScrolling] = useState<boolean>(false);
    const [hamburgerOnClick, setHamburgerOnClick] = useState<boolean>(false);

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

    useEffect(() => {
        console.log(inViewOrNo);
    }, [inViewOrNo])

    return (
        <nav className={`fixed flex w-full h-[64px] z-[9] ${scrolling ? 'bg-secondary text-black' : 'bg-black'}`}>
            <div className="flex flex-wrap items-center md:p-0 justify-between w-full md:mx-12 border-b border-white">
                <div className={`p-3 px-4 text-2xl  ${scrolling ? 'bg-secondary text-black' : 'text-white'} md:ml-12`}>吃吃派对陪玩零食店</div>
                <div className="p-3 md:hidden pr-1">
                    <Hamburger toggled={hamburgerOnClick} toggle={setHamburgerOnClick} />
                </div>
                <div className={`${hamburgerOnClick ? '' : 'hidden'} md:block md:mr-12 ${scrolling ? 'bg-opacity-60 text-black' : 'bg-transparent'} `}>
                    <ul className="items-center w-screen md:w-auto md:flex ">
                        <li className={` ${inViewOrNo[0] ? 'border-secondary border-b-2' : `${scrolling ? ' text-black hover:border-black hover:border-b-2' : 'text-white hover:border-secondary hover:border-b-2'}`} `}>
                            <a href="#section1" className='p-4 flex h-full w-full'>首页</a></li>
                        <li className={` ${inViewOrNo[1] ? 'border-black border-b-2' : `${scrolling ? ' text-black hover:border-black hover:border-b-2' : 'text-white hover:border-secondary hover:border-b-2'}`} `}>
                            <a
                                className='p-4 flex h-full w-full' href="#section2">项目价格</a></li>
                        <li className={` ${inViewOrNo[2] ? 'border-black border-b-2' : `${scrolling ? ' text-black hover:border-black hover:border-b-2' : 'text-white hover:border-secondary hover:border-b-2'}`}  `}>
                            <a
                                className='p-4 flex h-full w-full' href="#section3">零食菜单</a></li>
                        <li className={` ${inViewOrNo[3] ? 'border-black border-b-2' : `${scrolling ? ' text-black hover:border-black hover:border-b-2' : 'text-white hover:border-secondary hover:border-b-2'}`} `}>
                            <a
                                className='p-4 flex h-full w-full' href="#section4">福利活动</a></li>
                        <li className={` ${inViewOrNo[4] ? 'border-black border-b-2' : `${scrolling ? ' text-black hover:border-black hover:border-b-2' : 'text-white hover:border-secondary hover:border-b-2'}`} `}>
                            <a
                                className='p-4 flex h-full w-full' href="#section5">Discord</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};


export default NavBar;
