import { Menu } from 'lucide-react'
import { ComponentPropsWithoutRef } from 'react'

interface TaskProps extends ComponentPropsWithoutRef<'section'> {
	title: string
	description: string
	assignee: string
}

export default function Task({ title, description, assignee, ...props }: TaskProps) {
  function createShortDescription(){
    return description
			.slice(0, 200)
			.match(/[^\.!\?]+[\.!\?]+/g)
			?.map(sentence => sentence)
  }

	return (
		<section className="bg-DarkContrastBGRD px-3 py-2 rounded-xl w-full h-min-[7.5rem] grid grid-rows-[max-content_auto_max-content]">
			<div className="flex justify-between items-center">
				<h3 className="font-semibold">{title}</h3>
				<Menu className='h-4.5'/>
			</div>
			<h2 className='mb-2'>
				{createShortDescription()}
			</h2>
			<h2>{assignee}</h2>
		</section>
	)
}
