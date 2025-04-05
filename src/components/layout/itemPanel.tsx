import React from "react"
import Image from "next/image"
import menu from "@/assets/icons/menu.svg"
import plus from "@/assets/icons/plus.svg"
import check from "@/assets/icons/check.svg"
import cross from "@/assets/icons/cross.svg"

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
    return (
        <div className="bg-[#1B1C1F99] w-[95%] rounded-2xl">
            <div className="flex justify-between items-center bg-gunmetal pr-4 pl-4 p-2 rounded-t-2xl rounded-b-none">
                <h2 className="text-xl text-white">{title}</h2>
                <button>
                    <Image src={plus} alt="menu" width={15} height={15} />
                </button>
            </div>
            <div className={`space-y-2 p-3 max-h-[180px] overflow-y-auto ScrollBar`}>
                {organizers.map((organizer, index) => (
                <div 
                    key={index}
                    className="bg-ebony rounded-lg shadow-md hover:shadow-lg transition-shadow p-4"
                >
                    <div className="flex justify-between items-center">
                        <h3 className="text-white">
                            {organizer.title}
                        </h3>
                        <button>
                            <Image src={menu} alt="menu" width={5} height={5} />
                        </button>
                    </div>
                    <p className="text-white mb-6 text-xs">
                        ({organizer.description})
                    </p>
                    <div className="flex justify-between items-center">
                        <div className="text-white font-medium text-xs">
                            {organizer.name}
                            {organizer.nickname && ( 
                                <span className="ml-2 text-white">@{organizer.nickname}</span>
                            )}
                        </div>
                        {title === "На согласовании" && (
                            <div className="flex gap-2">
                                <button className="p-1 ">
                                    <Image src={check} alt="approve" width={20} height={20} />
                                </button>
                                <button className= "p-1">
                                    <Image src={cross} alt="reject" width={20} height={20} />
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
