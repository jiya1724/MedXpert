import React from 'react'

const DateCard = ({day,date}) => {
    return (
        <div className='h-[80px] flex items-center rounded-lg justify-center w-[60px] border-[#8771EB] shadow-md border-2'>
            <div>
                <div>
                    <h1 className='font-bold'>{day}</h1>
                </div>
                <div className='flex items-center justify-center'>
                    <div>{date}</div>
                </div>

            </div>
        </div>
    )
}

export default DateCard