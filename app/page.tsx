import Navigation from "@/components/layout/navigation";
import { ListFilter, Search, UserRound } from "lucide-react";
import FullStack from "@/components/ui/fulltask";

export default function Home() {
  return (
		<div className="flex justify-center items-center h-screen px-6 py-7">
			<section className="bg-DarkBGRD w-full h-full flex flex-col items-center px-11 py-8">
				<Navigation/>
				<main className='w-4/5 h-1/2'>
					<FullStack />
				</main>
			</section>
		</div>
	)
}