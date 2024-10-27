'use client'
import { host } from '@/config'
import { useEffect, useState } from 'react'

export default function useUserTasks(): number[] {
	const [state, setState] = useState<number[]>([])

	useEffect(() => {
		try {

			fetch(`http://${host}/api/Users/${JSON.parse(localStorage.getItem("user")!).id}`, {
				method: 'GET',
			})
				.then(res => res.json())
				.then((data: number[]) => {
					setState(data)
				})
				.catch(error => setState(error.toString()))
		} catch (error) {
			console.error(error)
		}
	}, [])

	return state
}
