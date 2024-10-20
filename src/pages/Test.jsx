import React, { useContext, useEffect } from 'react'
import Loader from '../components/Loader'
import { doc, setDoc } from "firebase/firestore";
import { db } from '../firebase';
import Appointment from './Appointment';
import { getDoc } from "firebase/firestore";
import { useState } from 'react';
import authContext from '../context/authContext';
import { collection, query, where, getDocs } from "firebase/firestore";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  rating,
} from "@material-tailwind/react";

const Test = () => {
  const ID = localStorage.getItem("user-id")
  const [updated, setUpdated] = useState([])
  const { getAppointments, appointmentDetails, setappointmentDetails } = useContext(authContext);
  // const [docDetails, setDocDetails] = useState([])
  const hos = [
    { name: "Lilavati Hospital and Research Centre", mobile: "+1234567890", address:"Thane", rating:"4.5★" },
    { name: "Kokilaben Dhirubhai Ambani Hospital", mobile: "+1234567890", address:"Thane", rating:"4.5★" },
    { name: "Breach Candy Hospital", mobile: "+1234567890", address:"Thane", rating:"4.5★" },
    { name: "Hinduja Hospital", mobile: "+1234567890", address:"Thane", rating:"4.5★" },
    { name: "Tata Memorial Hospital", mobile: "+1234567890", address:"Thane", rating:"4.5★" },
    { name: "Bombay Hospital", mobile: "+1234567890", address:"Thane", rating:"4.5★" },
    { name: "Nanavati Super Speciality Hospital", mobile: "+1234567890", address:"Thane", rating:"4.5★" },
    { name: "Sir H. N. Reliance Foundation Hospital and Research Centre", mobile: "+1234567890", address:"Thane", rating:"4.5★" },
    { name: "Wockhardt Hospital", mobile: "+1234567890", address:"Thane", rating:"4.5★" }
  ]

  useEffect(() => {
    getAppointments()


  }, [])
  console.log(appointmentDetails)


  const handleClick = async () => {



    await setDoc(doc(db, "hospitals", `${ID}`), {
      HosData: hos
    })
    console.log("add")
  }

  const handleGet = async () => {

    // const querySnapshot = await getDocs(collection(db, "doctors"));
    // querySnapshot.forEach((doc) => {
    //   // doc.data() is never undefined for query doc snapshots
    //   setDocDetails((prev) => {
    //     return ([...prev, ...doc.data().DocData])
    //   })
    //   console.log(doc.id, " => ", ...doc.data().DocData);
    // });

  }
  // console.log(docDetails);

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  return (
   <div>
    <button onClick={handleClick}>Add</button>
   </div>
  );
}

export default Test