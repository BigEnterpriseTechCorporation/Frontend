import React from "react"
import Navigation from "./navigation"
import admin from "@/assets/icons/admin.svg"
import Image from "next/image"
import ItemPanel from "./itemPanel"

export default function APanel(){
    return (
        <div className="max-h-screen w-full flex items-center justify-center overflow-hidden ">
            <div className="bg-[#43434375] rounded-3xl w-full border-2 border-[#3E4147]">
                <div className="flex flex-col items-center justify-center p-4">
                    <Navigation />
                    <div className="flex justify-center items-center gap-2 mt-3">
                        <p className="text-3xl">Панель администратора</p>
                        <Image src={admin} alt="admin.svg" width={30} height={30} className="ml-2"/>
                    </div>
                </div>
                <div className="grid grid-cols-3 p-3 gap-2 max-h-[70vh]">
                    <ItemPanel
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

