import React from "react"
import ItemMainOrg from "./itemMainOrg"
export default function MainOrg(){
    return(
        <div className="flex flex-row justify-between items-center gap-4 w-full h-full p-4">
            <ItemMainOrg title="Запланировано" organizers={[
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
                },
            ]} />
            <ItemMainOrg title="Активно" organizers={[
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
                },
            ]} />
            <ItemMainOrg title="Выполнено" organizers={[
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
                },
            ]} />
        </div>
    )
}
