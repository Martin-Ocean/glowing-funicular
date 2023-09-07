"use client"
import React, { useState, useEffect } from 'react';
import GenericCard from './ui/GenericCard';
import Image from 'next/image';
import { useSectionInView } from '@/lib/hooks';

const EventsSection = () => {
    const { ref } = useSectionInView("events");
    return (
        <section ref={ref} className='relative min-h-screen snap-start z-20 pt-20' id='events'>
            <div className="text-white text-6xl text-center">
                福利活动
            </div>
            <div className='flex relative h-1vh w-80vw left-0 bg-secondary rounded-r mt-4' />
            <div className='grid grid-cols-1 my-20 py-8 px-8'>
                <GenericCard title={"test"} imgOnly={true} text={(<div>
                    <Image
                        width={3000}
                        height={3000}
                        src={"/images/event-latest.png"}
                        alt={'Latest Event'}
                    />
                </div>)} />

            </div>
        </section>
    );
}

export default EventsSection