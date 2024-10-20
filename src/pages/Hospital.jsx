import React, { useState, useEffect } from 'react'
import Input from '../components/Input'
import callpho from "../assets/Images/Callphone.svg"
import leftarrow from "../assets/Images/Left Arrow.png"
import { useNavigate } from 'react-router-dom'
import Loader from '../components/Loader'
import { db } from '../firebase';
import { collection, query, where, getDocs, collectionGroup } from "firebase/firestore";
function Hospital() {
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(true);

    const [hosDetails, setHosDetails] = useState([])

    const getHospitals = async () => {
        const querySnapshot = await getDocs(collection(db, "hospitals"));
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            if (doc.exists()) {
                setHosDetails((prev) => {
                    return ([...doc.data().HosData])
                })
                console.log(doc.id, " => ", ...doc.data().HosData);
            }

        });
    }
    useEffect(() => {
        getHospitals()
        // Simulate an API call
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }, []);
    console.log(hosDetails)

    if (isLoading) {
        return <Loader />;
    }
    const parentStyles = {
        display: 'flex',
        justifyContent: 'center',
    };

    const childStyles = {
        flex: '1 1 45%',
        backgroundColor: '#C6C6F1',
        margin: '20px',
        padding: '2px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    };
    const hospitalData = hosDetails;
    return (
        <div className='h-fit gradient_wall p-4 flex items-start justify-center  w-[100vw]'>
            <div className=' w-[100%] space-y-2'>
                {/* <div></div> */}
                <div className=' flex items-centre justify-start'>
                    <img onClick={() => { navigate(-1) }} src={leftarrow}></img>
                </div>
                <div className=' flex items-center justify-center'>
                    <h1 className='text-3xl font-extrabold '>Hospitals</h1>
                </div>
                <div className=' space-y-2 '>
                    <div className='flex items-center justify-center'>
                        <Input type="text" name="fullname" placeholder="⌕ Search hospitals" />
                    </div>
                </div>
                <div className=' items-center justify-center'>
                    {hospitalData.map((hospital, index) => (
                        <div key={index} style={parentStyles}>
                            <div style={childStyles}>
                                {console.log(hospital.mobile)}
                                <a href={`tel:${hospital.mobile}`} ><div className='flex items-center justify-center'><img src={callpho} alt="Doctor" /></div></a>
                                <div className='flex items-center justify-center'><h1>{hospital.name}</h1></div>
                                <div className='flex items-center justify-center'><h2>{hospital.address}</h2></div>
                                <div className='flex items-center justify-center'>{hospital.rating}</div>
                            </div>
                            {/* <div style={childStyles}>
                                <div className='flex items-center justify-center'><img src={Docpho} alt="Doctor" /></div>
                                <div className='flex items-center justify-center'><h1>{doctor.name}</h1></div>
                                <div className='flex items-center justify-center'><h2>{doctor.specialization}</h2></div>
                                <div className='flex items-center justify-center'>{doctor.rating}</div>
                            </div> */}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Hospital