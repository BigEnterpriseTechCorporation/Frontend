'use client'
import { UUID } from 'crypto'
import { useEffect, useState } from 'react'

export interface user {
	id: UUID
	name: string
	login: string
	boards: number[]
	createdAt: string
}

export default function useUser(): user | string {
	const [state, setState] = useState<user|string>({ id: 'null-null-null-null-null', name: '', login:"",boards:[],createdAt:"-1" })

	useEffect(() => {
		fetch(`http://100.126.9.5/api/Account/self`, {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${localStorage.getItem('token')}`,
			},
		})
			.then(res => res.json())
			.then((data: user) => {setState(data);localStorage.setItem("user",JSON.stringify(data))})
			.catch(error => setState(localStorage.getItem("user")? JSON.parse(localStorage.getItem("user")!) : error.toString()))
	}, [])

	return state
}
