import React, { useEffect, useState } from 'react'
import arrow from "../assets/Images/Left Arrow.png"
import dp from "../assets/Images/profileDoc.svg"
import cal from "../assets/Images/calender.svg"
import ala from "../assets/Images/AlarmClock.svg"
import band from "../assets/Images/Bandage.svg"
import cardio from "../assets/Images/Heartbeat.svg"
import ped from "../assets/Images/ped.svg"
import derm from "../assets/Images/derm.svg"
import phy from "../assets/Images/phy.svg"
import brain from "../assets/Images/brain.svg"
import ute from "../assets/Images/Uterus.svg"
import tooth from "../assets/Images/Tooth.svg"
import foot from "../assets/Images/Foot.svg"
import ray from "../assets/Images/ray.svg"
import navHome from "../assets/Images/navHome.svg"
import navHos from "../assets/Images/navHos.svg"
import navDoc from "../assets/Images/navDoctor.svg"
import navProfile from "../assets/Images/navProfile.svg"
import { Link, useNavigate } from 'react-router-dom'
import Loader from '../components/Loader'
import Navbar from '../components/Navbar'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase'
import authContext from '../context/authContext'
import { useContext } from 'react'
import AppointmentCard from '../components/AppointmentCard'


const Home = () => {
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(true);
    const [name, setName] = useState()
    const { uid, setUid, getData, initialUserDet, getAppointments, appointmentDetails, setappointmentDetails } = useContext(authContext)
    useEffect(() => {
        getAppointments()


    }, [])





    const handleLogout = () => {

    }
    console.log(uid)

    useEffect(() => {
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                const uid = user.uid;
                console.log(uid);
                getData()
                // ...
            } else {
                navigate("/")
            }
        });
        // Simulate an API call
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }, []);

    if (isLoading) {
        return <Loader />;
    }
    return (
        <div className='h-fit p-4  flex items-start justify-center  w-[100vw]'>
            <Navbar />
            <div className=' h-fit w-[100%] space-y-4'>

                <div className=' flex items-center justify-start'>
                    <img onClick={() => { navigate(-1) }} src={arrow}></img>
                </div>
                <div className=' flex  w-[100%] h-[10rem] items-start justify-center'>
                    <div className=' w-[90%] p-4 flex items-start justify-start rounded-md h-[100%] gradient_card drop-shadow-md shadow-md  '>
                        <div className='w-[100%]'>
                            <div>
                                <h1 className='text-white font-medium '>Hello, {initialUserDet?.name} </h1>
                            </div>
                            <div className='flex items-center justify-center mt-2 w-[100%] '>

                                <a href='tel:112'>
                                    <button>
                                        <div className='bg-[#ffff] zoom-in-out-box h-[100px] w-[100px] rounded-full flex hover:ring-[20px] items-center justify-center'>
                                            <div>
                                                <h1 className=" text_one text-[#000000] font-bold  text-[32px]">SOS</h1>
                                            </div>
                                        </div>
                                    </button>
                                </a>

                            </div>



                        </div>
                    </div>
                </div>
                <div className=' flex items-center justify-start'>
                    <div className='justify-start'>
                        <h1 className='font-bold'>Upcoming Schedule</h1>
                    </div>
                </div>
                <div className='flex  overflow-x-auto '>
                    {appointmentDetails?.map((appointment) => {
                        return (
                            <div>
                                <div>
                                    <AppointmentCard name={appointment.name} speciality = {appointment.speciality}
                                        day={appointment.day}
                                        date={appointment.date}
                                        month={appointment.month}
                                        time={appointment.time} />
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className=' flex items-center justify-start'>
                    <div className='justify-start'>
                        <h1 className='font-bold'>Doctors by Speciality</h1>
                    </div>
                </div>
                <div className='w-[100%]  h-fit space-y-2 '>
                    <div className='w-[100%] gap-6 flex items-center justify-center h-[100px] '>
                        <div className='justify-center space-y-2  '>
                            <div className='w-[60px] flex items-center justify-center bg-white drop-shadow-md shadow-md rounded-xl h-[60px]'>
                                <img src={band}></img>
                            </div>
                            <div className=' flex items-center justify-center'>
                                <h1 className='text-xs text-center'>General</h1>
                            </div>
                        </div>

                        <div className='justify-center space-y-2 '>
                            <div className='w-[60px] flex items-center justify-center bg-white drop-shadow-md shadow-md rounded-xl h-[60px]'>
                                <img src={cardio}></img>
                            </div>
                            <div className=' flex items-center justify-center'>
                                <h1 className='text-xs'>Cardio</h1>
                            </div>
                        </div>
                        <div className='justify-center space-y-2 '>

                            <div className='w-[60px] flex items-center justify-center bg-white drop-shadow-md shadow-md rounded-xl h-[60px]'>
                                <img src={ped}></img>
                            </div>
                            <div className=' flex items-center justify-center'>
                                <h1 className='text-xs'>Ped </h1>
                            </div>


                        </div>
                        <div className='justify-center space-y-2 '>
                            <div className='w-[60px] flex items-center justify-center bg-white drop-shadow-md shadow-md rounded-xl h-[60px]'>
                                <img src={derm}></img>
                            </div>
                            <div className=' flex items-center justify-center'>
                                <h1 className='text-sm'>Derm</h1>
                            </div>
                        </div>
                    </div>
                    <div className='w-[100%] h-[100px] '>
                        <div className='w-[100%] gap-6 flex items-center justify-center h-[100px] '>
                            <div className='justify-center space-y-2  '>
                                <div className='w-[60px] flex items-center justify-center bg-white drop-shadow-md shadow-md rounded-xl h-[60px]'>
                                    <img src={phy}></img>
                                </div>
                                <div className=' flex items-center justify-center'>
                                    <h1 className='text-xs text-center'>Psych</h1>
                                </div>
                            </div>

                            <div className='justify-center space-y-2 '>
                                <div className='w-[60px] flex items-center justify-center bg-white drop-shadow-md shadow-md rounded-xl h-[60px]'>
                                    <img src={brain}></img>
                                </div>
                                <div className=' flex items-center justify-center'>
                                    <h1 className='text-xs'>Nuro</h1>
                                </div>
                            </div>
                            <div className='justify-center space-y-2 '>

                                <div className='w-[60px] flex items-center justify-center bg-white drop-shadow-md shadow-md rounded-xl h-[60px]'>
                                    <img src={brain}></img>
                                </div>
                                <div className=' flex items-center justify-center'>
                                    <h1 className='text-xs'>Ophthal </h1>
                                </div>


                            </div>
                            <div className='justify-center space-y-2 '>
                                <div className='w-[60px] flex items-center justify-center bg-white drop-shadow-md shadow-md rounded-xl h-[60px]'>
                                    <img src={ute}></img>
                                </div>
                                <div className=' flex items-center justify-center'>
                                    <h1 className='text-sm'>Gyno</h1>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='w-[100%] h-[100px] '>
                        <div className='w-[100%] gap-6 flex items-center justify-center h-[100px] '>
                            <div className='justify-center space-y-2  '>
                                <div className='w-[60px] flex items-center justify-center bg-white drop-shadow-md shadow-md rounded-xl h-[60px]'>
                                    <img src={tooth}></img>
                                </div>
                                <div className=' flex items-center justify-center'>
                                    <h1 className='text-xs text-center'>Dentist</h1>
                                </div>
                            </div>

                            <div className='justify-center space-y-2 '>
                                <div className='w-[60px] flex items-center justify-center bg-white drop-shadow-md shadow-md rounded-xl h-[60px]'>
                                    <img src={foot}></img>
                                </div>
                                <div className=' flex items-center justify-center'>
                                    <h1 className='text-xs'>ortho</h1>
                                </div>
                            </div>
                            <div className='justify-center space-y-2 '>

                                <div className='w-[60px] flex items-center justify-center bg-white drop-shadow-md shadow-md rounded-xl h-[60px]'>
                                    <img src={ray}></img>
                                </div>
                                <div className=' flex items-center justify-center'>
                                    <h1 className='text-xs'>Rad </h1>
                                </div>


                            </div>
                            <div className='justify-center space-y-2 '>
                                <div className='w-[60px] flex items-center justify-center bg-white drop-shadow-md shadow-md rounded-xl h-[60px]'>
                                    <img src={band}></img>
                                </div>
                                <div className=' flex items-center justify-center'>
                                    <h1 className='text-sm'>Uro</h1>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='w-[100%] h-[100px] '>

                    </div>
                </div>











            </div>
        </div>
    )
}

export default Home