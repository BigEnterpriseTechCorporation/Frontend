import Input from '@/components/ui/input'
//import Image from 'next/image'

export default function Support() {
	return (
		<div className='flex flex-col items-center h-full'>
			<h2 className='text-4xl'>Поддержка</h2>
			<h3 className='text-2xl mb-16'>Ответим на возникшие вопросы</h3>
			<div className='grid grid-cols-3 grid-rows-[max-content_auto] justify-stretch items-stretch w-full h-full gap-y-4 gap-x-10 mb-12'>
				<label htmlFor=''>
					<h2>Фамилия</h2>
					<Input className='w-full' />
				</label>
				<label htmlFor=''>
					<h2>Имя</h2>
					<Input className='w-full' />
				</label>
				<label htmlFor=''>
					<h2>E-mail</h2>
					<Input className='w-full' />
				</label>
				<label
					htmlFor=''
					className='col-span-3 row-start-2'
				>
					<h2>Сообщение</h2>
					<textarea className='bg-nero w-full h-full p-4'/>
				</label>
			</div>
			<button className='w-full bg-nero h-24 rounded-md'>Отправить</button>
		</div>
	)
}
