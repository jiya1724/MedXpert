import React, { useContext, useEffect, useState } from 'react';
import leftarrow from "../assets/Images/Left Arrow.png";
import docphoapp from "../assets/Images/ddphoapp.svg";
import { useNavigate } from 'react-router-dom';
import authContext from '../context/authContext';
import Loader from '../components/Loader';
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";

const Appointment = () => {
    const navigate = useNavigate();
    const { getAppointments, appointmentDetails, setappointmentDetails } = useContext(authContext);
    const [isLoading, setIsLoading] = useState(true);
    const [open, setOpen] = useState(false);

    const uId = localStorage.getItem('user-id');

    useEffect(() => {
        if (uId) {
            getAppointments(uId).then(() => {
                setIsLoading(false);
            });
        }
    }, [uId]);

    const handleNewOpen = () => {
        setOpen(!open);
        navigate("/home");
    };

    if (isLoading) {
        return <Loader />;
    }

    return (
        <div className='h-fit gradient_wall p-4 flex items-start justify-center w-[100vw]'>
            <div className='w-[100%] space-y-3'>
                <div className='flex items-centre justify-start'>
                    <img onClick={() => navigate(-1)} src={leftarrow} alt="Back" />
                </div>

                <div className='flex items-center justify-center'>
                    <h1 className='text-3xl font-extrabold '>Appointments</h1>
                </div>

                {appointmentDetails && appointmentDetails.length > 0 ? (
                    appointmentDetails.map((appointment, index) => (
                        <div key={index} className="p-4 border-b-2 border-gray-300">
                            <p>Doctor: {appointment.name}</p>
                            <p>Speciality: {appointment.speciality}</p>
                            <p>Date: {appointment.date}</p>
                            <p>Time: {appointment.time}</p>
                        </div>
                    ))
                ) : (
                    <p>No appointments found.</p>
                )}

                <div className='mt-4 flex justify-center'>
                    <Button onClick={() => setOpen(true)} className='gradient_button shadow-md drop-shadow-md '>
                        Book New Appointment
                    </Button>
                    <Dialog open={open} handler={() => setOpen(!open)}>
                        <DialogHeader>Book Appointment</DialogHeader>
                        <DialogBody>
                            Add details to book a new appointment.
                        </DialogBody>
                        <DialogFooter>
                            <Button variant="gradient" color="green" onClick={handleNewOpen}>
                                <span>Confirm</span>
                            </Button>
                        </DialogFooter>
                    </Dialog>
                </div>
            </div>
        </div>
    );
};

export default Appointment;
