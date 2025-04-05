import Container from '@/components/ui/container'
import Input from '@/components/ui/input'
import Link from 'next/link'
import React from 'react'

export default function Auth() {
	return (
		<div className='auth h-screen w-screen flex items-center justify-center'>
			<Container className='flex flex-col items-center w-[40%]'>
				<h1 className='text-lg mb-1'>Создать учётную запись</h1>
				<label className='w-full mb-1'>
					<h2 className='text-base pl-1 text-silver'>
						Фамилия <mark className='bg-transparent text-armor'>[А-я]</mark>
					</h2>
					<Input className='w-full' />
				</label>
				<label className='w-full mb-1'>
					<h2 className='text-base pl-1 text-silver'>
						Имя <mark className='bg-transparent text-armor'>[А-я]</mark>
					</h2>
					<Input className='w-full' />
				</label>
				<label className='w-full mb-1'>
					<h2 className='text-base pl-1 text-silver'>
						Логин <mark className='bg-transparent text-armor'>[A-z]</mark>
					</h2>
					<Input className='w-full' />
				</label>
				<label className='w-full mb-1'>
					<h2 className='text-base pl-1 text-silver'>
						Пароль <mark className='bg-transparent text-armor'>[A-z, 0-9, &#!]</mark>
					</h2>
					<Input className='w-full' type='password'/>
				</label>
				<label className='w-full mb-4'>
					<h2 className='text-base pl-1 text-silver'>Дата рождения</h2>
					<div className='grid grid-cols-3 gap-6 justify-between'>
						<Input placeholder='День' />
						<Input placeholder='Месяц' />
						<Input placeholder='Год' />
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
