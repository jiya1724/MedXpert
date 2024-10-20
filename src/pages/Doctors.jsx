import React, { useState, useEffect, useContext } from 'react'
import Input from '../components/Input'
import Docpho from "../assets/Images/docphoto.svg"
import leftarrow from "../assets/Images/Left Arrow.png"
import { useNavigate } from 'react-router-dom'
import Loader from '../components/Loader'
import authContext from '../context/authContext'
import { db } from '../firebase';
import { collection, query, where, getDocs } from "firebase/firestore";




function Doctors() {
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(true);

    const name = "Toyash"
    const [docDetails, setDocDetails] = useState([])
    const getDoctors = async () => {
        const querySnapshot = await getDocs(collection(db, "doctors"));
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            if (doc.exists()) {
                setDocDetails((prev) => {
                    return ([...prev,...doc.data().DocData])
                })
                console.log(doc.id, " => ", ...doc.data().DocData);
            }

        });
    }

    useEffect(() => {
        // Simulate an API call
        
        const net = () => {
            getDoctors()
        }
        net()
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }, []);
    console.log(docDetails)

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

    const doctorsData = docDetails
    return (
        <div className='h-fit gradient_wall p-4 flex items-start justify-center  w-[100vw]'>
            <div className=' w-[100%] space-y-2'>
                {/* <button onClick={getDoctors}>GetDocs</button> */}
                {/* <div></div> */}
                <div className=' flex items-centre justify-start'>
                    <img onClick={() => { navigate(-1) }} src={leftarrow}></img>
                </div>
                <div className=' flex items-center justify-center'>
                    <h1 className='text-3xl font-extrabold '>Doctors</h1>
                </div>
                <div className=' space-y-2 '>
                    <div className='flex items-center justify-center'>
                        <Input type="text" name="fullname" placeholder="⌕ Search doctors" />
                    </div>
                </div>
                <div className=' items-center justify-center'>
                    {doctorsData.map((doctor, index) => (
                        <div onClick={() => {
                            navigate('/appointment', {
                                state: {
                                    name: doctor.name,
                                    spec: doctor.specialization,
                                    rating: doctor.rating,
                                    hosp:doctor.hospital,
                                }
                            })
                        }} key={index} style={parentStyles}>
                            <div style={childStyles}>
                                <div className='flex items-center justify-center'><img src={Docpho} alt="Doctor" /></div>
                                <div className='flex items-center justify-center'><h1>{doctor.name}</h1></div>
                                <div className='flex items-center justify-center'><h2>{doctor.specialization}</h2></div>
                                <div className='flex items-center justify-center'>{doctor.rating}</div>
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

export default Doctors