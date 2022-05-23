import React from 'react'
import Header from '../../Components/Header/Header'
import SearchGif from '../../assets/search.gif'

const SearchError = () => {
  return (
    <>
    <Header/>
    <div>
        <h1 className="text-center text-5xl mt-36">Sorry, dish not found :(</h1>
        <img className="mx-auto mt-10 rounded" src={SearchGif} alt="" />
    </div>
    </>
  )
}

export default SearchError