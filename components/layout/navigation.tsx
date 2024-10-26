"use client"
import { UserRound, ListFilter, Search, Upload } from "lucide-react";
import { useState } from "react";
import Input from "../ui/input";

export default function Navigation(){
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  const toggleSearch = () => {
    setIsSearchOpen(prev => !prev)
  }

  return (
		<nav className="bg-DT_TextboxCont w-1/2 h-10
		 py-3 px-4.5 flex justify-between items-center justify-self-center rounded-full">
			<div
				role="group"
				className="flex gap-2 items-center">
				<UserRound height={14}/>
				<Upload height={14}/>
			</div>
			<div
				role="group"
				className="flex gap-2 items-center">
				<Input className={isSearchOpen ? 'w-80' : 'w-0 !p-0'} />

				<button onClick={toggleSearch}>
					<Search height={14}/>
				</button>
				<ListFilter height={14}/>
			</div>
		</nav>
	)
}