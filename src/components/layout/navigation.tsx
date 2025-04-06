'use client'
import Image from 'next/image'
import Link from 'next/link'

import profile from '@/assets/icons/profile.svg'
import lightMode from '@/assets/icons/light-mode.svg'
import shield from '@/assets/icons/shield.svg'
import notShield from "@/assets/icons/not-shield.svg"
import info from '@/assets/icons/info.svg'
import checkbox from '@/assets/icons/checkbox.svg'
import groups from '@/assets/icons/groups.svg'
import { useEffect, useState } from 'react'
import { useTheme } from '@/context/ThemeContext'

export default function Navigation() {
	const [role, setRole] = useState('')
	const { isDarkTheme, toggleTheme } = useTheme()

	useEffect(() => {
		setRole(localStorage.getItem('role') || '')
	}, [])

	return (
		<nav className={`${isDarkTheme ? 'bg-gunmetal border-[#1D1D1D]' : 'bg-antiGunmetal border-[#D8DBDF]'} rounded-3xl flex items-center gap-12 py-2 px-4 w-max border self-center justify-self-center`}>
			<Link href={`${role === '' ? '/auth' : '/profile/' + role}`}>
				<Image
					src={profile}
					alt=''
					className={`h-4 w-4 ${!isDarkTheme ? 'brightness-0' : ''}`}
				/>
			</Link>

			<ul className='flex gap-6 items-center'>
				<li>
					<Link
						href={'/'}
						className='flex gap-1 items-center'
					>
						<Image
							src={info}
							alt=''
							className={`h-4 w-4 ${!isDarkTheme ? 'brightness-0' : ''}`}
						/>
						<h1 className={!isDarkTheme ? 'text-[#313338]' : ''}>Полезная информация</h1>
					</Link>
				</li>
				<li>
					<Link
						href={'/profile/volunteer'}
						className='flex gap-1 items-center'
					>
						<Image
							src={checkbox}
							alt=''
							className={`h-4 w-4 ${!isDarkTheme ? 'brightness-0' : ''}`}
						/>
						<h1 className={!isDarkTheme ? 'text-[#313338]' : ''}>Волонтёрам</h1>
					</Link>
				</li>
				<li>
					<Link
						href={'/'}
						className='flex gap-1 items-center'
					>
						<Image
							src={groups}
							alt=''
							className={`h-4 w-4 ${!isDarkTheme ? 'brightness-0' : ''}`}
						/>
						<h1 className={!isDarkTheme ? 'text-[#313338]' : ''}>Организаторам</h1>
					</Link>
				</li>
			</ul>
			<div className='flex items-center gap-6'>
				<button onClick={toggleTheme}>
					<Image
						src={lightMode}
						alt=''
						className={`h-4 w-4 ${!isDarkTheme ? 'brightness-0' : ''}`}
					/>
				</button>
				<Link href={'/panels/admin'}>
					<Image
						src={role === 'admin' ? shield : notShield}
						alt=''
						className={`h-4 w-4 ${!isDarkTheme ? 'brightness-0' : ''}`}
					/>
				</Link>
			</div>
		</nav>
	)
}
