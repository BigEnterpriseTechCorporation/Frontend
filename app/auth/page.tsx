'use client'
import Input from '@/components/ui/input'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FormEvent } from 'react'

export default function Auth() {
	async function onSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault()
		try {
			const formData = new FormData(event.currentTarget)
			const login = formData.get('login')
			const password = formData.get('password')
			const response = await fetch(`http://100.126.9.5/api/Account/token`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json; charset=utf-8',
				},
				body: JSON.stringify({login,password}),
			})
			//`{"login":"${formData.get('login')}","password":"${formData.get('password')}"}`

			// Handle response if necessary
			const data = await response.json()
			console.log(data)
		} catch (error) {
			// Handle error if necessary
			console.error(error)
		}
	}

	return (
		<main className="flex justify-center items-center h-screen">
			<form
				className="text-center w-72.25"
				onSubmit={onSubmit}>
				<div
					role="group"
					className="rounded-t-2.5xl px-4.5 pt-4.5 bg-DarkBGRD pb-3">
					<h1 className="text-lg font-semibold">С возвращением!</h1>
					<h2 className="text-sm">Мы так рады видеть вас снова!</h2>
					<label
						className="text-start mb-1"
						htmlFor="login">
						<h2 className="text-DarkTextMissStyle text-sm ml-1 pt-2">Логин</h2>
						<Input
							className="w-full"
							type="text"
							name="login"
						/>
					</label>
					<label
						className="text-start"
						htmlFor="password">
						<h2 className="text-DarkTextMissStyle text-sm ml-1 pt-1">Пароль</h2>
						<Input
							className="w-full"
							type="password"
							name="password"
						/>
					</label>
					<h3 className="text-xs pt-2 text-DarkTextMissStyle">
						Нужна учётная запись?{' '}
						<Link
							href={'/'}
							className="text-Blue">
							Зарегистрироваться
						</Link>
					</h3>
				</div>

				<button
					type="submit"
					className="bg-[rgb(45,_45,_45)] w-full text-Blue rounded-b-2.5xl py-2">
					Вход
				</button>
			</form>
		</main>
	)
}
