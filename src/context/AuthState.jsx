import React from 'react'
import authContext from './authContext'
import { useState } from 'react';
import { doc, getDoc } from "firebase/firestore";
import { db } from '../firebase';
import { collection, query, where, getDocs } from "firebase/firestore";






const AuthState = ({ children }) => {
  const [uid, setUid] = useState("");
  const [initialUserDet, setinitialUserDet] = useState()
  const [healthDetails, setHealthDetails] = useState({})
  const [appointmentDetails, setappointmentDetails] = useState(null)
  
  let uId = localStorage.getItem('user-id');

  const getData = async () => {

    const docRef = doc(db, "users", `${uId}`);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const userData = docSnap.data()
      setinitialUserDet(userData)
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
  }
  const getAppointments = async () => {
    const docRef = doc(db, "appointments", `${uId}`);
    const docSnap = await getDoc(docRef);


    if (docSnap.exists()) {
      console.log("Document data:", ...docSnap.data().Appointments);
      setappointmentDetails([...docSnap.data().Appointments])
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
  }
  
  return (
    <authContext.Provider value={{
      uid, setUid, initialUserDet, setinitialUserDet, getData, healthDetails, setHealthDetails, getAppointments, appointmentDetails, setappointmentDetails,
    }} >
      {children}
    </authContext.Provider>
  )
}

export default AuthState