'use client'
import apanel from '@/assets/gifs/apanel.gif'
import BgImageContainer from '@/components/ui/bgImageContainer'
import ItemPanel from '@/components/layout/itemPanel'
import Navigation from '@/components/layout/navigation'
import React from 'react'
import admin from '@/assets/icons/admin.svg'
import Image from 'next/image'
import { useTheme } from '@/context/ThemeContext'

export default function AdminPanel() {
	const { isDarkTheme } = useTheme()

	return (
		<BgImageContainer
			image={apanel}
			className='rounded-none bg-transparent p-5 h-screen'
			imageClassName='rounded-none bg-[none]'
		>
			<div className='max-h-screen w-full h-full grid justify-stretch items-stretch overflow-hidden'>
				<div
					className={`${
						isDarkTheme ? 'bg-[#43434375] border-[#3E4147]' : 'bg-[#6B6B6B75] border-[#D8DBDF]'
					} rounded-3xl border-2 pb-12 pt-6 grid gap-4 grid-rows-[fit-content_fit-content_auto] justify-center`}
				>
					<Navigation />
					<div className='flex justify-center items-center gap-2'>
						<p className='text-3xl'>Панель администратора</p>
						<Image
							src={admin}
							alt='admin.svg'
							width={30}
							height={30}
						/>
					</div>
					<div className='grid grid-cols-3 pt-0 gap-4'>
						<ItemPanel
							title='Организаторы'
							organizers={[
								{
									title: 'Внедрения Я.Метрики',
									description: 'Краткое описание События',
									name: 'Фамилия И.',
									nickname: 'Ник',
								},
								{
									title: 'Внедрения Я.Метрики',
									description: 'Краткое описание События',
									name: 'Фамилия И.',
									nickname: 'Ник',
								},
								{
									title: 'Внедрения Я.Метрики',
									description: 'Краткое описание События',
									name: 'Фамилия И.',
									nickname: 'Ник',
								},
								{
									title: 'Внедрения Я.Метрики',
									description: 'Краткое описание События',
									name: 'Фамилия И.',
									nickname: 'Ник',
								},
							]}
						/>
						<ItemPanel
							title='На согласовании'
							organizers={[
								{
									title: 'Внедрения Я.Метрики',
									description: 'Краткое описание События',
									name: 'Фамилия И.',
									nickname: 'Ник',
								},
								{
									title: 'Внедрения Я.Метрики',
									description: 'Краткое описание События',
									name: 'Фамилия И.',
									nickname: 'Ник',
								},
							]}
						/>
						<ItemPanel
							title='Волонтёры'
							organizers={[
								{
									title: 'Внедрения Я.Метрики',
									description: 'Краткое описание События',
									name: 'Фамилия И.',
									nickname: 'Ник',
								},
								{
									title: 'Внедрения Я.Метрики',
									description: 'Краткое описание События',
									name: 'Фамилия И.',
									nickname: 'Ник',
								},
							]}
						/>
						<ItemPanel
							title='Запланировано'
							organizers={[
								{
									title: 'Внедрения Я.Метрики',
									description: 'Краткое описание События',
									name: 'Фамилия И.',
									nickname: 'Ник',
								},
								{
									title: 'Внедрения Я.Метрики',
									description: 'Краткое описание События',
									name: 'Фамилия И.',
									nickname: 'Ник',
								},
							]}
						/>
						<ItemPanel
							title='Активно'
							organizers={[
								{
									title: 'Внедрения Я.Метрики',
									description: 'Краткое описание События',
									name: 'Фамилия И.',
									nickname: 'Ник',
								},
								{
									title: 'Внедрения Я.Метрики',
									description: 'Краткое описание События',
									name: 'Фамилия И.',
									nickname: 'Ник',
								},
							]}
						/>
						<ItemPanel
							title='Выполнено'
							organizers={[
								{
									title: 'Внедрения Я.Метрики',
									description: 'Краткое описание События',
									name: 'Фамилия И.',
									nickname: 'Ник',
								},
								{
									title: 'Внедрения Я.Метрики',
									description: 'Краткое описание События',
									name: 'Фамилия И.',
									nickname: 'Ник',
								},
							]}
						/>
					</div>
				</div>
			</div>
		</BgImageContainer>
	)
}
