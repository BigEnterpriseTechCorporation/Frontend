'use client'
import { host } from '@/config'
import { useEffect, useState } from 'react'

interface state {
	result: number[]
	id: number
	exception: null
	status: number
	isCanceled: boolean
	isCompleted: true
	isCompletedSuccessfully: boolean
	creationOptions: number
	asyncState: null
	isFaulted: boolean
}

export default function useUserTasks(): number[] {
	const [state, setState] = useState<number[]>([])

	useEffect(() => {
		try {
			fetch(`http://${host}/api/Account/tasks`, {
				method: 'GET',
				headers: {
					Authorization: `Bearer ${localStorage.getItem('token')}`,
				},
			})
				.then(res => res.json())
				.then((data: state) => {
					setState(data.result)
				})
				.catch(error => setState(error.toString()))
		} catch (error) {
			console.error(error)
		}
	}, [])

	return state
}
