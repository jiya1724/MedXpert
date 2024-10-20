import React, { useState, useEffect } from 'react'
import leftarrow from "../assets/Images/Left Arrow.png"
import profile from "../assets/Images/profileicon.svg"
import { useNavigate } from 'react-router'
import arrow from "../assets/Images/Arrownexticon.svg"
import appointment from "../assets/Images/appointmenticon.svg"
import gov from "../assets/Images/govticon.svg"
import logout from "../assets/Images/Logoutlogouticon.svg"
import main from "../assets/Images/mainphoto.svg"
import { getAuth, signOut } from "firebase/auth";
import { auth } from '../firebase'
import authContext from '../context/authContext'
import { useContext } from 'react'
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";
import { doc, getDoc } from "firebase/firestore";
import { db } from '../firebase'



const Settings = () => {

    const { initialUserDet } = useContext(authContext);
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1)
    }
    const handleLogout = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            navigate('/home')
        }).catch((error) => {
            // An error happened.
        });
    }


    const handleChange = (e) => {
        let { value, name } = e.target
        console.log(value, name)
    }
    const [userDet, setUserDet] = useState({})
    const [open, setOpen] = React.useState(false);
    const uId = localStorage.getItem('user-id');
    const handleOpen = async () => {
        const docRef = doc(db, "health", `${uId}`);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            setUserDet(docSnap.data())
        } else {
            // docSnap.data() will be undefined in this case
            console.log("No such document!");
        }
        // if (!appointmentDetails) {
        //     await setDoc(doc(db, "appointments", `${uId}`), {
        //         Appointments: [
        //             newApp
        //         ]
        //     })
        // } else {
        //     await setDoc(doc(db, "appointments", `${uId}`), {
        //         Appointments: [
        //             ...appointmentDetails,
        //             newApp
        //         ]
        //     })
        // }

        console.log("add")
        setOpen(!open)

    };
    console.log(userDet)
    const handleNewOpen = () => {
        setOpen(!open)
        // navigate("/home")
    };
    return (
        <div className='h-[100vh] gradient_wall p-4 flex items-start justify-center overflow-hidden w-[100vw]'>
            <div className=' w-[100%] space-y-8'>
                <div className=' flex items-centre justify-start'>
                    <img onClick={handleBack} src={leftarrow}></img>
                </div>
                <div className=' flex items-centre justify-center'>
                    <img src={main}></img>
                </div>
                <div className=' flex items-center justify-center'>
                    <h1 className='text-3xl font-extrabold  '>{initialUserDet?.name}</h1>
                </div>


                <div className='mt-6'>

                    <div className='p-5 border-t-[2px] border-b-[2px] justify-center border-solid border-gray-500 flex w-full'>
                        {/* <div className=' flex justify-between w-full items-center'>
                            <div className='flex gap-4 justify-center items-center'>
                                <img src={profile}></img>
                                <p>My Profile</p>
                            </div>
                            <img src={arrow}></img>
                        </div> */}
                        <Button onClick={handleOpen} className='gradient_button shadow-md drop-shadow-md '>
                            Your Profile
                        </Button>
                        <Dialog open={open} handler={handleOpen}>
                            <DialogHeader>Your Health Details</DialogHeader>
                            <DialogBody>
                                Details Are Follow :<br></br>
                                Allergy : {userDet.allergy} <br></br>
                                Blood-Group : {userDet.Bloodgroup}<br></br>
                                Emergency Contact : {userDet.EmergencyContact} <br></br>
                                vaccinations : {userDet.vaccinations} <br></br>
                                Illness : {userDet.Illness} <br></br>
                            </DialogBody>
                            <DialogFooter>
                                {/* <Button
                                    variant="text"
                                    color="red"
                                    onClick={handleOpen}
                                    className="mr-1"
                                >
                                    <span>Cancel</span>
                                </Button> */}
                                <Button variant="gradient" color="green" onClick={handleNewOpen
                                }>
                                    <span>Confirm</span>
                                </Button>
                            </DialogFooter>
                        </Dialog>

                    </div>
                    {/* <div className='p-5 border-b-[2px] border-solid border-gray-500 flex w-full'>
                        <div className=' flex justify-between w-full items-center'>
                            <div className='flex gap-4 justify-center items-center'>
                                <img src={appointment}></img>
                                <p>Appointments</p>
                            </div>
                            <img src={arrow}></img>
                        </div>

                    </div> */}
                    {/* <div className='p-5 border-b-[2px] border-solid border-gray-500 flex w-full'>
                        <div className=' flex justify-between w-full items-center'>
                            <div className='flex gap-4 justify-center items-center'>
                                <img src={gov}></img>
                                <p>Government Policies</p>
                            </div>
                            <img src={arrow}></img>
                        </div>

                    </div> */}
                    <div className='p-5 border-b-[2px] border-solid border-gray-500 flex w-full'>
                        <div onClick={handleLogout} className=' flex justify-between w-full items-center'>
                            <div className='flex gap-4 justify-center items-center'>
                                <img src={logout}></img>
                                <p>Logout</p>
                            </div>
                            <img src={arrow}></img>
                        </div>

                    </div>
                </div>


            </div>
        </div>
    )
}

export default Settings