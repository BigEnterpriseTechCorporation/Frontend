import EventCard, { EventCardProps } from '../event'

const events: EventCardProps[] = [
	{
		name: 'Tech Conference 2023',
		creationDate: '2023-11-15',
		status: 'accepted',
		description:
			'A global gathering of tech leaders, developers, and innovators discussing AI, blockchain, and future technologies.',
		creatorLogin: 'TechGlobal Inc.',
	},
	{
		name: 'Annual Charity Gala',
		creationDate: '2023-12-05',
		status: 'draft',
		description:
			"An elegant evening of fundraising for children's education, featuring live music, auctions, and celebrity guests.",
		creatorLogin: 'Hope Foundation',
	},
	{
		name: 'Summer Music Festival',
		creationDate: '2023-08-20',
		status: 'closed',
		description:
			'Three days of live performances from top artists across rock, pop, and electronic music genres.',
		creatorLogin: 'SoundWave Events',
	},
	{
		name: 'Startup Pitch Competition',
		creationDate: '2023-09-30',
		status: 'cancelled',
		description:
			'Emerging startups present their ideas to a panel of investors for a chance to win funding and mentorship.',
		creatorLogin: 'VentureBoost',
	},
	{
		name: 'Winter Art Exhibition',
		creationDate: '2024-01-15',
		status: 'draft',
		description:
			'A showcase of contemporary art from rising talents, featuring paintings, sculptures, and digital installations.',
		creatorLogin: 'Modern Art Collective',
	},
	{
		name: 'Marathon Run',
		creationDate: '2023-10-08',
		status: 'accepted',
		description:
			'A city-wide marathon promoting health and fitness, with routes for beginners and professional runners.',
		creatorLogin: 'Urban Runners Club',
	},
	{
		name: 'Food & Wine Tasting',
		creationDate: '2023-07-22',
		status: 'closed',
		description:
			'A culinary experience featuring gourmet dishes paired with fine wines from renowned vineyards.',
		creatorLogin: 'Gourmet Society',
	},
	{
		name: 'Blockchain Summit',
		creationDate: '2023-11-28',
		status: 'draft',
		description:
			'Experts and enthusiasts discuss the future of decentralized finance, NFTs, and Web3 technologies.',
		creatorLogin: 'Crypto Nexus',
	},
	{
		name: 'Local Farmers Market',
		creationDate: '2023-06-10',
		status: 'cancelled',
		description:
			'A weekly market offering fresh organic produce, handmade crafts, and local delicacies.',
		creatorLogin: 'Green Valley Co-op',
	},
	{
		name: 'Science Fair for Kids',
		creationDate: '2023-05-17',
		status: 'accepted',
		description:
			'An interactive event where young minds present science projects, participate in experiments, and win prizes.',
		creatorLogin: 'Young Innovators Program',
	},
]

export default function Events() {
	return (
		<div className='h-full overflow-y-hidden max-h-full no-scrollbar'>
			<h4 className='mb-6'>
				Период от{' '}
				<input
					type='date'
					name=''
					id=''
          className='bg-gunmetal px-1'
				/>{' '}
				до{' '}
				<input
					type='date'
					name=''
					id=''
          className='bg-gunmetal px-1'
				/>{' '}
			</h4>
			<div className='flex flex-col px-12 gap-10 overflow-y-scroll scrollbar h-full'>
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
