"use client"
import React, { useState, useEffect } from 'react';
import GenericCard from './GenericCard';
import Image from 'next/image';

type Product = {
    title: string,
    price: number,
    unit: string,
}
const generateTable = (item: Product[]): any => {
    return (
        <table className='table-fixed font-custom'>
            <thead className='bg-secondary text-black'>
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
    return (
        <div className="container">
            <div className="text-black text-6xl text-center">
                零食菜单
            </div>
            <div className='md:mx-20 my-20 py-8 px-8 grid grid-cols-1'>
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
            <div className='md:mx-20 my-20 py-8 px-8 grid grid-cols-1'>
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
            <div className='md:mx-20 my-20 py-8 px-8 grid grid-cols-1'>
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
    );
}

export default SnacksMenuSection