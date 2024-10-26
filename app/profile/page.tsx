'use client'
import AsideContainer from '@/components/ui/asideContainer'
import useUser from "@/hooks/useUser"
import { cn } from '@/utils/css'

export default function Profile() {
	const user = useUser()

	return typeof user === 'string' ? (
		user
	) : (
		<AsideContainer
			rootClassName="flex items-center justify-center"
			className={cn('w-4/5 h-3/5', 'grid grid-rows-5','!p-0')}>
			<section className="row-span-2 p-6">{user.id}</section>
			<section className="bg-DT_WTBack w-full self-stretch row-span-3 rounded-b-2xl p-6"></section>
		</AsideContainer>
	)
}
