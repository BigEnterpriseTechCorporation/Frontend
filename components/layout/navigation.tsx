import { UserRound, ListFilter, Search, Upload } from 'lucide-react'
import Input from '../ui/input'
import { cn } from '@/utils/css'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Filters from "../ui/filters";
import { X } from 'lucide-react'


export default function Navigation() {
	// when the user clicks on the filter open filters.tsx
    const [isFiltersOpen, setIsFiltersOpen] = useState(false)


    const toggleFilters = () => {
        setIsFiltersOpen((prev: boolean) => !prev)
    }

	const handleKeyDown = (event: KeyboardEvent) => {
		if (event.key === 'Escape') {
			setIsFiltersOpen(false);
		}
	};

	useEffect(() => {
		// Добавляем обработчик события нажатия клавиш
		window.addEventListener('keydown', handleKeyDown);
		return () => {
		  // Убираем обработчик при размонтировании компонента
			window.removeEventListener('keydown', handleKeyDown);
		};
	}, []);
	
	return (
		<>
			<div className={cn({'block': isFiltersOpen, 'hidden': !isFiltersOpen},  'relative')}>
				<button
					className="absolute z-30 right-0 -top-5"
					type="button"
					onClick={() => setIsFiltersOpen(false)}>
					<X />
				</button>
				<Filters />
			</div>
			<nav
				className={cn(
					'bg-DT_TextboxCont',
					'lg:w-1/2 w-full h-10',
					'py-3 px-4.5',
					'grid grid-cols-[max-content_max-content_auto_max-content] items-center content-center gap-2',
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
				<button onClick={toggleFilters}>
					<ListFilter height={14} />
				</button>
				
			</nav>
		</>
	)
}
