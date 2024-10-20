import React from 'react'
import Health from "../assets/Images/Health2.svg"
import DOC from "../assets/Images/maledoc.svg"
import { useNavigate } from 'react-router-dom'
import google from "../assets/Images/google.svg"
const Landing = () => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/signup')
    }
    // const handleLogin=()=>{
    //     window.location.href('http://localhost:5000/auth/google')
    // }
    return (
        <div className='h-[100vh]  gradient_wall flex items-center justify-center overflow-hidden w-[100vw]'>
            <div className='  w-[100%] space-y-8'>

                
                <div className=' flex items-center justify-center'>
                    <img className='w-[250px]' src={DOC} ></img>
                </div>
                <div className=' flex items-center justify-center'>
                    <h1 className=' font-black text-[35px]'>Talk to a Doctor</h1>
                </div>
                <div className=' flex items-center justify-center'>
                    <div className='justify-center'>
                        <h1 className=' font-semibold text-center'>connect patient with doctors as</h1>
                        <h1 className='font-extrabold text-center justify-centre'>per their requirements</h1>
                    </div>


                </div>
                <div className='   w-[100%] flex items-center justify-center'>
                    <div className='flex rounded-lg shadow-md drop-shadow-md  p-3  w-[80%] items-center gradient_button justify-center'>
                        <button onClick={handleClick} className='text-xl font-bold text-white '>Next</button>
                    </div>
                </div>
                

            </div>
        </div>
    )
}

export default Landing