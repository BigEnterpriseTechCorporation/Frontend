import { Menu, Pencil } from 'lucide-react'
import Link from 'next/link'
import Comment from './comment'

export default function FullStack(){
    return (
        <div>
            <header className='flex justify-between'>
                <p>Имя таска</p>
                <div className='flex'>
                    <Link
                        href={'/'}>
                        <Pencil />
                    </Link>
                    <Link
                        href={'/'} className='ml-5'>
                        <Menu />
                    </Link>
                </div>
            </header>
            <main>
                <p>Полное описание задание</p>
                <p>ФИО</p>
            </main>
            <footer className='flex'>
                <Comment />
                <Comment />
            </footer>
        </div>
    )
}