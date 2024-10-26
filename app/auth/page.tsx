'use client'
import Input from '@/components/ui/input'
import Label from '@/components/ui/label'
import { cn } from '@/utils/css'
import Link from 'next/link'
import { FormEvent } from 'react'

export default function Auth() {
	@@ -17,7 +16,7 @@ export default function Auth() {
				headers: {
					'Content-Type': 'application/json; charset=utf-8',
				},
				body: JSON.stringify({ login, password }),
			})
			//`{"login":"${formData.get('login')}","password":"${formData.get('password')}"}`

	@@ -31,26 +30,36 @@ export default function Auth() {
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
