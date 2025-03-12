import React from 'react'
import { FaPlay } from "react-icons/fa";

const videos = [
    {
        id: 1,
        title: "Workflow Management",
        author: "Mihir Thakkar",
        date: "2017-09-13",
        description: "Workflow Management",
        language: "English"
    },
    {
        id: 2,
        title: "ERP Admin Implementation",
        author: "Mihir Thakkar",
        date: "2017-09-13",
        description: "ERP Admin Implementation",
        language: "English"
    },
    {
        id: 3,
        title: "ERP Admin",
        author: "Mihir Thakkar",
        date: "2017-09-13",
        description: "ERP Admin",
        language: "English"
    },
    {
        id: 4,
        title: "Customer Report",
        author: "Mihir Thakkar",
        date: "2017-09-13",
        description: "Docx Tutorial - Design your own report",
        language: "English"
    },
    {
        id: 5,
        title: "Introduction to New UI",
        author: "Mihir Thakkar",
        date: "2017-09-13",
        description: "StrategicERP is launching its new version 17.2 and on this occasion wants everybody to have a preview of its new UI.",
        language: "English"
    }
]

const SelfTraining = () => {
    return (
        <div className='pl-[68px] p-10 h-[90vh] bg-gray-50 overflow-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {videos?.map((video) => {
                    return (
                        <div key={video?.id} className='bg-white shadow-md rounded-xl p-4 flex gap-5 cursor-pointer items-start justify-start'>
                            <div className='self-training-card-icon rounded-full'>
                                <FaPlay className='text-white/50 p-2.5 w-[52px] h-[52px] pl-3.5' />
                            </div>
                            <div>
                                <h3 className='text-[#3e75a5e3] text-xl font-semibold mb-1.5 line-clamp-1'>{video?.title}</h3>
                                <div>
                                    <p className='text-xs mb-0.5'>by <span className='text-[#3371b7]'>{video?.author}</span> |
                                        Created on <span className='text-[#3371b7]'>{video?.date}</span></p>
                                    <p className='text-sm line-clamp-1'>{video?.description}</p>
                                    <p className='text-sm'>Track <span className='text-[#3371b7]'>{video?.language}</span></p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default SelfTraining
