"use client"
import Navigation from '@/components/layout/navigation'
import { useTheme } from '@/context/ThemeContext'

import bg from '@/assets/images/a0a01608a0386ad052a15a5af8196be7.png'
import a from "@/assets/icons/Pixel art 32_32 1.png"
import Image from 'next/image'
import Events from '@/components/layout/volunteers/events'
import { useState } from 'react'
import Profile from '@/components/layout/volunteers/profile'
import Support from '@/components/layout/volunteers/support'
import WorkingHours from '@/components/layout/volunteers/workingHours'

export default function Volunteer() {
	const [choosedTab,setChoosedTab] = useState("События")
	const { isDarkTheme } = useTheme()

	const options = [
		"События",
		"Профиль",
		"Поддержка",
		"Отработанные часы"
	]

	const Tab = () => {
		switch (choosedTab) {
			case 'События':
				return <Events />
			case 'Профиль':
				return <Profile />
			case 'Поддержка':
				return <Support />
			case 'Отработанные часы':
				return <WorkingHours />
		}
	}

	return (
		<main className='h-screen w-screen p-7 max-h-screen '>
			<div className={`${isDarkTheme ? 'bg-[rgba(67,67,67,.46)] border-sand' : 'bg-[rgba(107,107,107,.46)] border-[#D8DBDF]'} w-full h-full rounded-3xl border-4 pt-8 px-[6.25rem] pb-[7vh] gap-12 grid grid-rows-[min-content_auto] justify-center`}>
				<Navigation />
				<div className='grid grid-cols-8 items-stretch w-full self-stretch overflow-x-hidden'>
					<div className={`col-span-2 ${isDarkTheme ? 'bg-limo' : 'bg-[#D8DBDF]'} rounded-l-3xl px-5 py-[4vh] flex flex-col items-center w-full`}>
						<Image
							src={a}
							alt=''
							className='rounded-full mb-[1vh] h-[15vh] w-[15vh]'
						/>
						<h2 className={`text-4xl mb-[0.5dvh] text-center ${isDarkTheme ? 'text-white' : 'text-[#313338]'}`}>Имя Фамилия</h2>
						<ul>
							{options.map((option) => {
								const isSelected = choosedTab === option;
								return (
									<li
										key={option}
										className={`${
											isSelected
												? isDarkTheme 
													? 'text-[#007AFF] bg-[#2B3648]' 
													: 'text-[#007AFF] bg-[#007AFF75]'
												: isDarkTheme
													? 'hover:text-white hover:bg-sand'
													: 'text-[#2E2E2E] hover:text-[#007AFF] hover:bg-[#007AFF25]'
										} py-[0.25vh] hover: text-center duration-300 ease-in-out rounded-md w-full`}
									>
										<button
											className='text-center w-full'
											onClick={() => setChoosedTab(option)}
										>
											<h3>{option}</h3>
										</button>
									</li>
								)
							})}
						</ul>
					</div>
					<div className={`col-span-6 ${isDarkTheme ? 'bg-[rgba(46,46,52,.61)]' : 'bg-[rgba(107,107,107,.61)]'} rounded-r-3xl !overflow-y-hidden px-12 pt-8 pb-[4vh]`}>
						{<Tab />}
					</div>
				</div>
			</div>
			<Image
				src={bg}
				alt=''
				className='absolute top-0 left-0 -z-10 w-full h-full'
			/>
		</main>
	)
}
