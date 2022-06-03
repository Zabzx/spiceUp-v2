import React, { useState, useRef, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ResultContext } from '../../context/ResultContext';
import { SearchedForContext } from '../../context/SearchedFor';

const Header = () => {

  // State
  const [userSearchValue, setUserSearchValue] = useState('');
  const [dishResults, setDishResults] = useState([]);

  // Refs
  let dishRef = useRef();

  // Context
  const [results, setResults] = useContext(ResultContext);
  const [searchedFor, setSearchedFor] = useContext(SearchedForContext);

  let navigate = useNavigate();

  // Functions
  async function dishSearch(e) {
    e.preventDefault();
    setSearchedFor(userSearchValue);
    await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${userSearchValue}`)
    .then(res => res.json())
    .then(res => {
      
      if (res.meals == null) {
        console.log('error')
        navigate('/search-error')
      } else {
        dishRef = res.meals;
      setResults(dishRef)
      navigate('/results')
      }
    })
  };

  const goToFavorites = () => {
    navigate('/favorites')
  }

  return (
    <nav className="sm:h-28 h-14 flex justify-between items-center sm:container sm:mx-auto">
        <div className="sm:flex-1">
        <button className="favorites-btn sm:text-xl p-1 bg-red-500 sm:py-2 sm:px-2 rounded-md text-white text-sm" onClick={goToFavorites}>Favorites</button>
        </div>

        <Link to={'/'}>
        <h1 className="flex justify-center flex-1 text-red-500 text-lg sm:text-4xl">spiceUp!</h1>
        </Link>

        <form className="flex sm:flex-1 justify-end" onSubmit={(e) => dishSearch(e)}>
        <input placeholder='Search for a meal' type="text" className="sm:w-3/5 sm:h-10 h-5 w-full p-1 border-2 rounded-xl border-gray-400 focus:outline-none" onChange={(e) => setUserSearchValue(e.target.value)} />
        </form>
    </nav>
  )
}

export default Header