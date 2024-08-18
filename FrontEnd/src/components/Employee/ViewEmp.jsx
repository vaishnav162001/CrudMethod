import axios from "axios";
import React, { useEffect }  from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";

const ViewEmp = () => {
     const [emp, setEmp] = useState({
        empName:"",
        empField:"",
        mobileNum:""
     });

     //for param
     const {id}=useParams();

     useEffect(()=>{
        loadEmp();
      },[]);

     //for loading employee detail
       const loadEmp=async ()=>{
        const result=await axios.get(`http://localhost:8080/emp/${id}`)
        setEmp(result.data);
       }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Employee Detail
        </h2>
        <div>
            <ul className="text-black">
                <li className="text-black"><b>Id: </b>{emp.id}</li>
                <li className="text-black"><b>Name: </b>{emp.empName}</li>
                <li><b>Field: </b>{emp.empField}</li>
                <li><b>Mobile Number: </b>{emp.mobileNum}</li>
            </ul>
        </div>
        <Link to={"/"} className="hover:text-blue-600 text-gray-500  ">Back to Home</Link>
      </div>
    </div>
  );
};

export default ViewEmp;
