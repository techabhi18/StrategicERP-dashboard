import React from 'react'

const Icon = ({ src, alt }) => {
    return (
        <div className='bg-white border border-solid border-[#c8d2e6] rounded-md p-1.5'>
            <img src={src} alt={alt} className='w-4' />
        </div>
    )
}

export default Icon
