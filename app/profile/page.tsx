'use client'
import AsideContainer from '@/components/ui/asideContainer'
import useUser from '@/hooks/useUser'

export default function Profile() {
	const user = useUser()

	return typeof user === 'string' ? (
		user
	) : (
		<AsideContainer className={("w-4/5 h-3/5")}>
			<section></section>
			<section></section>
		</AsideContainer>
	)
}
