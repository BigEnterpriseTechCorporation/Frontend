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

export default function Navigation() {
	const [role, setRole] = useState('')

	useEffect(() => {
		setRole(localStorage.getItem('role') || '')
	}, [])

	return (
		<nav className='bg-gunmetal rounded-3xl flex items-center gap-12 py-2 px-4 w-max'>
			<Link href={`${role === '' ? '/auth' : '/profile/' + role}`}>
				<Image
					src={profile}
					alt=''
					className='h-4 w-4'
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
							className='h-4 w-4'
						/>
						<h1>Полезная информация</h1>
					</Link>
				</li>
				<li>
					<Link
						href={'/'}
						className='flex gap-1 items-center'
					>
						<Image
							src={checkbox}
							alt=''
							className='h-4 w-4'
						/>
						<h1>Волонтёрам</h1>
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
							className='h-4 w-4'
						/>
						<h1>Организаторам</h1>
					</Link>
				</li>
			</ul>
			<div className='flex items-center gap-6'>
				<button>
					<Image
						src={lightMode}
						alt=''
						className='h-4 w-4'
					/>
				</button>
				<Link href={'/'}>
					<Image
						src={role === 'admin' ? shield : notShield}
						alt=''
						className='h-4 w-4'
					/>
				</Link>
			</div>
		</nav>
	)
}
