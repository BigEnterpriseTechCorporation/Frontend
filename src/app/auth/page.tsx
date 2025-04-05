'use client'
import Container from '@/components/ui/container'
import Input from '@/components/ui/input'
import Link from 'next/link'
import React from 'react'
import { useTheme } from '@/context/ThemeContext'


export default function Auth() {
	const { isDarkTheme } = useTheme()
	return (
		<div className='auth h-screen w-screen flex items-center justify-center'>
			<Container className='flex flex-col items-center w-[40%]'>
				<h1 className={`text-lg mb-1 ${isDarkTheme ? 'text-silver' : 'text-[#313338]'}`}>Создать учётную запись</h1>
				<label className='w-full mb-1'>
						<h2 className={`text-base pl-1 ${isDarkTheme ? 'text-silver' : 'text-[#313338]'}`}>
						Фамилия <mark className='bg-transparent text-armor'>[А-я]</mark>
					</h2>
					<Input className={`w-full ${isDarkTheme ? 'bg-gunmetal text-white' : 'bg-[#E3E5E8] border-[#D2D5DA] text-[#313338]'}`} />
				</label>
				<label className='w-full mb-1'>
						<h2 className={`text-base pl-1 ${isDarkTheme ? 'text-silver' : 'text-[#313338]'}`}>
						Имя <mark className='bg-transparent text-armor'>[А-я]</mark>
					</h2>
					<Input className={`w-full ${isDarkTheme ? 'bg-gunmetal text-white' : 'bg-[#E3E5E8] border-[#D2D5DA] text-[#313338]'}`} />
				</label>
				<label className='w-full mb-1'>
					<h2 className={`text-base pl-1 ${isDarkTheme ? 'text-silver' : 'text-[#313338]'}`}>
						Логин <mark className='bg-transparent text-armor'>[A-z]</mark>
					</h2>
					<Input className={`w-full ${isDarkTheme ? 'bg-gunmetal text-white' : 'bg-[#E3E5E8] border-[#D2D5DA] text-[#313338]'}`} />
				</label>
				<label className='w-full mb-1'>
					<h2 className={`text-base pl-1 ${isDarkTheme ? 'text-silver' : 'text-[#313338]'}`}>
						Пароль <mark className='bg-transparent text-armor'>[A-z, 0-9, &#!]</mark>
					</h2>
					<Input className={`w-full ${isDarkTheme ? 'bg-gunmetal text-white' : 'bg-[#E3E5E8] border-[#D2D5DA] text-[#313338]'}`} type='password'/>
				</label>
				<label className='w-full mb-4'>
					<h2 className={`text-base pl-1 ${isDarkTheme ? 'text-silver' : 'text-[#313338]'}`}>Дата рождения</h2>
					<div className='grid grid-cols-3 gap-6 justify-between'>
						<Input placeholder='День' className={`${isDarkTheme ? 'bg-gunmetal text-white' : 'bg-[#E3E5E8] border-[#D2D5DA] text-[#313338]'}`} />
						<Input placeholder='Месяц' className={`${isDarkTheme ? 'bg-gunmetal text-white' : 'bg-[#E3E5E8] border-[#D2D5DA] text-[#313338]'}`}/>
						<Input placeholder='Год' className={`${isDarkTheme ? 'bg-gunmetal text-white' : 'bg-[#E3E5E8] border-[#D2D5DA] text-[#313338]'}`}/>
					</div>
				</label>
				<button
					className='bg-sea w-full py-2 rounded-md font-semibold capitalize mb-2'
					type='submit'
				>
					продолжить
				</button>
				<Link
					href={'/logIn'}
					className='text-blue-500 text-sm'
				>
					Уже зарегистрированы?
				</Link>
			</Container>
		</div>
	)
}
