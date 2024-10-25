import Link from "next/link";

export default function Registration(){
  return (
		<main className="flex justify-center items-center h-screen">
			<form className="text-center w-72.25">
				<div
					role="group"
					className="rounded-t-2.5xl px-4.5 pt-4.5 bg-DarkBGRD pb-3">
					<h1 className="text-lg font-semibold">Создать учётную запись</h1>
					<label className="text-start mb-1">
						<h2 className="text-DarkTextMissStyle text-sm ml-1 pt-2">ФИО</h2>
						<input
							className="w-full bg-DarkConrtastBGRD rounded-xs h-7 px-2"
							type="text"
						/>
					</label>
					<label className="text-start mb-1">
						<h2 className="text-DarkTextMissStyle text-sm ml-1 pt-2">Логин</h2>
						<input
							className="w-full bg-DarkConrtastBGRD rounded-xs h-7 px-2"
							type="text"
						/>
					</label>
					<label className="text-start">
						<h2 className="text-DarkTextMissStyle text-sm ml-1 pt-1">Пароль</h2>
						<input
							className="w-full bg-DarkConrtastBGRD rounded-xs h-7 px-2"
							type="password"
						/>
					</label>
					<label className="text-start">
						<h2 className="text-DarkTextMissStyle text-sm ml-1 pt-1">Повторить пароль</h2>
						<input
							className="w-full bg-DarkConrtastBGRD rounded-xs h-7 px-2"
							type="password"
						/>
					</label>
					<h3 className="text-xs pt-2 text-DarkTextMissStyle">
						<Link
							href={'/'}
							className="text-Blue">
							Уже зарегистрированы?
						</Link>
					</h3>
				</div>

				<button
					type="submit"
					className="bg-[rgb(45,_45,_45)] w-full text-Blue rounded-b-2.5xl py-2">
					Продолжить
				</button>
			</form>
		</main>
	)
}