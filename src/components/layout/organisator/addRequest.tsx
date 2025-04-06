"use client"
import React, { useState } from 'react'
import { useTheme } from '@/context/ThemeContext'
import Input from '@/components/ui/input'

export default function AddRequest() {
    const { isDarkTheme } = useTheme()
    const [formData, setFormData] = useState({
        surname: '',
        name: '',
        email: '',
        title: '',
        description: ''
    })

    return (
        <div className={`w-[80%] mx-auto rounded-2xl h-full flex flex-col ${isDarkTheme ? 'bg-[#1B1C1F99] text-white' : 'bg-[#F2F3F5] text-[#313338]'}`}>
            <div className={`${isDarkTheme ? 'bg-gunmetal' : 'bg-antiGunmetal'} p-3 rounded-t-2xl rounded-b-none`}>
                <h1 className={`${isDarkTheme ? 'text-white' : 'text-[#313338]'} text-2xl`}>Подать заявку на создание события</h1>
            </div>
            <form className="flex-1 flex flex-col gap-3 bg-[#23242875] p-6 overflow-y-auto ScrollBar">
                <div className="grid grid-cols-3 gap-4 min-h-fit">
                    <label className='w-full mb-2'>
                        <h2 className={`text-base pl-1 ${isDarkTheme ? 'text-silver' : 'text-[#313338]'}`}>Фамилия</h2>
                        <Input className={`w-full ${isDarkTheme ? 'bg-[#2E2E34] text-white' : 'bg-[#E3E5E8] border-[#D2D5DA] text-[#313338]'}`} />
                    </label>
                    <label className='w-full mb-2'>
                        <h2 className={`text-base pl-1 ${isDarkTheme ? 'text-silver' : 'text-[#313338]'}`}>Имя</h2>
                        <Input className={`w-full ${isDarkTheme ? 'bg-gunmetal text-white' : 'bg-[#E3E5E8] border-[#D2D5DA] text-[#313338]'}`} />
                    </label>
                    <label className='w-full mb-2'>
                        <h2 className={`text-base pl-1 ${isDarkTheme ? 'text-silver' : 'text-[#313338]'}`}>E-mail</h2>
                        <Input className={`w-full ${isDarkTheme ? 'bg-gunmetal text-white' : 'bg-[#E3E5E8] border-[#D2D5DA] text-[#313338]'}`} />
                    </label>
                </div>
                <label className='w-full mb-2'>
                    <h2 className={`text-base pl-1 ${isDarkTheme ? 'text-silver' : 'text-[#313338]'}`}>Заголовок события</h2>
                    <Input className={`w-full ${isDarkTheme ? 'bg-gunmetal text-white' : 'bg-[#E3E5E8] border-[#D2D5DA] text-[#313338]'}`} />
                </label>
                <label className='w-full flex-1 min-h-[200px] flex flex-col'>
                    <h2 className={`text-base pl-1 ${isDarkTheme ? 'text-silver' : 'text-[#313338]'}`}>Описание</h2>
                    <textarea 
                        className={`w-full flex-1 resize-none rounded-lg p-2 ${isDarkTheme ? 'bg-nero text-white border-sand border-[0.5px]' : 'bg-[#E3E5E8] border-[#D2D5DA] text-[#313338]'}`} 
                    />
                </label>

                <button 
                    type="submit"
                    className={`p-3 rounded-lg transition-colors mt-auto ${
                        isDarkTheme 
                            ? 'bg-[#1E1F22] text-white hover:bg-[#2B2D31]' 
                            : 'bg-[#D8DBDF] text-[#313338] hover:bg-[#C9CCD1]'
                    }`}
                >
                    Отправить
                </button>
            </form>
        </div>
    )
}
