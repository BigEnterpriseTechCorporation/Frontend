import React from "react"
import Navigation from "./navigation"
import Image from "next/image"
import { useTheme } from '@/context/ThemeContext'
import MainOrg from "./organisator/mainOrg"
import AddRequest from "./organisator/addRequest"
import CurrentRequest from "./organisator/currentRequest"
import AcceptVol from "./organisator/acceptVol"

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
                    <AcceptVol requests={[
                        {
                            title: 'Событие',
                            description: '(Краткое описание События)',
                            author: 'Фамилия И. Ник'
                        },
                        {
                            title: 'Событие',
                            description: '(Краткое описание События)',
                            author: 'Фамилия И. Ник'
                        },
                        {
                            title: 'Событие',
                            description: '(Краткое описание События)',
                            author: 'Фамилия И. Ник'
                        },
                        {
                            title: 'Событие',
                            description: '(Краткое описание События)',
                            author: 'Фамилия И. Ник'
                        },
                        {
                            title: 'Событие',
                            description: '(Краткое описание События)',
                            author: 'Фамилия И. Ник'
                        },
                        {
                            title: 'Событие',
                            description: '(Краткое описание События)',
                            author: 'Фамилия И. Ник'
                        },
                        {
                            title: 'Событие',
                            description: '(Краткое описание События)',
                            author: 'Фамилия И. Ник'
                        }
                    ]} />
                </div>
            </div>
        </div>
    )
}

