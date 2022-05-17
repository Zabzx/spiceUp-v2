import React from 'react'
import Header from '../../Components/Header/Header'

const Home = () => {
  return (
    <>
    <div className="bg-hero-img relative h-full bg-cover">
      <h1 className="text-white relative z-10 text-center text-4xl mt-40 w-2/4 mx-auto">Find recipes to dishes from all over the world with just the click of a button!</h1>
      <div className="black-overlay absolute inset-0 h-full bg-black opacity-80"></div>

    <div className="random-btn text-center mt-28">
      <button className="relative z-10 bg-white py-5 px-4 rounded-lg border-0 text-4xl font-dancing-script">Random Dish</button>
      </div>
    </div>
    </>
  )
}

export default Home