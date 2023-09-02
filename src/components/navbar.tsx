"use client"
import React, { useState, useEffect } from 'react';

const NavBar: React.FC = () => {
    const [scrolling, setScrolling] = useState<boolean>(false);

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
        <nav>
            <div className="flex flex-wrap items-center justify-between bg-slate-800 md:p-0">
                <div className="p-3 px-4 text-2xl text-white">Navbar</div>
                <div className="p-3 md:hidden">
                   <span>&#9776;</span>
                </div>
                <div id="menu" className="hidden md:block">
                    <ul className="items-center w-screen md:w-auto md:flex ">
                        <li className="p-4 text-gray-300 border-b border-gray-600 md:border-0 "><a href="#">Home</a></li>
                        <li className="p-4 text-gray-500 border-b border-gray-600 hover:text-gray-300 md:border-0"><a
                            href="#">Products</a></li>
                        <li className="p-4 text-gray-500 border-b border-gray-600 hover:text-gray-300 md:border-0"><a
                            href="#">Pricing</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};


export default NavBar;
