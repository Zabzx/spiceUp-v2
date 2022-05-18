import React, { useState } from 'react'
import { Link, link } from 'react-router-dom'

const Header = () => {

  // State
  const [userSearchValue, setUserSearchValue] = useState('');
  const [dishResults, setDishResults] = useState([]);

  // Functions
  async function dishSearch(e) {
    e.preventDefault();
    await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${userSearchValue}`)
    .then(res => res.json())
    .then(res => {
      setDishResults((prev) => prev + res.meals)
      console.log(dishResults)
    })
  }
  return (
    <nav className="h-28 flex justify-between items-center container mx-auto">
        <div className="flex-1">
        <button className="favorites-btn bg-red-500 py-2 px-2 rounded-md text-white text-xl" >Favorites</button>
        </div>

        <h1 className="flex justify-center flex-1 text-red-500 text-4xl">spiceUp!</h1>

        <form className="flex flex-1 justify-end" onSubmit={(e) => dishSearch(e)}>
        <input placeholder='Search for a meal' type="text" className="w-3/5 p-1 border-2 rounded-xl border-gray-400 focus:outline-none" onChange={(e) => setUserSearchValue(e.target.value)} />
        </form>
    </nav>
  )
}

export default Header