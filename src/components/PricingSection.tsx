"use client"
import React, { useState, useEffect } from 'react';
import GenericCard from './GenericCard';

type Service = {
    title: string,
    price: number,
    unit: string,
}

type ServiceCategory = {
    [key: string]: {
        "service-list": Service[],
        "other"?: any
    };
}

const pricing_category: ServiceCategory = {
    "语音娱乐类服务": {
        "service-list": [
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
                "price": 65,
                "unit": "7H"
            },
            {
                "title": "电台",
                "price": 29,
                "unit": "0.5H"
            },
            {
                "title": "虚拟恋人",
                "price": 151,
                "unit": "1D"
            },
            {
                "title": "唱歌(常规)",
                "price": 6,
                "unit": "首"
            },
            {
                "title": "唱歌(歌手)",
                "price": 9,
                "unit": "首"
            },
            {
                "title": "唱歌(常规礼包)",
                "price": 29,
                "unit": "5首"
            },
            {
                "title": "唱歌(歌手礼包)",
                "price": 44,
                "unit": "5首"
            }
        ],
    },
    "游戏类陪玩价目表": {
        "service-list": [
            {
                "title": "LOL(Normal/TFT/Aram)",
                "price": 16,
                "unit": "H"
            },
            {
                "title": "PUBG(娱乐模式)",
                "price": 16,
                "unit": "H"
            },
            {
                "title": "CSGO(匹配/无段位官匹)",
                "price": 16,
                "unit": "H"
            },
            {
                "title": "Naraka(娱乐模式/Rank 另算)",
                "price": 16,
                "unit": "H"
            },
            {
                "title": "R6/COD/OW/黎明杀机",
                "price": 16,
                "unit": "H"
            },
            {
                "title": "Steam游戏",
                "price": 16,
                "unit": "H"
            },
            {
                "title": "逃离塔克夫",
                "price": 17,
                "unit": "H"
            }
        ],
    },
    "LOL陪练价目表": {
        "service-list": [
            {
                "title": "黑铁/青铜/白银",
                "price": 13,
                "unit": "Round"
            },
            {
                "title": "黄金段位",
                "price": 16,
                "unit": "Round"
            },
            {
                "title": "铂金段位",
                "price": 17,
                "unit": "Round"
            },
            {
                "title": "钻四钻三",
                "price": 23,
                "unit": "Round"
            },
            {
                "title": "钻二",
                "price": 25,
                "unit": "Round"
            },
            {
                "title": "钻一",
                "price": 25,
                "unit": "Round"
            }
        ]
    },
    "Valorant价目表": {
        "service-list": [
            {
                "title": "黑铁/青铜",
                "price": 16,
                "unit": "H"
            },
            {
                "title": "白银",
                "price": 16,
                "unit": "H"
            },
            {
                "title": "黄金",
                "price": 18,
                "unit": "H"
            },
            {
                "title": "白金",
                "price": 20,
                "unit": "H"
            },
            {
                "title": "钻石",
                "price": 25,
                "unit": "H"
            },
            {
                "title": "神话",
                "price": 30,
                "unit": "H"
            }
        ], "other": ""
    },
    "APEX价目表": {
        "service-list": [
            {
                "title": "匹配 1陪2",
                "price": 18,
                "unit": "H"
            },
            {
                "title": "匹配 2陪1",
                "price": 17,
                "unit": "H"
            },
            {
                "title": "青铜/白银 1陪2",
                "price": 18,
                "unit": "H"
            },
            {
                "title": "黄金/铂金 1陪2",
                "price": 20,
                "unit": "H"
            },
            {
                "title": "钻石 1陪2",
                "price": 22,
                "unit": "H"
            },
            {
                "title": "大师 1陪2",
                "price": 26,
                "unit": "H"
            },
            {
                "title": "猎杀 1陪2",
                "price": 30,
                "unit": "H"
            },
        ],
        "other": <small>{`* 二陪一单价减一。（匹配 2陪1 => 18-1 = 17 / H)`}</small>
    },

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
            <div className="text-black text-6xl text-center">
                项目 & 价格
            </div>
            <div className='md:mx-20 my-20 py-8 px-8 grid grid-cols-2 gap-4'>
                {Object.keys(pricing_category).map(key => {
                    return <GenericCard key={`pricing_card_${key}`} title={key} text={generateTable(pricing_category[key]["service-list"])} other={pricing_category[key]["other"]} />
                })}
            </div>
        </div>
    );
}

export default PricingSection