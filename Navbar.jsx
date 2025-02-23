
import React from 'react'
import { Link } from 'react-router-dom'
import { FaPlusSquare } from "react-icons/fa";

function Navbar() {
    return (
      <div className="flex w-full bg-sky-950 p-4">
      <nav className="w-full bg-sky-950 text-white py-4 px-20 rounded-lg">
        <div className="container mx-auto flex items-center justify-between">
          {/* Left: Logo & Title */}
          <Link to='/'>
          <h1 className="font-bold text-2xl">Product Store 🛒</h1>
          </Link>

         
          <div className="flex items-center space-x-4">
            <Link to="/create">
              <button className="text-white flex items-center gap-2 bg-sky-950 hover:underline px-4 py-2 rounded-lg transition duration-300 outline-0
              after:absolute after:left-1/2  after:w-0  after:bg-white 
  after:transition-all after:duration-300 after:-translate-x-1/2 hover:after:w-full">
                <FaPlusSquare /> Add Product
              </button>
            </Link>
            
            
            <button className="text-white bg-green-600 hover:bg-green-500 px-4 py-2 rounded-lg">
              Another Button
            </button>
          </div>
        </div>
      </nav>
    </div>
    )
}

export default Navbar