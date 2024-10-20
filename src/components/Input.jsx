
import React from 'react'

const Input = ({upper,placeholder,name,onChange,type}) => {
    return (
        <div className='w-[100%]'>
            <div className=' flex justify-center items-center w-[100%]'>
                <div className='w-[80%]  flex items-center justify-start'>
                    <h1 className=' font-bold '>{upper}</h1>
                </div>
            </div>
            <div className=' flex justify-center items-center w-[100%]'>
                <input name={name} onChange={onChange} className='w-[80%] drop-shadow-sm shadow-sm rounded-lg bg-[#F3F3F3] p-3 ' type={type} placeholder={placeholder} required></input>
            </div>
        </div>
    )
}

export default Input