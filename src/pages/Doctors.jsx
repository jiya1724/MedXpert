import React, { useState, useEffect } from 'react';
import Input from '../components/Input'; // Ensure this component passes props correctly
import Docpho from "../assets/Images/docphoto.svg";
import leftarrow from "../assets/Images/Left Arrow.png";
import { useNavigate } from 'react-router-dom';
import Loader from '../components/Loader';
import { db } from '../firebase';
import { collection, getDocs } from "firebase/firestore";

function Doctors() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);
    const [docDetails, setDocDetails] = useState([]);
    const [searchQuery, setSearchQuery] = useState(""); // State for search query

    const getDoctors = async () => {
        const querySnapshot = await getDocs(collection(db, "doctors"));
        querySnapshot.forEach((doc) => {
            if (doc.exists()) {
                setDocDetails((prev) => ([...prev, ...doc.data().DocData]));
            }
        });
    };

    useEffect(() => {
        const fetchData = async () => {
            await getDoctors();
            setIsLoading(false);
        };
        fetchData();
    }, []);

    const handleSearchChange = (event) => {
        console.log("Search input: ", event.target.value); // Log to ensure input is updating
        setSearchQuery(event.target.value); // Update search query state
    };

    // Filter doctors based on search query (name or specialization)
    const filteredDoctors = docDetails.filter((doctor) =>
        doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        doctor.specialization.toLowerCase().includes(searchQuery.toLowerCase())
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
                    <img onClick={() => { navigate(-1) }} src={leftarrow} alt="Back"></img>
                </div>
                <div className='flex items-center justify-center'>
                    <h1 className='text-3xl font-extrabold'>Doctors</h1>
                </div>
                <div className='space-y-2'>
                    <div className='flex items-center justify-center'>
                        <Input
                            type="text"
                            name="fullname"
                            placeholder="⌕ Search doctors"
                            value={searchQuery} // Bind input value to state
                            onChange={handleSearchChange} // Handle search input change
                        />
                    </div>
                </div>
                <div className='items-center justify-center'>
                    {filteredDoctors.length > 0 ? (
                        filteredDoctors.map((doctor, index) => (
                            <div
                                onClick={() => {
                                    navigate('/appointment', {
                                        state: {
                                            name: doctor.name,
                                            spec: doctor.specialization,
                                            rating: doctor.rating,
                                            hosp: doctor.hospital,
                                        }
                                    });
                                }}
                                key={index}
                                style={parentStyles}
                            >
                                <div style={childStyles}>
                                    <div className='flex items-center justify-center'>
                                        <img src={Docpho} alt="Doctor" />
                                    </div>
                                    <div className='flex items-center justify-center'>
                                        <h1>{doctor.name}</h1>
                                    </div>
                                    <div className='flex items-center justify-center'>
                                        <h2>{doctor.specialization}</h2>
                                    </div>
                                    <div className='flex items-center justify-center'>
                                        {doctor.rating}
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className='flex items-center justify-center'>
                            <p>No doctors found.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Doctors;
