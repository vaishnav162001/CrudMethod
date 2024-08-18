import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const AddEmp = () => {

  let navigate=useNavigate()
  const [formData, setFormData] = useState({
    empName: "",
    empField: "",
    mobileNum: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit =async (e) => {
    e.preventDefault();
    
    // Handle form submission logic here
     await axios.post("http://localhost:8080/emp",formData)
     navigate("/")
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Registration Form</h2>
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




export default AddEmp;

{
  /* <htmlhtmlForm

className="text-black border-2 shadow-xl flex flex-col"
>

  <input
    type="text"
    placeholder="Name"
    
  />


<input
  type="number"
  placeholder="Mobile Number"
  {...register("age", { required: true, maxLength: 10 })}
/>

</htmlhtmlForm> */
}
