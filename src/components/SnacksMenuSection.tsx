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
const generateTable = (item: Product[]): any => {
    return (
        <table className='table-fixed font-custom'>
            <thead className='bg-homeSecondary text-black'>
                <tr>
                    <th className='text-black text-2xl'>产品</th>
                    <th className='text-black text-2xl'>价格</th>
                </tr>
            </thead>
            <tbody>
                {item.map(item => {
                    return (
                        <tr key={item.title}>
                            <td className='text-center rounded-less py-2'>{item.title}</td>
                            <td className='text-center rounded-less py-2'>{`${item.price}/${item.unit}`}</td>
                        </tr>)
                })}

            </tbody>
        </table>
    )

}
const SnacksMenuSection = () => {
    const { ref } = useSectionInView("snacks");
    return (
        <section ref={ref} className='relative min-h-screen snap-start z-20 pt-4' id='snacks'>

            <div className="text-white text-6xl text-center">
                零食菜单
            </div>
            <div className='flex relative h-1vh w-60vw left-0 bg-homeSecondary rounded-r mt-4' />
            <div className='grid grid-cols-1 md:grid-cols-2 mt-20 gap-y-8 gap-x-2'>
                <div className='flex w-80vw md:w-40vw md:transform md:transition-transform md:hover:scale-125'>
                    <GenericCard title={"test"} imgOnly={true} text={(
                        <div className=''>
                            <Image
                                width={3000}
                                height={3000}
                                src={"/images/snacks-01.png"}
                                alt={'Snacks Menu 01'}
                                style={{ objectFit: "contain" }}
                            />
                        </div>)} />
                </div>
                <div className='flex w-80vw md:w-40vw md:transform md:transition-transform md:hover:scale-125'>
                    <GenericCard title={"test"} imgOnly={true} text={(
                        <div>
                            <Image
                                width={3000}
                                height={3000}
                                src={"/images/snacks-02.png"}
                                alt={'Snacks Menu 02'}
                            />
                        </div>)} />
                </div>
                <div className='flex w-80vw md:w-40vw md:transform md:transition-transform md:hover:scale-125'>
                    <GenericCard title={"test"} imgOnly={true} text={(<div>
                        <Image
                            width={3000}
                            height={3000}
                            src={"/images/snacks-03.png"}
                            alt={'Snacks Menu 03'}
                        />
                    </div>)} />
                </div>
            </div>


        </section>
    );
}

export default SnacksMenuSection