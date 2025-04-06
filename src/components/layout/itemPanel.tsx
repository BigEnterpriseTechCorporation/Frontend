import React from "react"
import Image from "next/image"
import menu from "@/assets/icons/menu.svg"
import plus from "@/assets/icons/plus.svg"
import check from "@/assets/icons/check.svg"
import cross from "@/assets/icons/cross.svg"
import { useTheme } from '@/context/ThemeContext'

interface ItemForPanel {
    title: string;
    description: string;
    name: string;
    nickname: string;
  }
  
  interface ItemBlock {
    organizers: ItemForPanel[];
    title: string;
  }
export default function ItemPanel({organizers, title}:ItemBlock){
    const { isDarkTheme } = useTheme()
    return (
        <div className={`${isDarkTheme ? 'bg-[#1B1C1F99]' : 'bg-[#87879975]'}  w-full rounded-2xl`}>
            <div className={`${isDarkTheme ? 'bg-gunmetal border-[#19191c]' : 'bg-antiGunmetal border-[#A7A9AD]'} flex justify-between items-center pr-4 pl-4 p-2 rounded-t-2xl rounded-b-none  border-b-2`}>
                <h2 className={`${isDarkTheme ? 'text-white' : 'text-[#313338]'} text-xl max-[680px]:text-2xl`}>{title}</h2>
                <button>
                    <Image src={plus} alt="menu" width={15} height={15} className={`${!isDarkTheme ? 'brightness-0' : ''} max-[680px]:w-[10px] max-[680px]:h-[10px]`} />
                </button>
            </div>
            <div className={`space-y-2 p-3 max-h-[180px] overflow-y-auto ScrollBar`}>
                {organizers.map((organizer, index) => (
                <div 
                    key={index}
                    className={`${isDarkTheme ? 'bg-ebony' : 'bg-antiGunmetal '}  rounded-lg shadow-md hover:shadow-lg transition-shadow p-4`}
                >
                    <div className="flex justify-between items-center">
                        <h3 className={`${isDarkTheme ? 'text-white' : 'text-[#313338]'} max-[680px]:text-2xl`} >
                            {organizer.title}
                        </h3>
                        <button>
                            <Image src={menu} alt="menu" width={5} height={5} className={`${!isDarkTheme ? 'brightness-0' : ''}`}/>
                        </button>
                    </div>
                    <p className={`${isDarkTheme ? 'text-white' : 'text-[#313338]'}  mb-6 text-xs max-[680px]:text-xl`}>
                        ({organizer.description})
                    </p>
                    <div className="flex justify-between items-center">
                        <div className={`${isDarkTheme ? 'text-white' : 'text-[#313338]'} font-medium text-xs max-[680px]:text-xl`}>
                            {organizer.name}
                            {organizer.nickname && ( 
                                <span className={`${isDarkTheme ? 'text-white' : 'text-[#313338]'} ml-2`}>@{organizer.nickname}</span>
                            )}
                        </div>
                        {title === "На согласовании" && (
                            <div className="flex gap-2">
                                <button className="p-1 ">
                                    <Image src={check} alt="approve" width={20} height={20} className="max-[680px]:w-[15px] max-[680px]:h-[15px]"  />
                                </button>
                                <button className= "p-1">
                                    <Image src={cross} alt="reject" width={20} height={20} className="max-[680px]:w-[15px] max-[680px]:h-[15px]" />
                                </button>
                            </div>
                        )}
                    </div>
                </div>
                ))}
            </div>
            </div>
    )
}
