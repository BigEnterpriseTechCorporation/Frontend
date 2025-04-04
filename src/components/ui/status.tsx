import { status } from "@/types";

export default function Status({status}:{status:status}){
  const data = {
    draft:{
      color:"bg-silver",
      name: "в черновике"
    },
    cancelled:{
      color:"bg-red-500",
      name:"отменено"
    },
    closed:{
      color:"bg-green-400",
      name:"завершено"
    }, 
    accepted:{
      color:"bg-yellow-300",
      name:"принято"
    }
  }

  return (
		<div className='flex items-center'>
			<div className={`h-3 w-3 rounded-full ${data[status].color} mr-2`}></div>
			<h3 className='text-sm capitalize font-medium'>{data[status].name}</h3>
		</div>
	)
}