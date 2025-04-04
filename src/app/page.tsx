'use client'
import EventCard from '@/components/layout/event'
//import { useRouter } from 'next/navigation'
//import { useEffect, useState } from 'react'

export default function Home() {
	return (
		<div>
			<EventCard
				name='test'
				creationDate='11.09.2011'
				status='accepted'
				description='Описание события описание события описание события описание события описание события описание события описание события описание события описание события описание события описание события описание события описание события описание события описание события описание события описание события описание события описание события.

Описание события описание события описание события описание события описание события описание события описание события описание события описание события описание события описание события описание события.'
				creatorLogin='huesos'
			/>
		</div>
	)

	/*const [role, setRole] = useState('')
	const router = useRouter()

	useEffect(() => {
		setRole(localStorage.getItem('role') || '')
	}, [])

	if (role === '') {
		router.push('/logIn')
	}*/
}
