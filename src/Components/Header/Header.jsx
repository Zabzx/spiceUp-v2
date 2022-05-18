import React from 'react'
import { Link, link } from 'react-router-dom'

const Header = () => {
  return (
    <nav className="h-28 flex justify-between items-center container mx-auto">
      <Link to='/results'>
        <div className="flex-1">
        <button className="favorites-btn bg-red-500 py-2 px-2 rounded-md text-white text-xl" >Favorites</button>
        </div>
        </Link>

        <h1 className="flex justify-center flex-1 text-red-500 text-4xl">spiceUp!</h1>

        <div className="flex flex-1 justify-end">
        <input placeholder='Search for a meal' type="text" className="w-3/5 p-1 border-2 rounded-xl border-gray-400 focus:outline-none" />
        </div>
    </nav>
  )
}

export default Header