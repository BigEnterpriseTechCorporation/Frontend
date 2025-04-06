import React from "react"
import Navigation from "./navigation"
import admin from "@/assets/icons/admin.svg"
import Image from "next/image"
import ItemPanel from "./itemPanel"
import { useTheme } from '@/context/ThemeContext'

export default function APanel(){
    const { isDarkTheme } = useTheme()
    
    return (
        <div className="max-h-screen w-full flex items-center justify-center overflow-hidden ">
            <div className={`${isDarkTheme ? 'bg-[#43434375] border-[#3E4147]' : 'bg-[#6B6B6B75] border-[#D8DBDF]'} rounded-3xl w-full border-2 `}>
                <div className="flex flex-col items-center justify-center p-4">
                    <Navigation />
                    <div className="flex justify-center items-center gap-2 mt-3">
                        <p className="text-3xl max-[426px]:text-6xl">Панель администратора</p>
                        <Image src={admin} alt="admin.svg" width={30} height={30} className="ml-2 max-[680px]:w-[15px]  max-[680px]:h-[15px]"/>
                    </div>
                </div>
                <div className="grid grid-cols-3 p-6 pt-0 gap-4 max-h-[70vh] max-[680px]:grid-cols-2 max-[680px]:overflow-auto ScrollBar max-[426px]:grid-cols-1">
                    <ItemPanel
                            title="Организаторы"
                            organizers={[
                                {
                                    title: "Внедрения Я.Метрики",
                                    description: "Краткое описание События",
                                    name: "Фамилия И.",
                                    nickname: "Ник"
                                },
                                {
                                        title: "Внедрения Я.Метрики",
                                    description: "Краткое описание События",
                                    name: "Фамилия И.",
                                    nickname: "Ник"
                                },
                                {
                                    title: "Внедрения Я.Метрики",
                                    description: "Краткое описание События",
                                    name: "Фамилия И.",
                                    nickname: "Ник"
                                },
                                {
                                    title: "Внедрения Я.Метрики",
                                    description: "Краткое описание События",
                                    name: "Фамилия И.",
                                    nickname: "Ник"
                                }
                            ]}
                        
                    />
                    <ItemPanel
                            title="На согласовании"
                            organizers={[
                                {
                                title: "Внедрения Я.Метрики",
                                description: "Краткое описание События",
                                name: "Фамилия И.",
                                nickname: "Ник"
                                },
                                {
                                title: "Внедрения Я.Метрики",
                                description: "Краткое описание События",
                                name: "Фамилия И.",
                                nickname: "Ник"
                                }
                            ]}
                    />
                    <ItemPanel
                            title="Волонтёры"
                            organizers={[
                                {
                                title: "Внедрения Я.Метрики",
                                description: "Краткое описание События",
                                name: "Фамилия И.",
                                nickname: "Ник"
                                },
                                {
                                title: "Внедрения Я.Метрики",
                                description: "Краткое описание События",
                                name: "Фамилия И.",
                                nickname: "Ник"
                                }
                            ]}
                    />
                    <ItemPanel
                            title="Запланировано"
                            organizers={[
                                {
                                title: "Внедрения Я.Метрики",
                                description: "Краткое описание События",
                                name: "Фамилия И.",
                                nickname: "Ник"
                                },
                                {
                                title: "Внедрения Я.Метрики",
                                description: "Краткое описание События",
                                name: "Фамилия И.",
                                nickname: "Ник"
                                }
                            ]}
                    />
                    <ItemPanel
                            title="Активно"
                            organizers={[
                                {
                                title: "Внедрения Я.Метрики",
                                description: "Краткое описание События",
                                name: "Фамилия И.",
                                nickname: "Ник"
                                },
                                {
                                title: "Внедрения Я.Метрики",
                                description: "Краткое описание События",
                                name: "Фамилия И.",
                                nickname: "Ник"
                                }
                            ]}
                    />
                    <ItemPanel
                            title="Выполнено"
                            organizers={[
                                {
                                title: "Внедрения Я.Метрики",
                                description: "Краткое описание События",
                                name: "Фамилия И.",
                                nickname: "Ник"
                                },
                                {
                                title: "Внедрения Я.Метрики",
                                description: "Краткое описание События",
                                name: "Фамилия И.",
                                nickname: "Ник"
                                }
                            ]}
                    /> 
                </div>
            </div>
        </div>
    )
}

