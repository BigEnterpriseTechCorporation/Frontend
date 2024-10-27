'use client'
import Input from '@/components/ui/input'
import Label from '@/components/ui/label'
import { host } from '@/config'
import { cn } from '@/utils/css'
import Link from 'next/link'
import { FormEvent } from 'react'

export default function Auth() {
	async function onSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault()
		try {
			const formData = new FormData(event.currentTarget)
			const login = formData.get('login')
			const password = formData.get('password')
			const response = await fetch(`http://${host}/api/Account/login`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json; charset=utf-8',
				},
				body: JSON.stringify({ login, password }),
			})
			//`{"login":"${formData.get('login')}","password":"${formData.get('password')}"}`

			// Handle response if necessary
			const data = await response.json()
			localStorage.clear()
			localStorage.setItem('token', data.token)

			console.log(data)
		} catch (error) {
			// Handle error if necessary
			console.error(error)
		}
	}

	return (
		<main className={cn('flex justify-center items-center', 'h-screen')}>
			<form
				className={cn('text-center', 'w-72.25')}
				onSubmit={onSubmit}>
				<div
					role="group"
					className={cn('rounded-t-2.5xl', 'px-4.5 pt-4.5 pb-3', 'bg-DT_TextboxEText')}>
					<h1 className="text-lg font-semibold">С возвращением!</h1>
					<h2 className="text-sm">Мы так рады видеть вас снова!</h2>
					<Label
						name="login"
						type="text"
						placeholder="Логин"
					/>
					<Label
						name="password"
						type="password"
						placeholder="Пароль"
					/>
					<h3 className={cn('text-xs text-DT_Login', 'pt-2')}>
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
					className={cn('bg-[rgb(45,_45,_45)] text-Blue', 'rounded-b-2.5xl', 'w-full py-2')}>
					Вход
				</button>
			</form>
		</main>
	)
}
