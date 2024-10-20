import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import { update } from "firebase/database";
import { setDoc } from "firebase/firestore";

const Aaddhosp = () => {
  const uId = localStorage.getItem('user-id')
  const [updatedHos, setUpdatedHos] = useState({
    name: "",
  })

  const [newHos, setNewHos] = useState({
    hospitalName:"",
    city:"",
    mobile:"",
    ratings:""})

  const getHospital = async () => {
    const docRef = doc(db, "hospitals", `${uId}`);
    const docSnap = await getDoc(docRef);


    if (docSnap.exists()) {
      setUpdatedHos(docSnap.data().HosData)
      console.log("Document data:", docSnap.data().HosData);
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewHos((prev) => {
      return ({
        ...prev,
        [name]: value
      })
    })
  }
  useEffect(() => {
    getHospital()



  }, [])
  const handleClick = async (e) => {
    e.preventDefault()
    await setDoc(doc(db, "hospitals", `${uId}`), {
      HosData: [...updatedHos, {
        name:newHos.hospitalName,
        mobile:newHos.mobile,
        address:newHos.city,
        rating:newHos.ratings,
      }]
    });

    console.log('first')

  }
  // console.log(updatedHos)
  console.log(newHos)
  return (
    <div>
      <div className="h-fit gradient_wall p-4 flex items-start justify-center  w-[100vw]">
        <div className="  w-[100%] space-y-2">
          <nav className="bg-white shadow">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between h-16">
                <div className="flex">
                  {/* Logo/Title */}
                  <div className="flex-shrink-0 flex items-center">
                    <span className="text-xl font-bold">
                      Hospital Admin Dashboard
                    </span>
                  </div>
                  {/* Navigation Links */}
                  <div className="hidden sm:-my-px sm:ml-6 sm:flex">
                    <Link className="inline-flex items-center px-4 py-2 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300" to="/adash">Home</Link>

                    <Link className="inline-flex items-center px-4 py-2 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300" to="/aaddhosp">Add Hospitals</Link>
                  </div>
                </div>
                {/* Logout Button */}
                <div className="hidden sm:flex sm:items-center sm:ml-6">
                  <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700 transition duration-150 ease-in-out">
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </nav>

          <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-semibold text-gray-800 mb-6">
              Add New Hospital
            </h1>
            {/* Hospital Form */}
            <form className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4">
              {/* Hospital Name */}
              <div className="mb-4">
                <label
                  htmlFor="hospitalName"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Hospital Name
                </label>
                <input onChange={handleChange}
                  type="text"
                  id="hospitalName"
                  name="hospitalName"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                  placeholder="Enter hospital name"
                  required=""
                />
              </div>
              {/* Age in Years */}
              <div className="mb-4">
                <label
                  htmlFor="ageInYears"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Age of Hospital (in years)
                </label>
                <input
                  type="text"
                  id="ageInYears"
                  name="ageInYears"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                  placeholder="Enter age of hospital in years"
                  min={0}
                  required=""
                />
              </div>
              {/* City and State */}
              <div className="mb-4 grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="city"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    City
                  </label>
                  <input onChange={handleChange}
                    type="text"
                    id="city"
                    name="city"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                    placeholder="Enter city"
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="state"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    State
                  </label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                    placeholder="Enter state"
                    required=""
                  />
                </div>
              </div>
              {/* Password */}
              <div className="mb-4">
                <label
                  htmlFor="Contact Number"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Enter Contact Number
                </label>
                <input onChange={handleChange}
                  type="text"
                  id="password"
                  name="mobile"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                  placeholder="Enter Contact Number"
                  required=""
                />
              </div>
              {/* Government ID */}
              <div className="mb-4">
                <label
                  htmlFor="Ratings"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Enter ratings 
                </label>
                <input onChange={handleChange}
                  type="text"
                  id="governmentId"
                  name="ratings"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                  placeholder="Enter Rating"
                  required=""
                />
              </div>
              {/* Owner Information */}
              <div className="mb-6">
                <label
                  htmlFor="ownerInfo"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Owner Information
                </label>
                <textarea
                  id="ownerInfo"
                  name="ownerInfo"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                  placeholder="Enter owner information"
                  rows={3}
                  required=""
                  defaultValue={""}
                />
              </div>
              {/* Submit Button */}
              <div className="flex justify-center">
                <button
                onClick={handleClick}
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
                >
                  Add Hospital
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aaddhosp;
