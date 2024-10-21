import React, { useContext, useEffect, useState } from "react";
import leftarrow from "../assets/Images/Left Arrow.png";
import Google from "../assets/Images/google.svg";
import Face from "../assets/Images/fb.svg";
import Apple from "../assets/Images/apple.svg";
import Input from "../components/Input";
import { useNavigate } from "react-router";
import authContext from "../context/authContext";
import { updateDoc } from "firebase/firestore";
import { db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";
import { getDoc } from "firebase/firestore";
const Details = () => {
    const navigate = useNavigate();
    const { getData, initialUserDet, healthDetails, setHealthDetails } = useContext(authContext)
    const [health, setHealth] = useState({

    })


    const handleBack = () => {
        navigate(-1);
    };
    const handleChange = (e) => {
        let { value, name } = e.target;
        setHealth((prev) => {
            return ({
                ...prev,
                [name]: value,
            })
        })
        setHealthDetails(health)
    };
    let checkHealth = async () => {
        let uId = localStorage.getItem('user-id');
        const docRef = doc(db, "health", `${uId}`);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            navigate('/home')
        }
      
    }
    useEffect(() => {

        checkHealth();
        getData();
        }, [])
    const handleclick = async () => {
        let uId = localStorage.getItem('user-id');
        await setDoc(doc(db, "health", `${uId}`), healthDetails);
        console.log("Add")
        navigate('/home')
    }
    console.log(healthDetails)


    return (
        <div className="h-[100vh] gradient_wall p-4 flex items-start justify-center overflow-hidden w-[100vw]">
            <div className=" w-[100%] space-y-8">
                <div className=" flex items-centre justify-start">
                    <img onClick={handleBack} src={leftarrow}></img>
                </div>
                <div className=" flex items-center justify-center">
                    <h1 className="text-3xl font-extrabold ">Enter Your Details</h1>
                </div>
                <div className=" space-y-6 ">
                    <div className="flex items-center justify-center">
                        <Input
                            onChange={handleChange}
                            upper="Blood Group"
                            type="text"
                            name="Bloodgroup"
                            placeholder="eg: O+ , AB- etc."
                        />
                    </div>
                    <div className="flex items-center justify-center">
                        <Input
                            onChange={handleChange}
                            upper="Previous Vaccinations"
                            type="text"
                            name="vaccinations"
                            placeholder="eg: covid 19 , Polio etc."
                        />
                    </div>
                    <div className="flex items-center justify-center">
                        <Input
                            onChange={handleChange}
                            upper="Chronic Illness"
                            type="text"
                            name="Illness"
                            placeholder="eg: cancer, diabetes etc."
                        />
                    </div>
                    <div className="flex items-center justify-center">
                        <Input
                            onChange={handleChange}
                            upper="Allergies"
                            type="text"
                            name="allergy"
                            placeholder="eg: dust, medicine side effect etc."
                        />
                    </div>
                    <div className="flex items-center justify-center">
                        <Input
                            onChange={handleChange}
                            upper="Emergency Contact Number"
                            type="tel"
                            name="EmergencyContact"
                            placeholder="e.g., +91 XXXXXXXXXX"
                        />
                    </div>
                </div>
                <div className='   w-[100%] flex items-center justify-center '>
                    <div className='mt-[15px] flex rounded-lg shadow-md drop-shadow-md  p-3  w-[80%] items-center gradient_button justify-center'>
                        <button onClick={handleclick} className='text-xl font-bold text-white '>Done</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;
