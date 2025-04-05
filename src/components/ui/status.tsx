"use client"
import { status } from "@/types";
import { useTheme } from '@/context/ThemeContext'

export default function Status({status}:{status:status}){
  const { isDarkTheme } = useTheme()
  
  const data = {
    draft:{
      color: isDarkTheme ? "bg-silver" : "bg-[#D8DBDF]",
      name: "в черновике"
    },
    cancelled:{
      color: isDarkTheme ? "bg-red-500" : "bg-red-400",
      name:"отменено"
    },
    closed:{
      color: isDarkTheme ? "bg-green-400" : "bg-green-500",
      name:"завершено"
    }, 
    accepted:{
      color: isDarkTheme ? "bg-yellow-300" : "bg-yellow-400",
      name:"принято"
    }
  }

  return (
		<div className='flex items-center'>
			<div className={`h-3 w-3 rounded-full ${data[status].color} mr-2`}></div>
			<h3 className={`text-sm capitalize font-medium ${isDarkTheme ? 'text-white' : 'text-[#313338]'}`}>{data[status].name}</h3>
		</div>
	)
}