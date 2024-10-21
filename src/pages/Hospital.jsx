import React, { useState, useEffect } from 'react'
import Input from '../components/Input'
import callpho from "../assets/Images/Callphone.svg"
import leftarrow from "../assets/Images/Left Arrow.png"
import { useNavigate } from 'react-router-dom'
import Loader from '../components/Loader'
import { db } from '../firebase';
import { collection, getDocs } from "firebase/firestore";

function Hospital() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);
    const [hosDetails, setHosDetails] = useState([]);
    const [searchQuery, setSearchQuery] = useState(''); // State for search input

    const getHospitals = async () => {
        const querySnapshot = await getDocs(collection(db, "hospitals"));
        const hospitals = [];
        querySnapshot.forEach((doc) => {
            // Check if the document exists and add it to hospitals array
            if (doc.exists()) {
                hospitals.push(...doc.data().HosData);
            }
        });
        setHosDetails(hospitals);
    };

    useEffect(() => {
        getHospitals();
        // Simulate an API call
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }, []);

    // Function to handle search query input
    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    };

    // Filter the hospital data based on the search query
    const filteredHospitals = hosDetails.filter((hospital) =>
        hospital.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        hospital.address.toLowerCase().includes(searchQuery.toLowerCase())
    );

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

    return (
        <div className='h-fit gradient_wall p-4 flex items-start justify-center w-[100vw]'>
            <div className='w-[100%] space-y-2'>
                <div className='flex items-centre justify-start'>
                    <img onClick={() => { navigate(-1) }} src={leftarrow} alt="Go back" />
                </div>
                <div className='flex items-center justify-center'>
                    <h1 className='text-3xl font-extrabold'>Hospitals</h1>
                </div>
                <div className='space-y-2'>
                    <div className='flex items-center justify-center'>
                        {/* Search Input */}
                        <Input
                            type="text"
                            name="search"
                            placeholder="⌕ Search hospitals"
                            value={searchQuery} // Bind to state
                            onChange={handleSearch} // Handle search query change
                        />
                    </div>
                </div>
                <div className='items-center justify-center'>
                    {filteredHospitals.map((hospital, index) => (
                        <div key={index} style={parentStyles}>
                            <div style={childStyles}>
                                <a href={`tel:${hospital.mobile}`} >
                                    <div className='flex items-center justify-center'>
                                        <img src={callpho} alt="Call hospital" />
                                    </div>
                                </a>
                                <div className='flex items-center justify-center'>
                                    <h1>{hospital.name}</h1>
                                </div>
                                <div className='flex items-center justify-center'>
                                    <h2>{hospital.address}</h2>
                                </div>
                                <div className='flex items-center justify-center'>
                                    {hospital.rating}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Hospital;
