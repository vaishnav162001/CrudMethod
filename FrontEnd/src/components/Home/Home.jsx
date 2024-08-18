import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const Home = () => {
  const [emp, setEmp] = useState([]);
  const {id}=useParams();
  useEffect(() => {
    loadEmp();
  }, []);

  const loadEmp = async () => {
    const result = await axios.get("http://localhost:8080/emps");
    setEmp(result.data);
  };

  //Delete the specific user
  const deleteEmp=async (id)=>{
    await axios.delete(`http://localhost:8080/emp/${id}`)
    loadEmp()
  }

  return (
    <div className="w-full h-full py-4 ">
      <div className="m-8">
        <table className="table-fixed  w-full h-full border shadow-xl  text-center">
          <thead className="border-2 border-black">
            <tr>
              <th>Index</th>
              <th>Name</th>
              <th>Field</th>
              <th>Mobile No.</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {emp.map((emp, index) => (
              <tr className="border" key={index}>
                <td>{index + 1}</td>
                <td>{emp.empName}</td>
                <td>{emp.empField}</td>
                <td>{emp.mobileNum}</td>
                <td>
                <Link
                    to={`/viewemp/${emp.id}`}
                    type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  >
                View
                  </Link>
                  <Link
                  to={`/editemp/${emp.id}`}
                    type="button"
                    className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    onClick={()=>deleteEmp(emp.id)}
                    className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
