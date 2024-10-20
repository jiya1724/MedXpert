import React from 'react'
import dp from "../assets/Images/profileDoc.svg"
import cal from "../assets/Images/calender.svg"
import ala from "../assets/Images/AlarmClock.svg"

const AppointmentCard = ({name, speciality,day,date,month,time}) => {
    return (
        <div className=' gap-2 w-fit flex items-center justify-center  h-[150px]'>
            <div className=' flex  w-[330px] h-[8rem] items-start justify-center'>
                <div className=' w-[90%] p-2 flex items-center justify-start rounded-md h-[100%] gradient_card   '>
                    <div className='w-[100%] space-y-3 '>
                        <div className='flex gap-6 items-center justify-start'>
                            <div>
                                <img src={dp}></img>
                            </div>
                            <div>
                                <div>
                                    <h1 className='text-white font-semibold text-xl'>{name}</h1>

                                </div>
                                <div>
                                    <h1 className='text-white font-semibold text-sm'>{speciality}</h1>

                                </div>

                            </div>
                        </div>
                        <div className='flex items-center justify-center'>
                            <div className=' glass flex items-center justify-start gap-2 h-[40px] w-[100%] rounded-md '>
                                <div className='flex items-center gap-1 justify-center'>
                                    <div>
                                        <img src={cal}></img>
                                    </div>
                                    <div>
                                        <h1 className='text-sm font-semibold'>{day}, {date} {month}</h1>
                                    </div>
                                </div>
                                <div className='flex items-center gap-1 justify-center'>
                                    <div>
                                        <img src={ala}></img>
                                    </div>
                                    <div>
                                        <h1 className='text-sm font-semibold'>{time}</h1>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AppointmentCard