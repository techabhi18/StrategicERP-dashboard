import React from 'react'

const Dashboard = ({ img }) => {
    return (
        <div className='pb-14'>
            <img src={img} alt="Workflow" className='max-w-screen-sm block m-auto w-full' />
        </div>
    )
}

export default Dashboard
