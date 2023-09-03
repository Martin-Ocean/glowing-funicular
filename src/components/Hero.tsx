"use client"
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

const adj_list_hero = [
    {
        text: '御姐'
    }, {
        text: '萌妹'
    }, {
        text: '奶狗'
    }, {
        text: '猛男'
    }, {
        text: '200+ 美味零食'
    }, {
        text: '30+ 游戏'
    }, {
        text: '极速下单'
    }
]
const Hero: React.FC<any> = ({ }) => {
    return (

        <div className='w-screen h-screen container flex flex-col justify-around'> {/* outter  container */}

            <div className='flex flex-row pt-12 sm:px-1 md:px-32 lg:px-64 justify-between z-[1] relative'> {/* inner div for header and image */}
                <div className='flex flex-col justify-around '> {/* left div for headers */}
                    <div className='flex text-6xl '>吃吃派对</div>
                    <div className='flex text-4xl flex-col '>
                        <div className='z-5'>北美陪玩，零食店</div>
                        <div className=''>想吃想玩应有尽有</div>
                    </div>
                    <div className='flex'><button type='button' className='rounded-l-full rounded-r-full bg-secondary text-black'><div className='px-8 py-2 text-2xl'>加入 Discord</div></button></div>
                </div>
                <div className='relative flex'> {/* right div for image */}
                    <Image
                        width={420}
                        height={560}
                        src={"/images/hero-image-01.png"}
                        alt='Hero Image'
                    />
                </div>
            </div>
            <div className='flex bg-secondary h-14 mb-12 transform -rotate-1 justify-around text-black px-24'>

                {adj_list_hero.map((item): any => (
                    <div key={item.text} className='flex flex-col justify-center align-middle text-2xl'> {item.text} </div>
                ))}

            </div>
            <div className='hero-bg-image absolute left-[-112px] top-[164px] z-[4]'>
                <Image
                    width={560}
                    height={560}
                    src={"/images/hero-bg-eclipse-01.png"}
                    alt='background eclipse image'
                />
            </div>

        </div>
    );
}

export default Hero;