'use client'
import Link from 'next/link'
import { FormEvent } from 'react'
import PasswordValidator from 'password-validator'
import { cn } from "@/utils/css"
import Label from '@/components/ui/label'

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

			if(!schema.validate(password!.toString())){
				console.error(false)
			}

			const response = await fetch(`http://100.126.9.5/api/Account/register`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json; charset=utf-8',
				},
				body: JSON.stringify({ login, password, name }),
			})

			// Handle response if necessary
			const data = await response.json()
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
					className={cn('rounded-t-2.5xl', 'bg-DT_TextboxEText', 'pb-3 px-4.5 pt-4.5')}>
					<h1 className={cn('text-lg', 'font-semibold')}>Создать учётную запись</h1>

					<Label
						type="text"
						name="username"
						placeholder="ФИО"
					/>
					<Label
						type="text"
						name="login"
						placeholder="Логин"
					/>
					<Label
						type="password"
						name="password"
						placeholder="Пароль"
					/>
					<Label
						type="password"
						name="passwordSecond"
						placeholder="Повторить пароль"
					/>

					<h3 className="text-xs pt-2 text-DT_Login">
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