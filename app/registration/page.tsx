'use client'
import { error } from 'console'
import Link from 'next/link'
import { FormEvent } from 'react'
import PasswordValidator from 'password-validator'
import Input from '@/components/ui/input'
import { cn } from '@/utils/css'
import { host } from '@/config'
import { cn } from '@/utils/css'

export default function Registration() {
	async function onSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault()
		try {
			const formData = new FormData(event.currentTarget)
			const schema = new PasswordValidator()

			schema
				.is()
				.min(8) // Minimum length 8
				.is()
				.max(20) // Maximum length 20
				.has()
				.uppercase() // Must have uppercase letters
				.has()
				.lowercase() // Must have lowercase letters
				.has()
				.digits(1) // Must have at least 2 digits
				.has()
				.not()
				.spaces()

			const login = formData.get('login')
			const name = formData.get('username')
			const password = formData.get('passwordFirst')
			const passwordSecond = formData.get('passwordSecond')

			if (!schema.validate(password!.toString()) || password !== passwordSecond) {
				throw new Error('Invalid password')
			}

			const response = await fetch(`http://${host}/api/Account/register`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json; charset=utf-8',
				},
				body: JSON.stringify({ login, password, name }),
			})

			// Handle response if necessary
			const data = await response.json()
			localStorage.setItem('token', data.token)
			console.log(data)
		} catch (error) {
			// Handle error if necessary
			console.error(error)
		}
	}

	return (
		<main className={cn('flex justify-center items-center', 'px-4', 'h-screen')}>
			<form
				className="text-center w-72.25"
				onSubmit={onSubmit}>
				<div
					role="group"
					className="rounded-t-2.5xl px-4.5 pt-4.5 bg-DT_TextboxEText pb-3">
					<h1 className="text-lg font-semibold">Создать учётную запись</h1>
					<label className="text-start mb-1">
						<h2 className="text-DarkTextMissStyle text-sm ml-1 pt-2">ФИО</h2>
						<Input
							className="w-full"
							type="text"
							name="username"
						/>
					</label>
					<label className="text-start mb-1">
						<h2 className="text-DarkTextMissStyle text-sm ml-1 pt-2">Логин</h2>
						<Input
							className="w-full"
							type="text"
							name="login"
						/>
					</label>
					<label className="text-start">
						<h2 className="text-DarkTextMissStyle text-sm ml-1 pt-1">Пароль</h2>
						<Input
							className="w-full"
							type="password"
							name="passwordFirst"
						/>
					</label>
					<label className="text-start">
						<h2 className="text-DarkTextMissStyle text-sm ml-1 pt-1">Повторить пароль</h2>
						<Input
							className="w-full"
							type="password"
							name="passwordSecond"
						/>
					</label>
					<h3 className="text-xs pt-2 text-DarkTextMissStyle">
						<Link
							href={'/'}
							className="text-Blue">
							Уже зарегистрированы?
						</Link>
					</h3>
				</div>

				<button
					type="submit"
					className="bg-[rgb(45,_45,_45)] w-full text-Blue rounded-b-2.5xl py-2">
					Продолжить
				</button>
			</form>
		</main>
	)
}
