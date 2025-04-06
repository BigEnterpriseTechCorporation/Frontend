"use client"
import blankProfile from "@/assets/icons/Pixel art 32_32 1.png"
import Image from "next/image"
import { useState } from "react"
import { useTheme } from '@/context/ThemeContext'

export default function Profile(){

  const [choosedLabel, setChoosedLabel] = useState("")
  const { isDarkTheme } = useTheme()

  const labels = [
		{
			name: 'Имя пользователя',
			placeholder: 'Имя Фамилия',
		},
		{
			name: 'Логин',
			placeholder: 'ПримерЛогина',
		},
		{
			name: 'Пароль',
			placeholder: '**********',
		},
		{
			name: 'Дата рождения',
			placeholder: '01.01.1999',
		},
	]

  const Input = (label:{name:string, placeholder:string}) => {
    if(choosedLabel === label.name) return <input placeholder={label.placeholder} className={`${isDarkTheme ? 'bg-black text-white' : 'bg-[#6B6B6B] text-[#313338]'} px-2 w-fit text-md`}/>
    return <h2 className={`text-md ${isDarkTheme ? 'text-white' : 'text-[#313338]'}`}>{label.placeholder}</h2>
  }

  return (
		<div className='flex flex-col items-center h-full'>
			<div className={`w-full ${isDarkTheme ? 'bg-limo' : 'bg-[#D8DBDF]'} h-full py-6 px-4 grid grid-rows-5 rounded-2xl`}>
				<div className='flex items-center gap-7 mb-8'>
					<Image
						src={blankProfile}
						alt=''
            className="h-20 w-20 rounded-full p-4"
					/>
					<h3 className={`${isDarkTheme ? 'text-white' : 'text-[#313338]'}`}>Имя Фамилия | Логин</h3>
				</div>
				<ul className="flex flex-col justify-between row-span-4">
					{labels.map(label => {
            return(
              <li key={label.name} className="flex items-center justify-between">
                <label htmlFor="">
                  <h2 className={`text-md ${isDarkTheme ? 'text-white' : 'text-[#313338]'}`}>{label.name}</h2>
                  <Input {...label}/>
                </label>
                <button className={`${isDarkTheme ? 'bg-gunmetal text-white' : 'bg-[#D8DBDF] text-[#313338]'} px-4 py-2 rounded-lg`} onClick={()=>setChoosedLabel(label.name)}>Изменить</button>
              </li>
            )
          })}
				</ul>
			</div>
		</div>
	)
}