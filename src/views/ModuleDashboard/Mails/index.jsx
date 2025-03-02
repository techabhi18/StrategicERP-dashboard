import React from 'react'
import { IoMailOpenOutline } from "react-icons/io5";

const Mails = () => {
    return (
        <div className='bg-white m-1.5 p-2.5 rounded-lg'>
            <ul>
                <li className='w-full flex justify-between'>
                    <div className='flex gap-4 text-xs'>
                        <img src="/mails/mail1.gif" alt="mail-1" className='w-10 h-10 rounded-full' />
                        <IoMailOpenOutline className='text-lg' />
                        <div>
                            <h3 className='text-primary font-semibold'>Project Engineering | Consultant Details</h3>
                            <p className='text-[#333333] pt-0.5'>KMB Group /Atria Grande /Rugveda /Steel Reinforcement at G Level / / /</p>
                        </div>
                    </div>
                    <div className='flex flex-col items-end justify-end text-xs'>
                        <p className='text-[#999999]'>Tue 29 Aug 17 11:40 AM</p>
                        <p className='text-[#f5365c]'>Approval</p>
                        <p className='text-[#333333]'>ERP Admin</p>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Mails
