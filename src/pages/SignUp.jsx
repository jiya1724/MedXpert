import React, { useContext } from 'react'
import leftarrow from "../assets/Images/Left Arrow.png"
import PHOTO from "../assets/Images/signup photo.png"
import { useNavigate } from 'react-router'
import Input from '../components/Input'
import authContext from '../context/authContext'
const SignUp = () => {
    const navigate = useNavigate()
    const {initialUserDet, setinitialUserDet} = useContext(authContext);

    

    const handleBack = () => {
        navigate(-1)
    }

    const handleClick = () => {
        navigate("/password")
    }
    const handleChange = (e) => {
        let { value, name } = e.target
        setinitialUserDet((prev)=>{
            return({
                ...prev,
                [name]:value,
            })
        })
    }
    console.log(initialUserDet)
    return (
        <div className='h-fit gradient_wall p-4 flex items-start justify-center  w-[100vw]'>
            <div className=' w-[100%] space-y-2'>
                {/* <div></div> */}
                <div className=' flex items-centre justify-start'>
                    <img onClick={handleBack} src={leftarrow}></img>
                </div>
                <div className=' flex items-center justify-center'>
                    <h1 className='text-3xl font-extrabold '>Sign up</h1>
                </div>
                <div className='  flex items-center justify-start'>
                    <h1 className='mt-3 font-extrabold '>Complete your Profile</h1>
                </div>
                <div className='flex items-center justify-start'>
                    <h2>Dont worry, only you can see your personal info, no one else will be able to see it.</h2>
                </div>
                <div className=' flex items-center justify-center'>
                    <img src={PHOTO} className='w-[130px]' ></img>
                </div>
                <div className=' space-y-2 '>
                    <div className='flex items-center justify-center'>
                        <Input onChange={handleChange} upper="Full Name" type="text" name="name" placeholder="Full Name" />

                    </div>
                    <div className='flex items-center justify-center'>
                        <Input onChange={handleChange} upper="Age" type="number" name="age" placeholder="Enter Number" />
                    </div>
                    <div className='flex items-center justify-center'>
                        <Input onChange={handleChange} upper="Email" type="email" name="email" placeholder="Email" />
                    </div>
                    <div className='flex items-center justify-center'>
                        <Input onChange={handleChange} upper="Phone Number" type="tel" name="phoneNumber" placeholder="Phone Number" />
                    </div>
                </div>

                <div className=' flex items-center justify-center w-[100%]'>
                    <div className='mt-2'>
                        <h2>By tapping “Next”, you agree to our <span className='text-[#8771EB]'>Terms & Conditions</span> and <span className='text-[#8771EB]'>Privacy Policy</span></h2>
                    </div>
                </div>
                <div className='   w-[100%] flex items-center justify-center '>
                    <div className='mt-[15px] flex rounded-lg shadow-md drop-shadow-md  p-3  w-[80%] items-center gradient_button justify-center'>
                        <button onClick={handleClick} className='text-xl font-bold text-white '>NEXT</button>
                    </div>
                </div>
                <div className=' flex items-center mt-2 justify-center w-[100%]'>
                    <div className='mt-3'>
                        <h2>Already have an account? <span onClick={() => { navigate('/home') }} className='text-[#8771EB]'>Log in</span> </h2>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default SignUp