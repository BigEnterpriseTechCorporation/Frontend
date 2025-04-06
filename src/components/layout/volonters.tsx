import React from "react"
import Navigation from "./navigation"
import { useTheme } from '@/context/ThemeContext'
import ItemVolonter from "./itemVolonter"
import plug from "@/assets/images/plug.png"

export default function Volonters(){
    const { isDarkTheme } = useTheme()
    
    return (
        <div className="max-h-screen w-full h-[94vh] flex justify-center">
            <div className={`${isDarkTheme ? 'bg-[#43434375] border-[#3E4147]' : 'bg-[#6B6B6B75] border-[#D8DBDF]'} rounded-3xl w-full border-2 `}>
                <div className="flex flex-col items-center justify-center p-4">
                    <Navigation />
                </div>
                <div className="grid grid-cols-3 p-6 pt-0 gap-4 max-h-[75vh] overflow-y-auto ScrollBar">
                    <ItemVolonter 
                        news={[
                            {
                                title: "Луганский театр имени Голубовича выступил на гастролях в Беларуси",
                                time: "4 ч назад",
                                nickname: "Abydoganovogodich"
                            }
                        ]}
                        urlImage={plug}
                    />
                     <ItemVolonter 
                        news={[
                            {
                                title: "Луганский театр имени Голубовича выступил на гастролях в Беларуси",
                                time: "4 ч назад",
                                nickname: "Abydoganovogodich"
                            }
                        ]}
                        urlImage={plug}
                    />
                     <ItemVolonter 
                        news={[
                            {
                                title: "Луганский театр имени Голубовича выступил на гастролях в Беларуси",
                                time: "4 ч назад",
                                nickname: "Abydoganovogodich"
                            }
                        ]}
                        urlImage={plug}
                    />
                     <ItemVolonter 
                        news={[
                            {
                                title: "Луганский театр имени Голубовича выступил на гастролях в Беларуси",
                                time: "4 ч назад",
                                nickname: "Abydoganovogodich"
                            }
                        ]}
                        urlImage={plug}
                    />
                     <ItemVolonter 
                        news={[
                            {
                                title: "Луганский театр имени Голубовича выступил на гастролях в Беларуси",
                                time: "4 ч назад",
                                nickname: "Abydoganovogodich"
                            }
                        ]}
                        urlImage={plug}
                    />
                     <ItemVolonter 
                        news={[
                            {
                                title: "Луганский театр имени Голубовича выступил на гастролях в Беларуси",
                                time: "4 ч назад",
                                nickname: "Abydoganovogodich"
                            }
                        ]}
                        urlImage={plug}
                    />
                </div>
            </div>
        </div>
    )
}

