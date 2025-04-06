'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useTheme } from '@/context/ThemeContext'

import profile from '@/assets/icons/profile.svg'
import lightMode from '@/assets/icons/light-mode.svg'
import shield from '@/assets/icons/shield.svg'
import notShield from "@/assets/icons/not-shield.svg"
import info from '@/assets/icons/info.svg'
import checkbox from '@/assets/icons/checkbox.svg'
import groups from '@/assets/icons/groups.svg'

export default function Navigation() {
	const [role, setRole] = useState('')
	const { isDarkTheme, toggleTheme } = useTheme()
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	useEffect(() => {
		setRole(localStorage.getItem('role') || '')
	}, [])

	return (
		<>
			<nav className={`${isDarkTheme ? 'bg-gunmetal border-[#1D1D1D]' : 'bg-antiGunmetal border-[#D8DBDF]'} rounded-3xl flex justify-between items-center gap-6 py-2 px-4 w-max border max-[680px]:w-[90%] max-[680px]:h-18 max-[426px]:hidden`}>
				<Link href={`${role === '' ? '/auth' : '/profile/' + role}`}>
					<Image
						src={profile}
						alt=''
						className={`h-4 w-4 ${!isDarkTheme ? 'brightness-0' : ''} max-[680px]:h-10 max-[680px]:w-10`}
					/>
				</Link>

				<ul className='flex gap-6 items-center'>
					<li>
						<Link href={'/'} className='flex gap-1 items-center'>
							<Image
								src={info}
								alt=''
								className={`h-4 w-4 ${!isDarkTheme ? 'brightness-0' : ''} max-[680px]:h-10 max-[680px]:w-10`}
							/>
							<h1 className={`${!isDarkTheme ? 'text-[#313338]' : ''} max-[680px]:text-xl`}>Полезная информация</h1>
						</Link>
					</li>
					<li>
						<Link href={'/'} className='flex gap-1 items-center'>
							<Image
								src={checkbox}
								alt=''
								className={`h-4 w-4 ${!isDarkTheme ? 'brightness-0' : ''} max-[680px]:h-10 max-[680px]:w-10`}
							/>
							<h1 className={`${!isDarkTheme ? 'text-[#313338]' : ''} max-[680px]:text-xl`}>Волонтёрам</h1>
						</Link>
					</li>
					<li>
						<Link href={'/'} className='flex gap-1 items-center'>
							<Image
								src={groups}
								alt=''
								className={`h-4 w-4 ${!isDarkTheme ? 'brightness-0' : ''} max-[680px]:h-10 max-[680px]:w-10`}
							/>
							<h1 className={`${!isDarkTheme ? 'text-[#313338]' : ''} max-[680px]:text-xl`}>Организаторам</h1>
						</Link>
					</li>
				</ul>
				<div className='flex items-center gap-6'>
					<button onClick={toggleTheme}>
						<Image
							src={lightMode}
							alt=''
							className={`h-4 w-4 ${!isDarkTheme ? 'brightness-0' : ''} max-[680px]:h-10 max-[680px]:w-10`}
						/>
					</button>
					<Link href={'/'}>
						<Image
							src={role === 'admin' ? shield : notShield}
							alt=''
							className={`h-4 w-4 ${!isDarkTheme ? 'brightness-0' : ''} max-[680px]:h-10 max-[680px]:w-10`}
						/>
					</Link>
				</div>
			</nav>

			{/* Mobile Navigation */}
			<nav className={`${isDarkTheme ? 'bg-gunmetal border-[#1D1D1D]' : 'bg-antiGunmetal border-[#D8DBDF]'} hidden max-[426px]:flex justify-between items-center w-full px-6 py-4 border-b`}>
				<div className={`${isDarkTheme ? 'text-white' : 'text-[#313338]'} text-6xl font-bold`}>TWC</div>
				<button 
					onClick={() => setIsMenuOpen(!isMenuOpen)}
					className="p-2"
				>
					<div className={`${isDarkTheme ? 'bg-white' : 'bg-gunmetal'} w-12 h-[2px] mb-2`}></div>
					<div className={`${isDarkTheme ? 'bg-white' : 'bg-gunmetal'} w-12 h-[2px] mb-2`}></div>
					<div className={`${isDarkTheme ? 'bg-white' : 'bg-gunmetal'} w-12 h-[2px]`}></div>
				</button>
			</nav>

			{isMenuOpen && (
				<div className={`${isDarkTheme ? 'bg-gunmetal' : 'bg-antiGunmetal'} fixed top-0 left-0 w-full h-screen z-50 hidden max-[426px]:block`}>
					<div className="relative p-6 flex flex-col gap-8">
						<div className="flex justify-between items-center mb-4">
							<div className={`${isDarkTheme ? 'text-white' : 'text-[#313338]'} text-7xl font-bold`}>TWC</div>
							<button 
								onClick={() => setIsMenuOpen(false)}
								className="p-2"
							>
								<div className="relative w-24 h-24">
									<div className={`${isDarkTheme ? 'text-white' : 'text-[#313338]'} absolute top-1/2 left-0 w-24 h-1 bg-current rotate-45`}></div>
									<div className={`${isDarkTheme ? 'text-white' : 'text-[#313338]'} absolute top-1/2 left-0 w-24 h-1 bg-current -rotate-45`}></div>
								</div>
							</button>
						</div>
						<Link href={`${role === '' ? '/auth' : '/profile/' + role}`} className="flex items-center gap-4">
							<Image src={profile} alt="" className={`h-24 w-24 ${!isDarkTheme ? 'brightness-0' : ''}`} />
							<span className={`text-6xl ${!isDarkTheme ? 'text-[#313338]' : ''}`}>Профиль</span>
						</Link>
						<Link href="/" className="flex items-center gap-4">
							<Image src={info} alt="" className={`h-24 w-24 ${!isDarkTheme ? 'brightness-0' : ''}`} />
							<span className={`text-6xl ${!isDarkTheme ? 'text-[#313338]' : ''}`}>Полезная информация</span>
						</Link>
						<Link href="/" className="flex items-center gap-4">
							<Image src={checkbox} alt="" className={`h-24 w-24 ${!isDarkTheme ? 'brightness-0' : ''}`} />
							<span className={`text-6xl ${!isDarkTheme ? 'text-[#313338]' : ''}`}>Волонтёрам</span>
						</Link>
						<Link href="/" className="flex items-center gap-4">
							<Image src={groups} alt="" className={`h-24 w-24 ${!isDarkTheme ? 'brightness-0' : ''}`} />
							<span className={`text-6xl ${!isDarkTheme ? 'text-[#313338]' : ''}`}>Организаторам</span>
						</Link>
						<div className="flex items-center gap-4">
							<button onClick={toggleTheme} className="flex items-center gap-4">
								<Image src={lightMode} alt="" className={`h-24 w-24 ${!isDarkTheme ? 'brightness-0' : ''}`} />
								<span className={`text-6xl ${!isDarkTheme ? 'text-[#313338]' : ''}`}>Сменить тему</span>
							</button>
						</div>
						<Link href="/" className="flex items-center gap-4">
							<Image src={role === 'admin' ? shield : notShield} alt="" className={`h-24 w-24 ${!isDarkTheme ? 'brightness-0' : ''}`} />
							<span className={`text-6xl ${!isDarkTheme ? 'text-[#313338]' : ''}`}>Администрирование</span>
						</Link>
					</div>
				</div>
			)}
		</>
	)
}
