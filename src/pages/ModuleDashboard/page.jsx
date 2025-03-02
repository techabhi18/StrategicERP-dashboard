import React from 'react'
import Modules from '../../views/ModuleDashboard/Modules'
import Mails from '../../views/ModuleDashboard/Mails'

const Page = () => {
    return (
        <div className='flex flex-wrap m-4 gap-4 bg-lightblue'>
            <div className='w-full md:w-[33%]'>
                <Modules />
            </div>
            <div className='bg-white w-full md:w-[64.50%] xl:w-[65.50%] rounded-lg'>
                <div className='bg-blue-100 m-4 py-0.5 overflow-auto hide-scrollbar h-[75vh]'>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => {
                        return (
                            <Mails key={index} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Page
