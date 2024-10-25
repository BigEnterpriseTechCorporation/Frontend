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
		<nav className="bg-DarkTextboxBGRD w-1/2 py-3 px-4.5 flex justify-between items-center justify-self-center rounded-full">
			<div
				role="group"
				className="flex gap-2">
				<UserRound />
				<Upload />
			</div>
			<div
				role="group"
				className="flex gap-2">
				<Input className={isSearchOpen ? 'w-80' : 'w-0 !p-0'} />

				<button onClick={toggleSearch}>
					<Search />
				</button>
				<ListFilter />
			</div>
		</nav>
	)
}