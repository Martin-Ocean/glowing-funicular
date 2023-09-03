"use client"
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

type PricingCardProps = {
    text?: any,
    imgUrl?: string,
    title: string,
    description?: string,
    other?: any
}

const animationList = [
    'fade',
    'fade-up',
    'fade-down',
    'fade-left',
    'fade-right',
    'fade-up-right',
    'fade-up-left',
    'fade-down-right',
    'fade-down-left',
    "flip-up",
    "flip-down",
    "flip-left",
    "flip-right",
    "slide-up",
    "slide-down",
    "slide-left",
    "slide-right",
    "zoom-in",
    "zoom-in-up",
    "zoom-in-down",
    "zoom-in-left",
    "zoom-in-right",
    "zoom-out",
    "zoom-out-up",
    "zoom-out-down",
    "zoom-out-left",
    "zoom-out-right"]

const PricingCard: React.FC<PricingCardProps> = (item) => {
    return (
        <div data-aos={animationList[Math.floor(Math.random() * animationList.length)]}
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out" className="flex flex-col mx-10 my-4 px-4 py-4 rounded-more w-30vw pricing-card bg-white text-black snap-center">
            <div className='rounded-less  overflow-hidden'> {/* image or large text for display*/}
                {item.text}
            </div>
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
    );
}

export default PricingCard
