import React from 'react'
import leftarrow from "../assets/Images/Left Arrow.png"
import Google from "../assets/Images/google.svg"
import Face from "../assets/Images/fb.svg"
import Apple from "../assets/Images/apple.svg"
import Input from '../components/Input'
import { useNavigate } from 'react-router'
import { useContext } from 'react'
import authContext from '../context/authContext'
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase'


const Password = () => {

    const { initialUserDet, setinitialUserDet } = useContext(authContext);



    const navigate = useNavigate();

    const handleSignup = () => {
        
        createUserWithEmailAndPassword(auth, initialUserDet.email, initialUserDet.password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                console.log(user.uid);
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage)
                // ..
            });
    }

    const handleBack = () => {
        navigate(-1)
    }
    const handleChange = (e) => {
        let { value, name } = e.target
        setinitialUserDet((prev) => {
            return ({
                ...prev,
                [name]: value
            })
        })
    }
    console.log(initialUserDet);
    return (
        <div className='h-[100vh] gradient_wall p-4 flex items-start justify-center overflow-hidden w-[100vw]'>
            <div className=' w-[100%] space-y-8'>
                <div className=' flex items-centre justify-start'>
                    <img onClick={handleBack} src={leftarrow}></img>
                </div>
                <div className=' flex items-center justify-center'>
                    <h1 className='text-3xl font-extrabold '>Set Password</h1>
                </div>
                <div className=' flex items-center justify-center'>
                    <h2>Passwords should have a minimum length of at least seven characters </h2>
                </div>
                <div className=' space-y-6 '>
                    <div className='flex items-center justify-center'>
                        <Input onChange={handleChange} upper="Password" type="password" name="password" placeholder="Password" />

                    </div>
                    <div className='flex items-center justify-center'>
                        <Input onChange={handleChange} upper="Confirm Password" type="password" name="confirmedpass" placeholder="Confirm Password" />
                    </div>

                </div>
                <div className='   w-[100%] flex items-center justify-center'>
                    <div className='flex rounded-lg shadow-md drop-shadow-md  p-3  w-[80%] items-center gradient_button justify-center'>
                        <button onClick={handleSignup} className='text-xl font-bold text-white '>SignUp</button>
                    </div>
                </div>
                <div className='flex items-center justify-center w-[100%]'>
                    <div>
                        <h6>or sign up with</h6>
                    </div>
                </div>
                <div className=' flex items-center justify-center'>
                    <div>
                        <img src={Google}></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Password