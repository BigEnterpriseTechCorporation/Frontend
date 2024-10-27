import { UserRound, ListFilter, Search, Upload, Sun } from 'lucide-react'
import Input from '../ui/input'
import { cn } from '@/utils/css'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Navigation() {
	const [theme, setTheme] = useState('theme-dark')

	useEffect(() => {
		if(theme == "theme-light"){
			document.documentElement.classList.add("theme-light")
		} else {
			document.documentElement.classList.remove("theme-light")
		}
	})

	const handleThemeSwitch = () => {
		setTheme(theme === "theme-light" ? "theme-dark" : "theme-light")
	}
	return (
		<nav
			className={cn(
				'bg-DT_TextboxCont',
				'lg:w-1/2 w-full h-10',
				'py-3 px-4.5',
				'grid grid-cols-[max-content_max-content_auto_max-content_max-content] items-center content-center gap-2',
				'justify-self-center',
				'rounded-full'
			)}>
			<Link href={"/profile"}>
				<UserRound height={14} />
			</Link>
			
			<Upload height={14} />
			<label className="grid grid-cols-[max-content_auto] items-stretch">
				<button className={cn('bg-DT_SearchBar', 'h-full', 'rounded-l-md')}>
					<Search className="p-1" />
				</button>
				<Input className={cn('bg-DT_SearchBar', '!rounded-l-none', 'pl-0')} />
			</label>
			<ListFilter height={14} />
			<button onClick={handleThemeSwitch}>
				<Sun height={14}/>
			</button>
		</nav>
	)
}
