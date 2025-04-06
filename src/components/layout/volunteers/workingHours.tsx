"use client"

import { status } from '@/types'
import EventCard from '../event'
import { useTheme } from '@/context/ThemeContext'

interface extendedEvent {
  name: string
  creationDate: string
  status: status
  description: string
  creatorLogin: string
  workingHours: number
}

const events: extendedEvent[] = [
	{
		name: 'Tech Conference 2023',
		creationDate: '2023-11-15',
		status: 'accepted',
		description:
			'A global gathering of tech leaders, developers, and innovators discussing AI, blockchain, and future technologies.',
		creatorLogin: 'techglobal_admin',
		workingHours: 10,
	},
	{
		name: 'Annual Charity Gala',
		creationDate: '2023-12-05',
		status: 'draft',
		description:
			"An elegant evening of fundraising for children's education, featuring live music, auctions, and celebrity guests.",
		creatorLogin: 'hope_foundation',
		workingHours: 5,
	},
	{
		name: 'Summer Music Festival',
		creationDate: '2023-08-20',
		status: 'closed',
		description:
			'Three days of live performances from top artists across rock, pop, and electronic music genres.',
		creatorLogin: 'soundwave_events',
		workingHours: 12,
	},
	{
		name: 'Startup Pitch Competition',
		creationDate: '2023-09-30',
		status: 'cancelled',
		description:
			'Emerging startups present their ideas to a panel of investors for a chance to win funding and mentorship.',
		creatorLogin: 'ventureboost_official',
		workingHours: 6,
	},
	
]

export default function WorkingHours() {
	const { isDarkTheme } = useTheme()
	
	return (
		<div className='text-center overflow-y-hidden max-h-screen h-full'>
			<h2 className='text-2xl'>Отработанные часы</h2>
			<h3 className='text-md mb-[2.5vh]'>Тут вы можете узнать сколько часов вы отработали</h3>
			<div className={`${isDarkTheme ? 'bg-gunmetal text-white' : 'bg-[#E3E5E8] border-[#D2D5DA] text-[#313338]'} flex gap-12 justify-center text-base py-[2vh] rounded-2xl mb-6 w-full`}>
				<h2>
					Всего отработано часов: {events.reduce((partialSum, a) => partialSum + a.workingHours, 0)}
				</h2>
				<h2>Всего участий в событиях: {events.length} </h2>
			</div>
			<div className='flex flex-col px-12 gap-[3vh] h-full overflow-y-scroll scrollbar'>
				{events.map((event, index) => {
					return (
						<EventCard
							key={index + 'eventIndex'}
							{...event}
						/>
					)
				})}
			</div>
		</div>
	)
}
