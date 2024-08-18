import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const EditEmp = () => {

  let navigate=useNavigate();
  const {id}=useParams();

  const [formData, setFormData] = useState({
    empName: "",
    empField: "",
    mobileNum: "",
  });

  //useEffect hook for load employee data

  useEffect(()=>{
    loadEmp();
  },[]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit =async (e) => {
    e.preventDefault();
    
    // Handle form submission logic here
     await axios.put(`http://localhost:8080/emp/${id}`,formData)
     navigate("/")
  };

  //For loading all information automatically
  const loadEmp =async ()=>{
    const result=await axios.get(`http://localhost:8080/emp/${id}`)
    setFormData(result.data);
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Edit Form</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="empName" className="block text-sm font-medium text-gray-700">
              Employee Name
            </label>
            <input
              type="text"
              name="empName"
              id="empName"
              value={formData.empName}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter your name"
              required
            />
          </div>
          <div>
            <label htmlFor="empField" className="block text-sm font-medium text-gray-700">
              Employee Field
            </label>
            <input
              type="text"
              name="empField"
              id="empField"
              value={formData.empField}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter your field"
              required
            />
          </div>
          <div>
            <label htmlFor="mobileNum" className="block text-sm font-medium text-gray-700">
              Mobile Number
            </label>
            <input
              type="text"
              name="mobileNum"
              id="mobileNum"
              value={formData.mobileNum}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter your mobile number"
              required
            />
          </div>
          <div className="text-center space-x-4">
            <button
              type="submit"
              className=" py-2 px-4  hover:bg-indigo-600 hover:text-white text-blue-600 font-medium rounded-md shadow-sm border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Submit
            </button>
            <Link
              type="submit"
              to={"/"}
              className=" py-2 px-4 hover:bg-red-600 hover:text-white text-red-600 font-medium rounded-md shadow-sm border border-red-300 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};




export default EditEmp;


