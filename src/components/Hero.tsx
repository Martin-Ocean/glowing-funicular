"use client"

import { useSectionInView } from '@/lib/hooks';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const adj_list_hero = [
    {
        text: '御姐',
        show: ['lg', 'md']
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
    const { ref } = useSectionInView("home", 0.5);
    return (
        <section ref={ref} className='min-h-screen snap-start flex flex-col items-center' id='home'>
            <div className='w-screen h-screen container flex flex-col justify-around mx-0 items-center'> {/* outter  container */}
                <div className='flex flex-col w-full h-full sm:w-80vw sm:h-auto sm:flex-row sm:pt-10vh sm:px-1 md:px-32 lg:px-64 sm:justify-between z-[1] relative'> {/* inner div for header and image */}
                    <div className='flex flex-col w-full h-screen justify-around sm:w-auto sm:h-auto'> {/* left div for headers */}
                        <div className='flex text-6xl pt-20'>吃吃派对</div>
                        <div className='flex text-4xl flex-col '>
                            <div className='z-5'>北美陪玩，零食店</div>
                            <div className=''>想吃想玩应有尽有</div>
                        </div>
                        <div className='flex'>
                            <button type='button' className='flex flex-row justify-center px-8 py-2 rounded-l-full rounded-r-full bg-homeSecondary text-black'>
                                <Link className='flex flex-row' href={"https://discord.gg/narutoclub66"}>
                                    <div className='hidden sm:flex text-2xl sm:pr-4'>加入</div>
                                    <div className='text-2xl'>Discord</div>
                                </Link>

                            </button>
                        </div>
                    </div>
                    <div className='relative hidden sm:flex'> {/* right div for image */}
                        <Image
                            width={420}
                            height={560}
                            src={"/images/hero-image-01.png"}
                            alt='Hero Image'
                        />
                    </div>
                </div>
                <div className='hidden sm:flex sm:w-80vw bg-homeSecondary h-14 mb-12 transform -rotate-1 justify-around text-black'>

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
        </section>
    );
}

export default Hero;