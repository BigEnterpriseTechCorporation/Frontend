import React from "react"
import Navigation from "./navigation"
import admin from "@/assets/icons/admin.svg"
import Image from "next/image"
import ItemPanel from "./itemPanel"
import { useTheme } from '@/context/ThemeContext'
import MainOrg from "./organisator/mainOrg"


export default function OrgPanel(){
    const { isDarkTheme } = useTheme()
    
    return (
        <div className="max-h-screen w-full  h-[94vh]  flex  justify-center overflow-hidden ">
            <div className={`${isDarkTheme ? 'bg-[#43434375] border-[#3E4147]' : 'bg-[#6B6B6B75] border-[#D8DBDF]'} rounded-3xl w-full border-2 `}>
                <div className="flex flex-col items-center justify-center p-4">
                    <Navigation />
                    <div className="flex justify-center items-center gap-2 mt-3">
                        <p className="text-3xl">Панель организатора</p>
                    </div>
                </div>
                <div className="max-h-[70vh] h-full">
                    <MainOrg />
                </div>
            </div>
        </div>
    )
}

