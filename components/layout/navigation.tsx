import { UserRound, ListFilter, Search, Upload } from 'lucide-react'
import Input from '../ui/input'
import { cn } from '@/utils/css'

export default function Navigation() {
	return (
		<nav
			className={cn(
				'bg-DT_TextboxCont',
				'w-1/2 h-10',
				'py-3 px-4.5',
				'grid grid-cols-[max-content_max-content_auto_max-content] items-center content-center gap-2',
				'justify-self-center',
				'rounded-full'
			)}>
			<UserRound height={14} />
			<Upload height={14} />
			<label className="grid grid-cols-[max-content_auto] items-stretch">
				<button className={cn('bg-DT_SearchBar', 'h-full', 'rounded-l-md')}>
					<Search className="p-1" />
				</button>
				<Input className={cn('bg-DT_SearchBar', 'rounded-r-md', 'pl-0')} />
			</label>
			<ListFilter height={14} />
		</nav>
	)
}
