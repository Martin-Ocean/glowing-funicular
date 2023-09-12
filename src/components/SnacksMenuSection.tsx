"use client"
import React, { useState, useEffect } from 'react';
import GenericCard from './ui/GenericCard';
import Image from 'next/image';
import { useSectionInView } from '@/lib/hooks';
import Link from 'next/link';

type Product = {
    title: string,
    price: number,
    unit: string,
}

const SnacksMenuSection = () => {
    const { ref } = useSectionInView("snacks");
    return (
        <section ref={ref} className='relative min-h-screen snap-start z-20 pt-4' id='snacks'>

            <div className="text-white text-6xl text-center">
                零食菜单
            </div>
            <div className='flex relative h-1vh w-60vw left-0 bg-homeSecondary rounded-r mt-4' />
            <div className='flex flex-row justify-around mx-0 items-center pt-20'> {/* outter  container */}
                <div className='flex flex-col w-full h-full sm:w-80vw sm:h-auto sm:flex-row sm:pt-10vh sm:px-1 md:px-32 lg:px-64 sm:justify-between z-[1] relative'> {/* inner div for header and image */}
                    <div className='relative hidden sm:flex'> {/* right div for image */}
                        <Image
                            width={420}
                            height={560}
                            src={"/images/hero-image-01.png"}
                            alt='Hero Image'
                        />
                    </div>
                    <div className='flex flex-col w-full h-screen justify-around sm:w-auto sm:h-auto'> {/* left div for headers */}
                        <div className='flex text-6xl pt-20'>美味无限</div>
                        <div className='flex text-4xl flex-col '>
                            <div className='z-5'>人气产品, 实惠折扣</div>
                            <div className=''>薯片, 凤爪, 鸭脖, 卤味</div>
                        </div>
                        <div className='flex'>
                            <button type='button' className='flex flex-row justify-center px-8 py-2 rounded-l-full rounded-r-full bg-homeSecondary text-black'>
                                <Link href={"/snacks"} className='text-2xl'>{"菜单通道 =>"}</Link>
                            </button>
                        </div>
                    </div>

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

export default SnacksMenuSection