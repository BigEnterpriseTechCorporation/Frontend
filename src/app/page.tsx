'use client'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Home() {
	const [role, setRole] = useState('')
	const router = useRouter()

	useEffect(() => {
		setRole(localStorage.getItem('role') || '')
	}, [])

	if (role === '') {
		router.push('/auth')
	}
}
