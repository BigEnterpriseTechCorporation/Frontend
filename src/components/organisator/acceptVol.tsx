"use client"
import React from 'react'
import { useTheme } from '@/context/ThemeContext'
import Image from 'next/image'
import menu from '@/assets/icons/menu.svg'
import check from '@/assets/icons/check.svg'
import cross from '@/assets/icons/cross.svg'

interface Request {
    id: string;
    title: string;
    description: string;
    author: string;
}

interface CurrentRequestProps {
    requests: Request[];
    onApprove?: (id: string) => void;
    onReject?: (id: string) => void;
}

export default function CurrentRequest({ requests, onApprove, onReject }: CurrentRequestProps) {
    const { isDarkTheme } = useTheme()

    const handleApprove = (id: string) => {
        if (onApprove) {
            onApprove(id);
        }
    }
    
    const handleReject = (id: string) => {
        if (onReject) {
            onReject(id);
        }
    }

    return (
        <div className={`w-[80%]  mx-auto rounded-2xl h-full flex flex-col ${isDarkTheme ? 'bg-[#1B1C1F99] text-white' : 'bg-[#F2F3F5] text-[#313338]'}`}>
            <div className={`${isDarkTheme ? 'bg-gunmetal' : 'bg-antiGunmetal'} p-3 rounded-t-2xl rounded-b-none`}>
                <h1 className={`${isDarkTheme ? 'text-white' : 'text-[#313338]'} text-2xl`}>Подтверждение участия волонтёра</h1>
            </div>
            <div className="flex-1 grid grid-cols-2 gap-4 bg-[#31333] p-6 overflow-y-auto ScrollBar">
                {requests.map((request, index) => (
                    <div 
                        key={index} 
                        className={`${isDarkTheme ? 'bg-[#232428]' : 'bg-[#E3E5E8]'} rounded-lg p-4 relative max-h-[200px]`}
                    >
                        <div className="flex flex-col justify-between items-start mb-2">
                            <div className='flex justify-between items-center w-full'>
                                <h2 className={`${isDarkTheme ? 'text-white' : 'text-[#313338]'} text-lg font-medium max-[680px]:text-2xl`}>
                                    {request.title}
                                </h2>
                                <div className="flex items-center gap-2">
                                    {onApprove && onReject && (
                                        <>
                                            <button 
                                                className="p-1"
                                                onClick={() => handleApprove(request.id)}
                                            >
                                                <Image 
                                                    src={check} 
                                                    alt="approve" 
                                                    width={20} 
                                                    height={20}
                                                    className={`${!isDarkTheme ? 'brightness-0' : ''}`}
                                                />
                                            </button>
                                            <button 
                                                className="p-1"
                                                onClick={() => handleReject(request.id)}
                                            >
                                                <Image 
                                                    src={cross} 
                                                    alt="reject" 
                                                    width={20} 
                                                    height={20}
                                                    className={`${!isDarkTheme ? 'brightness-0' : ''}`}
                                                />
                                            </button>
                                        </>
                                    )}
                                    <button className="p-2">
                                        <Image 
                                            src={menu} 
                                            alt="menu" 
                                            width={6} 
                                            height={6} 
                                            className={`${!isDarkTheme ? 'brightness-0' : ''} max-[680px]:w-[10px] max-[680px]:h-[10px]`}
                                        />
                                    </button>
                                </div>
                            </div>
                            
                            <p className={`${isDarkTheme ? 'text-silver' : 'text-[#4E5058]'} text-sm max-[680px]:text-xl`}>
                                {request.description}
                            </p>
                        </div>
                        <p className={`${isDarkTheme ? 'text-silver' : 'text-[#4E5058]'} text-sm max-[680px]:text-xl`}>
                            {request.author}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}
