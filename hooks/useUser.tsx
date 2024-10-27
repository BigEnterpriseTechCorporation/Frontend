'use client'
import { host } from '@/config'
import { UUID } from 'crypto'
import { useEffect, useState } from 'react'

export interface user {
	id: UUID
	name: string
	login: string
	boards: number[]
	createdAt: string
	jobTitle: string
}

export default function useUser(): user | string {
	const [state, setState] = useState<user | string>({ id: 'null-null-null-null-null', name: '', login: '', boards: [], createdAt: '-1',jobTitle:"" })

	useEffect(() => {
		try {
			if(localStorage.getItem('token') == undefined){
				throw new Error("no token")
			}

			fetch(`http://${host}/api/Account/self`, {
				method: 'GET',
				headers: {
					Authorization: `Bearer ${localStorage.getItem('token')}`,
				},
			})
				.then(res => res.json())
				.then((data: user) => {
					setState(data)
					localStorage.setItem('user', JSON.stringify(data))
				})
				.catch(error => setState(error.toString()))
		} catch(error) {
			console.error(error)
		}

		
	}, [])

	return state
}
