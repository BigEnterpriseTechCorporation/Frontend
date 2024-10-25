import Navigation from "@/components/layout/navigation";
import { ListFilter, Search, UserRound } from "lucide-react";

export default function Home() {
  return (
		<div className="flex justify-center items-center h-screen px-6 py-7">
			<section className="bg-DarkBGRD w-full h-full flex flex-col items-center px-11 py-8">
				<Navigation/>
				<main></main>
			</section>
		</div>
	)
}