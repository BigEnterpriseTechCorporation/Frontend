import React from "react"
import Image, { StaticImageData } from "next/image"
import menu from "@/assets/icons/menu.svg"
import plus from "@/assets/icons/plus.svg"
import check from "@/assets/icons/check.svg"
import cross from "@/assets/icons/cross.svg"
import { useTheme } from '@/context/ThemeContext'

interface ItemForVolonter {
    title: string;
    time: string;
    nickname: string;
}
  
  interface ItemBlock {
    news: ItemForVolonter[];
    urlImage: string | StaticImageData;
  }
export default function ItemPanel({news, urlImage}:ItemBlock){
    const { isDarkTheme } = useTheme()
    return (
        <div className="">
            {news.map((item, index) => (
                <div key={index} className={`${isDarkTheme ? 'bg-[#232428]' : 'bg-[#F1F1F1]'} max-w-[350px] mx-auto rounded-lg shadow-md mb-4`}>
                    <Image src={urlImage} alt="image" className="w-full max-h-[200px] rounded-lg rounded-b-none"/>
                    <div className="p-3">
                        <p className={`${isDarkTheme ? 'text-[#F1F1F1]' : 'text-[#313338]'} text-xs mb-3`}>{item.title}</p>
                        <div className="flex justify-between items-center">
                            <div className="flex gap-2 items-center">
                                <span className={`${isDarkTheme ? 'text-[#F1F1F1]' : 'text-[#313338]'} text-xs`}>{item.nickname}</span>
                                <span className={`${isDarkTheme ? 'text-[#F1F1F1]' : 'text-[#313338]'} text-xs`}>{item.time}</span>
                            </div>
                            <div>
                                <button>
                                    <Image src={menu} alt="menu" width={6} height={6} className={`${!isDarkTheme ? 'brightness-0' : ''}`} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
