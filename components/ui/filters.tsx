import AsideContainer from './asideContainer'
import Input from './input'

export default function Filters() {
    return (
        <AsideContainer rootClassName='flex items-center justify-center ' filter={false}>
            <div className="">
                <h1 className="text-3xl mb-5 text-center lg:mb-12">
                    Фильтры
                </h1>
                <div className="lg:flex lg:justify-between lg:items-center">
                    <div className="lg:h-fit lg:ml-0 md:ml-[50%] lg:-translate-x-0 md:-translate-x-1/2">
                        <h2 className="text-xl mb-2 text-center sm:mt-0 mt-20">
                            Дата
                        </h2>
                        {/* кнопки фильтрации */}
                        <div className="sm:flex sm:mt-0 mt-4">
                            <Input className="w-full" />
                            <p className="sm:mx-3 text-center sm:my-0 my-1">
                                по
                            </p>
                            <Input className="w-full" />
                            {/*
                                сдесь должна быть какая-то функция фильтрации по дате, но у нас нет даже дат
                            */}
                        </div>
                    </div>
                    <div className="lg:w-[40%] lg:mt-0 mt-12 sm:mt-6 lg:ml-0 md:ml-[50%] lg:-translate-x-0 md:-translate-x-1/2">
                        <h2 className="text-xl mb-2 text-center">
                            Фамилия
                        </h2>
                        <div className="flex">
                            <Input className="lg:w-full  w-full" />
                        </div>
                    </div>
                </div>
            </div>

        </AsideContainer>
    )
}