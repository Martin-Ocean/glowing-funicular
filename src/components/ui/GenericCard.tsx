"use client"
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

type GenericCardProps = {
    text?: any,
    imgUrl?: string,
    title: string,
    description?: string,
    other?: any,
    imgOnly?: boolean
}


const GenericCard: React.FC<GenericCardProps> = (item) => {
    return (
        <div className={`flex flex-col justify-between px-4 py-4 h-full rounded-more ${item.imgOnly ? "w-80vw" : "xl:w-20vw md:w-40vw sm:w-70vw"} generic-card bg-white text-black snap-center`}>
            <div className='rounded-less  overflow-hidden'> {/* image or large text for display*/}
                {item.text}
            </div>
            {(!item.imgOnly) &&
                <div className='mt-atuo'>
                    <div className='flex flex-col mt-8 mb-4 bg-transparent justify-center align-middle text-2xl text-center'> {/* title */}
                        {item.title}
                    </div>
                    <div className='flex flex-col  my-2 bg-transparent justify-center align-middle text-md'> {/* description */}
                        {item.description}
                    </div>
                    <div className='relative flex items-center'>
                        <div className='flex-grow border-t border-gray-400'></div>
                        <div className='flex-grow border-t border-gray-400'></div>
                    </div>
                    <div className='flex flex-col  my-2 bg-transparent justify-center align-middle text-md ' > {item.other}</div>
                </div>
            }
        </div>
    );
}

export default GenericCard
