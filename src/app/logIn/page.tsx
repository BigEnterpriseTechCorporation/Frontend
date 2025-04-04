import Container from '@/components/ui/container'
import Input from '@/components/ui/input'
import Link from 'next/link'
import React from 'react'

export default function LogIn() {
	return (
		<div className='auth h-screen w-screen flex items-center justify-center'>
			<Container className='flex flex-col items-center w-[40%]'>
				<h1 className='text-lg mb-1'>С возвращением!</h1>
				<h2 className='text-base mb-4'>Мы так рады видеть вас снова!</h2>
				<label className='w-full mb-2'>
					<h2 className='text-base pl-1 text-silver'>Логин</h2>
					<Input className='w-full' />
				</label>
				<label className='w-full mb-4'>
					<h2 className='text-base pl-1 text-silver'>Пароль</h2>
					<Input
						className='w-full'
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
