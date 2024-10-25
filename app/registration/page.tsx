"use client"
import Link from "next/link";
import { FormEvent } from "react";

export default function Registration(){

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
  	event.preventDefault()
  	try {
  		const formData = new FormData(event.currentTarget)
  		const response = await fetch(`http://100.126.9.5/api/Account/register`, {
  			method: 'POST',
  			headers: {
  				'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
  			},
  			body: `login=${formData.get('login')}&password=${formData.get('password')}`,
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
		<main className="flex justify-center items-center h-screen">
			<form className="text-center w-72.25">
				<div
					role="group"
					className="rounded-t-2.5xl px-4.5 pt-4.5 bg-DarkBGRD pb-3">
					<h1 className="text-lg font-semibold">Создать учётную запись</h1>
					<label className="text-start mb-1">
						<h2 className="text-DarkTextMissStyle text-sm ml-1 pt-2">ФИО</h2>
						<input
							className="w-full bg-DarkConrtastBGRD rounded-xs h-7 px-2"
							type="text"
						/>
					</label>
					<label className="text-start mb-1">
						<h2 className="text-DarkTextMissStyle text-sm ml-1 pt-2">Логин</h2>
						<input
							className="w-full bg-DarkConrtastBGRD rounded-xs h-7 px-2"
							type="text"
						/>
					</label>
					<label className="text-start">
						<h2 className="text-DarkTextMissStyle text-sm ml-1 pt-1">Пароль</h2>
						<input
							className="w-full bg-DarkConrtastBGRD rounded-xs h-7 px-2"
							type="password"
						/>
					</label>
					<label className="text-start">
						<h2 className="text-DarkTextMissStyle text-sm ml-1 pt-1">Повторить пароль</h2>
						<input
							className="w-full bg-DarkConrtastBGRD rounded-xs h-7 px-2"
							type="password"
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