import { Menu, Pencil } from 'lucide-react'
import Link from 'next/link'
import Comment from './comment'

export default function FullTask(){
    return (
        <div className='flex justify-between flex-col  h-full '>
            <header className='flex justify-between items-center h-8 px-5 py-4'>
                <p>Имя таска</p>
                <div className='flex'>
                    <Link
                        href={'/'}>
                        <Pencil />
                    </Link>
                    <Link
                        href={'/'} className='ml-5'>
                        <Menu className='w-full'/>
                    </Link>
                </div>
            </header>
            <main className='flex justify-between flex-col px-5 py-4 h-full'>
                <p>lorem*1023</p>
                <p>Фамилия И.О. </p>
            </main>
            <footer className='flex bg-DarkContrastBGRD rounded-b-2xl'>
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />

                <button>+ Добавить комментарий</button>
            </footer>
        </div>
    )
}