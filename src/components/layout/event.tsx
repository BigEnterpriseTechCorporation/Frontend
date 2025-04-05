"use client"
import { status } from "@/types"
import Status from "../ui/status"
import arrowUp from "@/assets/icons/arrow-up.svg"
import Image from "next/image"
import { useState } from "react"

export interface EventCardProps{
  name:string,
  creationDate: string
  status: status
  description: string
  creatorLogin: string
}

export default function EventCard({name,creationDate,status,description,creatorLogin}:EventCardProps){
  const [isExpanded, toggleExpansion] = useState(false)

  return (
		<div className='w-full'>
			<div
				className={`${
					!isExpanded ? 'rounded-b-2xl' : 'rounded-b-0'
				} flex justify-between bg-gunmetal py-7 px-4 rounded-t-2xl`}
			>
				<div className='flex items-center'>
					<h1 className='mr-5'>{name}</h1>
					<h2>{creationDate}</h2>
				</div>
				<div className='flex items-center'>
					<Status status={status} />
					<button
						className={`${!isExpanded ? 'rotate-180' : 'rotate-0'} ml-20 duration-300 ease-in-out`}
						onClick={() => toggleExpansion((prev) => !prev)}
					>
						<Image
							src={arrowUp}
							alt=''
						/>
					</button>
				</div>
			</div>
			<div
				className={`${
					isExpanded ? 'h-44' : 'h-0'
				} bg-ebony overflow-y-hidden duration-300 ease-in-out px-4 relative rounded-b-2xl`}
			>
				<p className='pt-4'>{description}</p>
				<h2 className='text-end absolute bottom-4 right-5'>{creatorLogin}</h2>
			</div>
		</div>
	)
}