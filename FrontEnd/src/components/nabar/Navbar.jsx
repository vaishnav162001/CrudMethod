import React from 'react'
import { Link } from 'react-router-dom'

const  Navbar = () => {
  return (
   <nav className='flex justify-between p-1 bg-blue-500 text-white items-center'>
    <h1 className='text-3xl items-center font-bold tracking-tighter'>Crud Fullstack App</h1>
    <ul className='flex gap-5 text-xl'>
    <li>All Employee</li>
        <Link to="/addemp">Add Employee</Link>
    </ul>
   </nav>
  )
}

export default Navbar