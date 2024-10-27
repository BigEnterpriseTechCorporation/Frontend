import AsideContainer from './asideContainer'
import Input from './input'

export default function Filters() {
    return (
        <AsideContainer rootClassName='flex items-start justify-center ' filter={false}>
            <h1 className="text-3xl mb-5">
                Фильтры
            </h1>
            <h2 className="text-xl mb-2">
                Дата
            </h2>
            <div className="flex">
                <Input />
                <p className="mx-3">
                    по
                </p>
                <Input />
                {/*
                    сдесь должна быть какая-то функция фильтрации по дате, но у нас нет даже дат
                */}
            </div>
            <h2 className="text-xl mb-2 mt-6">
                Фамилия
            </h2>
            <div className="flex">
                <Input />
                
            </div>
            {/* форма с фильтрами */}
            {/* кнопки фильтрации */}

        </AsideContainer>
    )
}