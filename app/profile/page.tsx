'use client'
import AsideContainer from '@/components/ui/asideContainer'
import useUser from '@/hooks/useUser'
import { cn } from '@/utils/css'
import Image from 'next/image'

export default function Profile() {
	const user = useUser()

	return typeof user === 'string' ? (
		user
	) : (
		<AsideContainer
			rootClassName="flex items-center justify-center"
			className={cn('w-4/5 h-3/5', 'grid grid-rows-5', '!p-0')}>
			<section className="row-span-2 p-6">
				<div className='grid grid-rows-2 gap-x-2 grid-cols-[max-content_auto]'>
					<Image
						src={`http://100.126.9.5/api/Users/${user.id}/Avatar`}
						alt=""
						width={54}
						height={54}
            className='row-span-2'
					/>
          <h1 className='text-xl font-semibold'>{user.name}</h1>
          <h2 className='text-lg'>ДОЛЖНОСТЬ ДОБАВИТЬ</h2>
				</div>
        <h2>зарегистрирован: {user.createdAt}</h2>
			</section>
			<section className="bg-DT_WTBack w-full self-stretch row-span-3 rounded-b-2xl p-6"></section>
		</AsideContainer>
	)
}
