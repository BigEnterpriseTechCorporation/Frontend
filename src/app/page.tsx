'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Navigation from '@/components/layout/navigation'
import BgImageContainer from '@/components/ui/bgImageContainer'
import logo from "@/assets/icons/logo.svg"
import headerBg from "@/assets/gifs/Home-header.gif"
import footerBg from '@/assets/gifs/Home-footer.gif'
import question1 from "@/assets/gifs/question-1.gif"
import question2 from '@/assets/gifs/question-2.gif'
import question3 from '@/assets/gifs/question-3.gif'
import organisation from "@/assets/gifs/organisation.png"
import volunteer from "@/assets/gifs/volunteer.png"

export default function Home() {
	return (
		<main className='bg-[#4B6449] absolute w-full -z-20'>
			<header className='pt-10 flex flex-col items-center relative h-screen'>
				<Navigation />
				<Image
					unoptimized
					src={logo}
					alt=''
					className='pt-8'
				/>
				<div>
					<h1 className='text-[16vh] text-center font-extrabold text-champagne leading-[15vh] tracking-[-0.25rem]'>
						Together
						<br /> We Can
					</h1>
					<h3 className='text-center -mt-2 text-4xl font-light text-[#F0ECDC]'>
						Вместе мы можем больше
					</h3>
				</div>
				<Link
					href={'/dashboard/'}
					className='text-[#F0ECDC] border-[#F0ECDC] border-[6px] rounded-2xl w-1/2 text-5xl bg-[rgba(50,50,50,0.5)] py-2 absolute bottom-[15vh] text-center'
				>
					Участвовать
				</Link>
				<Image
					src={headerBg}
					alt=''
					className={`absolute top-0 left-0 -z-10 h-full w-full object-cover object-center`}
				/>
			</header>
			<section
				className='flex flex-col items-center py-16'
				id='goals'
			>
				<h1 className='text-5xl mb-10'>Цели нашей платформы</h1>
				<ul className='px-20 w-full flex flex-col gap-8'>
					<li className='w-full h-[22.5rem] '>
						<BgImageContainer
							image={question1}
							className='w-full h-full shadow-[8px_6px_24px_6px_rgba(0,0,0,0.33)]'
						>
							<h2 className='text-4xl mb-5'>
								Укрепление доверия через прозрачность и безопасность
							</h2>
							<p className='text-xl'>
								Использовать алгоритмы для рекомендации мероприятий на основе предпочтений
								пользователя (экология, помощь детям, медицина), а также напоминаний и трекинга
								личных достижений (часы волонтёрства, пройденные тренинги).
							</p>
						</BgImageContainer>
					</li>
					<li className='w-full h-[22.5rem] '>
						<BgImageContainer
							image={question2}
							className='w-full h-full shadow-[8px_6px_24px_6px_rgba(0,0,0,0.33)]'
						>
							<h2 className='text-4xl mb-5'>Стимулировать долгосрочное участие</h2>
							<p className='text-xl'>
								Внедрить систему бонусов (сертификаты, партнёрские скидки) и возможность создавать
								«волонтёрские резюме». Добавить образовательные материалы (вебинары, гайды) для
								развития навыков и мотивации.
							</p>
						</BgImageContainer>
					</li>
					<li className='w-full h-[22.5rem] '>
						<BgImageContainer
							image={question3}
							className='w-full h-full shadow-[8px_6px_24px_6px_rgba(0,0,0,0.33)]'
						>
							<h2 className='text-4xl mb-5'>
								Создать удобную среду для взаимодействия НКО и волонтёров
							</h2>
							<p className='text-xl'>
								Упростить поиск и коммуникацию между организациями и добровольцами с помощью
								фильтров (геолокация, интересы, навыки), чатов и системы отзывов.
							</p>
						</BgImageContainer>
					</li>
				</ul>
			</section>
			<section className='flex flex-col items-center py-16'>
				<h1 className='text-5xl mb-10'>Наши возможности</h1>
				<ul className='px-10 w-full flex gap-8'>
					<li className='w-full h-[22.5rem] '>
						<BgImageContainer
							image={organisation}
							className='w-full h-full shadow-[8px_6px_24px_6px_rgba(0,0,0,0.33)]  bg-[rgba(0,0,0,0.2)] text-center'
						>
							<h2 className='text-5xl mb-5'>Для организаций</h2>
							<p className='text-3xl'>
								Вы можете разместить свои объявления об мероприятиях, которые увидят сотни
								волонтёров. Также вы можете нанимать их
							</p>
						</BgImageContainer>
					</li>
					<li className='w-full h-[22.5rem] '>
						<BgImageContainer
							image={volunteer}
							className='w-full h-full shadow-[8px_6px_24px_6px_rgba(0,0,0,0.33)] bg-[rgba(0,0,0,0.2)] text-center'
						>
							<h2 className='text-5xl mb-5'>Для волонтёров</h2>
							<p className='text-3xl'>
								Вы можете найти подходящее для вас событие и помочь ещё большому количеству
								нуждающихся
							</p>
						</BgImageContainer>
					</li>
				</ul>
			</section>
			<footer>
				<BgImageContainer
					image={footerBg}
					className='rounded-b-none !p-0'
					imageClassName='rounded-b-none'
				>
					<div className='px-16 pt-16 pb-32 flex justify-between'>
						<div className='flex gap-16'>
							<div>
								<h2 className='text-4xl mb-6'>Администрации</h2>
								<ul className='font-light flex flex-col gap-4'>
									<li>
										<Link href={'/dashboard'}>Профиль</Link>
									</li>
									<li>
										<Link href={'/panels/admin'}>Панель администратора</Link>
									</li>
									<li>
										<Link href={'/dashboard'}>Список волонтёров</Link>
									</li>
									<li>
										<Link href={'/dashboard'}>Список организаций</Link>
									</li>
								</ul>
							</div>
							<div>
								<h2 className='text-4xl mb-6'>Волонтёрам</h2>
								<ul className='font-light flex flex-col gap-4'>
									<li>
										<Link href={'/volunteer'}>Профиль</Link>
									</li>
									<li>
										<Link href={'/'}>Мероприятия</Link>
									</li>
									<li>
										<Link href={'/'}>Выписки</Link>
									</li>
								</ul>
							</div>
							<div>
								<h2 className='text-4xl mb-6'>Организациям</h2>
								<ul className='font-light flex flex-col gap-4'>
									<li>
										<Link href={'/'}>Профиль</Link>
									</li>
									<li>
										<Link href={'/'}>Мероприятия</Link>
									</li>
									<li>
										<Link href={'/'}>Заявки волонтёров</Link>
									</li>
									<li>
										<Link href={'/'}>Выписки</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className='border-t border-white px-12 py-2'>
						<h3 className='text-end font-light text-md'>Обезьяны с гранатами</h3>
					</div>
				</BgImageContainer>
			</footer>
		</main>
	)
}
