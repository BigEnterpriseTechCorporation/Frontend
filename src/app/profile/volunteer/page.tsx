"use client"
import Navigation from '@/components/layout/navigation'

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
			<div className='bg-[rgba(67,67,67,.46)] w-full h-full rounded-3xl border-sand border-4 pt-8 px-[6.25rem] pb-[6.25rem] gap-12 flex flex-col items-center justify-between'>
				<Navigation />
				<div className='grid grid-cols-8 items-stretch w-full h-full'>
					<div className='col-span-2 bg-limo rounded-l-3xl px-5 py-9'>
						<Image
							src={a}
							alt=''
							className='rounded-full mb-4'
						/>
						<h2 className='text-4xl mb-10 text-center'>Имя Фамилия</h2>
						<ul>
							{options.map((option) => {
								return (
									<li
										key={option}
										className={`${
											choosedTab === option
												? 'text-[#007AFF] bg-[#2B3648]'
												: 'hover:text-white hover:bg-sand'
										} py-5 hover: text-center duration-300 ease-in-out rounded-md`}
									>
										<button
											className='flex items-center justify-center gap-12 text-center w-full'
											onClick={() => setChoosedTab(option)}
										>
											<h3>{option}</h3>
										</button>
									</li>
								)
							})}
						</ul>
					</div>
					<div className='col-span-6 bg-[rgba(46,46,52,.61)] rounded-r-3xl max-h-full !overflow-y-hidden px-12 pt-8 pb-16'>
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
