import React, { useState, useContext } from 'react';
import leftarrow from "../assets/Images/Left Arrow.png";
import profile from "../assets/Images/profileicon.svg";
import { useNavigate } from 'react-router';
import arrow from "../assets/Images/Arrownexticon.svg";
import appointment from "../assets/Images/appointmenticon.svg";
import gov from "../assets/Images/govticon.svg";
import logout from "../assets/Images/Logoutlogouticon.svg";
import main from "../assets/Images/mainphoto.svg";
import { signOut } from "firebase/auth";
import { auth } from '../firebase';
import authContext from '../context/authContext';
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";
import { doc, getDoc } from "firebase/firestore";
import { db } from '../firebase';

const Settings = () => {
    const { initialUserDet } = useContext(authContext);
    const navigate = useNavigate();
    const [userDet, setUserDet] = useState({});
    const [open, setOpen] = useState(false);
    const uId = localStorage.getItem('user-id');

    const handleBack = () => {
        navigate(-1);
    };

    const handleLogout = () => {
        signOut(auth).then(() => {
            navigate('/home');
        }).catch((error) => {
            console.log("Logout error: ", error);
        });
    };

    const handleOpen = async () => {
        const docRef = doc(db, "health", `${uId}`);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            setUserDet(docSnap.data());
        } else {
            console.log("No such document!");
        }
        setOpen(!open);
    };

    const handleNewOpen = () => {
        setOpen(!open);
    };

    return (
        <div className='h-[100vh] gradient_wall p-4 flex items-start justify-center overflow-hidden w-[100vw]'>
            <div className='w-[100%] space-y-8'>
                <div className='flex items-centre justify-start'>
                    <img onClick={handleBack} src={leftarrow} alt="Back" />
                </div>
                <div className='flex items-centre justify-center'>
                    <img src={main} alt="Main" />
                </div>
                <div className='flex items-center justify-center'>
                    <h1 className='text-3xl font-extrabold'>{initialUserDet?.name}</h1>
                </div>

                <div className='mt-6'>
                    <div className='p-5 border-t-[2px] border-b-[2px] justify-center border-solid border-gray-500 flex w-full'>
                        <Button onClick={handleOpen} className='gradient_button shadow-md drop-shadow-md'>
                            Your Profile
                        </Button>
                        <Dialog open={open} handler={handleOpen}>
                            <DialogHeader>Your Health Details</DialogHeader>
                            <DialogBody>
                                Details Are Follow :<br />
                                Allergy: {userDet.allergy} <br />
                                Blood-Group: {userDet.Bloodgroup}<br />
                                Emergency Contact: {userDet.EmergencyContact} <br />
                                Vaccinations: {userDet.vaccinations} <br />
                                Illness: {userDet.Illness} <br />
                            </DialogBody>
                            <DialogFooter>
                                <Button variant="gradient" color="green" onClick={handleNewOpen}>
                                    <span>Confirm</span>
                                </Button>
                            </DialogFooter>
                        </Dialog>
                    </div>

                    <div className='p-5 border-b-[2px] border-solid border-gray-500 flex w-full'>
                        <div onClick={() => navigate('/appointments')} className='flex justify-between w-full items-center'>
                            <div className='flex gap-4 justify-center items-center'>
                                <img src={appointment} alt="Appointments" />
                                <p>Appointments</p>
                            </div>
                            <img src={arrow} alt="Next" />
                        </div>
                    </div>

                    <div className='p-5 border-b-[2px] border-solid border-gray-500 flex w-full'>
                        <div className='flex justify-between w-full items-center'>
                            <div className='flex gap-4 justify-center items-center'>
                                <img src={gov} alt="Government Policies" />
                                <p>Government Policies</p>
                            </div>
                            <img src={arrow} alt="Next" />
                        </div>
                    </div>

                    <div className='p-5 border-b-[2px] border-solid border-gray-500 flex w-full'>
                        <div onClick={handleLogout} className='flex justify-between w-full items-center'>
                            <div className='flex gap-4 justify-center items-center'>
                                <img src={logout} alt="Logout" />
                                <p>Logout</p>
                            </div>
                            <img src={arrow} alt="Next" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Settings;
