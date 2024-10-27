import AsideContainer from './asideContainer'
import Input from './input'

export default function Filters() {
    return (
<<<<<<< HEAD
        <AsideContainer rootClassName='flex items-center justify-center ' filter={false}>
            <div className="">
                <h1 className="text-3xl mb-5 text-center lg:mb-12 bg-DT_BacklLable rounded-t-2xl pt-3 pb-2">
                    Фильтры
                </h1>
                <div className="lg:mt-0 mt-12 mb-6 ">
                        <h2 className="text-xl mb-2 text-center">
                            Фильтр по фамилиям
                        </h2>
                        <div className="ml-[50%] -translate-x-1/2 ">
                            <Input className="lg:w-full  w-full " />
                        </div>
                </div>
                <div className="">
                    <div className="lg:h-fit ">
                        <h2 className="text-xl mb-2 text-center sm:mt-0 mt-20">
                            Фильтр по датам
                        </h2>
                        {/* кнопки фильтрации */}
                        <div className="sm:flex sm:mt-0 mt-4 ml-[50%] -translate-x-1/2">
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
                </div>
                <button className="ml-[50%] -translate-x-1/2 mt-4 bg-DT_BacklLable text-Blue py-2 px-9 rounded-full">
                    Применить фильтры
                </button>
=======
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
>>>>>>> 7fd205ce72b062a19ff6925f9b07586bc462306a
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