"use client"
import React, { useState, useEffect } from 'react';
import GenericCard from './ui/GenericCard';
import Image from 'next/image';
import { useSectionInView } from '@/lib/hooks';

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
            <div className='flex relative h-1vh w-60vw left-0 bg-secondary rounded-r mt-4' />
            <div className='grid grid-cols-1 md:grid-cols-2 mt-20 gap-y-8 gap-x-2'>
                <div className='flex w-80vw md:w-40vw md:transform md:transition-transform md:hover:scale-125'>
                    <GenericCard title={"test"} imgOnly={true} text={(
                        <div className=''>
                            <Image
                                width={3000}
                                height={3000}
                                src={"https://cdn.discordapp.com/attachments/1153840588299436202/1153840701310767175/07b487e82b9d2883.png"}
                                alt={'Snacks Menu 01'}
                                style={{ objectFit: "contain" }}
                            />
                        </div>
                    )} />
                </div>
                <div className='flex w-80vw md:w-40vw md:transform md:transition-transform md:hover:scale-125'>
                    <GenericCard title={"test"} imgOnly={true} text={(
                        <div>
                            <Image
                                width={3000}
                                height={3000}
                                src={"https://cdn.discordapp.com/attachments/1153840588299436202/1153841501642698802/4.png"}
                                alt={'Snacks Menu 02'}
                            />
                        </div>
                    )} />
                </div>
                <div className='flex w-80vw md:w-40vw md:transform md:transition-transform md:hover:scale-125'>
                    <GenericCard title={"test"} imgOnly={true} text={(
                        <div>
                            <Image
                                width={3000}
                                height={3000}
                                src={"https://cdn.discordapp.com/attachments/1153840588299436202/1153841527748051005/5.png"}
                                alt={'Snacks Menu 03'}
                            />
                        </div>
                    )} />
                </div>
            </div>


        </section>
    );
}

export default SnacksMenuSection