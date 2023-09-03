"use client"
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import PricingCard from './PricingCard';

type Service = {
    title: string,
    price: number,
    unit: string,
}

type ServiceCategory = {
    [key: string]: Service[];
}

const pricing_category: ServiceCategory = {
    "语音娱乐类服务": [
        {
            "title": "聊天 / 哄睡",
            "price": 15,
            "unit": "H"
        },
        {
            "title": "连麦观影",
            "price": 13,
            "unit": "H"
        },
        {
            "title": "连麦休息",
            "price": 0,
            "unit": "7H"
        },
        {
            "title": "情感电台",
            "price": 0,
            "unit": "0.5H"
        },
        {
            "title": "虚拟恋人",
            "price": 151,
            "unit": "天"
        },
        {
            "title": "常规",
            "price": 6,
            "unit": "首"
        },
        {
            "title": "歌手",
            "price": 9,
            "unit": "首"
        },
        {
            "title": "常规礼包",
            "price": 29,
            "unit": "5首"
        },
        {
            "title": "歌手礼包",
            "price": 44,
            "unit": "5首"
        },
    ],
    "游戏陪玩类服务1": [
        {
            "title": "聊天 / 哄睡",
            "price": 15,
            "unit": "H"
        },
        {
            "title": "连麦观影",
            "price": 13,
            "unit": "H"
        },
        {
            "title": "连麦休息",
            "price": 0,
            "unit": "7H"
        },
        {
            "title": "情感电台",
            "price": 0,
            "unit": "0.5H"
        },
        {
            "title": "虚拟恋人",
            "price": 151,
            "unit": "天"
        },
        {
            "title": "常规",
            "price": 6,
            "unit": "首"
        },
        {
            "title": "歌手",
            "price": 9,
            "unit": "首"
        },
        {
            "title": "常规礼包",
            "price": 29,
            "unit": "5首"
        },
        {
            "title": "歌手礼包",
            "price": 44,
            "unit": "5首"
        },
    ],
    "游戏陪玩类服务2": [
        {
            "title": "聊天 / 哄睡",
            "price": 15,
            "unit": "H"
        },
        {
            "title": "连麦观影",
            "price": 13,
            "unit": "H"
        },
        {
            "title": "连麦休息",
            "price": 0,
            "unit": "7H"
        },
        {
            "title": "情感电台",
            "price": 0,
            "unit": "0.5H"
        },
        {
            "title": "虚拟恋人",
            "price": 151,
            "unit": "天"
        },
        {
            "title": "常规",
            "price": 6,
            "unit": "首"
        },
        {
            "title": "歌手",
            "price": 9,
            "unit": "首"
        },
        {
            "title": "常规礼包",
            "price": 29,
            "unit": "5首"
        },
        {
            "title": "歌手礼包",
            "price": 44,
            "unit": "5首"
        },
    ], "游戏陪玩类服务3": [
        
        {
            "title": "连麦休息",
            "price": 0,
            "unit": "7H"
        },
        {
            "title": "情感电台",
            "price": 0,
            "unit": "0.5H"
        },
        {
            "title": "虚拟恋人",
            "price": 151,
            "unit": "天"
        },
        {
            "title": "常规",
            "price": 6,
            "unit": "首"
        },
        {
            "title": "歌手",
            "price": 9,
            "unit": "首"
        },
        {
            "title": "常规礼包",
            "price": 29,
            "unit": "5首"
        },
        {
            "title": "歌手礼包",
            "price": 44,
            "unit": "5首"
        },
    ], "游戏陪玩类服务4": [
        {
            "title": "聊天 / 哄睡",
            "price": 15,
            "unit": "H"
        },
        {
            "title": "连麦观影",
            "price": 13,
            "unit": "H"
        },
        {
            "title": "连麦休息",
            "price": 0,
            "unit": "7H"
        },
        {
            "title": "情感电台",
            "price": 0,
            "unit": "0.5H"
        },
        {
            "title": "虚拟恋人",
            "price": 151,
            "unit": "天"
        },
        {
            "title": "常规",
            "price": 6,
            "unit": "首"
        },
        {
            "title": "歌手",
            "price": 9,
            "unit": "首"
        },
        {
            "title": "常规礼包",
            "price": 29,
            "unit": "5首"
        },
        {
            "title": "歌手礼包",
            "price": 44,
            "unit": "5首"
        },
    ],
    "游戏陪玩类服务5": [
        {
            "title": "聊天 / 哄睡",
            "price": 15,
            "unit": "H"
        },
        {
            "title": "连麦观影",
            "price": 13,
            "unit": "H"
        },
        {
            "title": "连麦休息",
            "price": 0,
            "unit": "7H"
        },
        {
            "title": "情感电台",
            "price": 0,
            "unit": "0.5H"
        },
        {
            "title": "虚拟恋人",
            "price": 151,
            "unit": "天"
        },
        {
            "title": "常规",
            "price": 6,
            "unit": "首"
        },
        {
            "title": "歌手",
            "price": 9,
            "unit": "首"
        },
        {
            "title": "常规礼包",
            "price": 29,
            "unit": "5首"
        },
        {
            "title": "歌手礼包",
            "price": 44,
            "unit": "5首"
        },
    ],

}

const generateTable = (item: Service[]): any => {
    return (
        <table className='table-fixed font-custom'>
            <thead className='bg-secondary text-black'>
                <tr>
                    <th className='text-black text-2xl'>项目</th>
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
const PricingSection = () => {
    return (
        <div className="container">
            <div className="text-white text-6xl text-center">
                项目 & 价格
            </div>
            <div className='md:mx-20 my-20 py-8 px-8 grid grid-cols-2 gap-4'>
                {Object.keys(pricing_category).map(key => {
                    return <PricingCard key={`pricing_card_${key}`} title={key} text={generateTable(pricing_category[key])} />
                })}
            </div>
        </div>
    );
}

export default PricingSection