import React, { useContext, useEffect } from 'react'
import authContext from '../context/authContext'
import Health from "../assets/Images/Health2.svg"
import Nurse from "../assets/Images/nurse2.svg"
import { useNavigate } from 'react-router-dom'
import google from "../assets/Images/google.svg"
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from '../firebase'
import { onAuthStateChanged } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { db } from '../firebase'
const Landing = () => {
    
    const { uid, setUid } = useContext(authContext)

    const navigate = useNavigate()

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                const uid = user.uid;
                console.log(uid);
                navigate("/details")
                // ...
            } else {
                navigate("/")
            }
        });


    }, [])

    const handleClick = () => {
        navigate('/signup')
    }
    const handleLogin = async () => {


        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then(async (result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                console.log(token)
                // The signed-in user info.
                const user = result.user;
                console.log(user)
                localStorage.setItem("user-id", user.uid)
                await setDoc(doc(db, "users", `${user.uid}`), {
                    name: user.displayName,
                    email: user.email,
                    photoUrl:user.photoURL,
                });
                


                // IdP data available using getAdditionalUserInfo(result)
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });

            


    }
    return (
        <div className='h-[100vh]  gradient_wall flex items-center justify-center overflow-hidden w-[100vw]'>
            <div className='  w-[100%] space-y-8'>

                <div className=' flex items-center justify-center'>
                    <img src={Health}></img>
                </div>
                <div className=' flex items-center justify-center'>
                    <img className='w-[150px]' src={Nurse} ></img>
                </div>
                <div className=' flex items-center justify-center'>
                    <h1 className=' text-[#8771EB] font-bold text-[35px]'>MedXpert</h1>
                </div>
                <div className=' flex items-center justify-center'>
                    <div className='justify-center'>
                        <h1 className=' font-semibold text-center'>One-Stop <span className='text-[#8771EB] font-bold underline'>Solution</span> </h1>
                        <h1 className='font-bold'>To All your Health care need</h1>
                    </div>


                </div>
                {/* <div className='   w-[100%] flex items-center justify-center'>
                    <div className='flex rounded-lg shadow-md drop-shadow-md  p-3  w-[80%] items-center gradient_button justify-center'>
                        <button onClick={handleClick} className='text-xl font-bold text-white '>SignUp</button>
                    </div>
                </div> */}
                <div className=' w-[100%] flex items-center justify-center'>
                    <div className=' gap-2 flex drop-shadow-md border-4 border-[#8771EB] shadow-md rounded-lg  p-3  w-[80%] items-center justify-center'>
                        <div><button onClick={handleLogin} className='text-xl font-bold text-black'>Continue with </button></div>
                        <div>
                            <img src={google} className='w-[20px]'></img>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Landing