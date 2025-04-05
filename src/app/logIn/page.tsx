'use client'

import Container from '@/components/ui/container'
import Input from '@/components/ui/input'
import Link from 'next/link'
import React from 'react'
import { useTheme } from '@/context/ThemeContext'

export default function LogIn() {
	const { isDarkTheme } = useTheme()
	return (
		<div className='auth h-screen w-screen flex items-center justify-center'>
			<Container className='flex flex-col items-center w-[40%]'>
				<h1 className={`text-lg mb-1 ${isDarkTheme ? 'text-white' : 'text-[#313338]'}`}>С возвращением!</h1>
				<h2 className={`text-base mb-4 ${isDarkTheme ? 'text-white' : 'text-[#313338]'}`}>Мы так рады видеть вас снова!</h2>
				<label className='w-full mb-2'>
					<h2 className={`text-base pl-1 ${isDarkTheme ? 'text-silver' : 'text-[#313338]'}`}>Логин</h2>
					<Input className={`w-full ${isDarkTheme ? 'bg-gunmetal text-white' : 'bg-[#E3E5E8] border-[#D2D5DA] text-[#313338]'}`} />
				</label>
				<label className='w-full mb-4'>
					<h2 className={`text-base pl-1 ${isDarkTheme ? 'text-silver' : 'text-[#313338]'}`}>Пароль</h2>
					<Input
						className={`w-full ${isDarkTheme ? 'bg-gunmetal text-white' : 'bg-[#E3E5E8] border-[#D2D5DA] text-[#313338]'}`}
						type='password'
					/>
				</label>
				<button
					className='bg-sea w-full py-2 rounded-md font-semibold capitalize mb-2'
					type='submit'
				>
					вход
				</button>
				<h4 className='text-silver'>
					нужна учётная запись?{' '}
					<Link
						href={'/auth'}
						className='text-blue-500'
					>
						Зарегистрироваться
					</Link>
				</h4>
			</Container>
		</div>
	)
}
