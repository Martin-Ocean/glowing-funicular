"use client"
import React, { useState, useEffect } from 'react';
import GenericCard from './GenericCard';
import Image from 'next/image';

const EventsSection = () => {
    return (
        <div className="container">
            <div className="text-black text-6xl text-center">
                福利活动
            </div>
            <div className='md:mx-20 my-20 py-8 px-8 grid grid-cols-1'>
                <GenericCard title={"test"} imgOnly={true} text={(<div>
                    <Image
                        width={3000}
                        height={3000}
                        src={"/images/event-latest.png"}
                        alt={'Latest Event'}
                    />
                </div>)} />

            </div>
        </div>
    );
}

export default EventsSection