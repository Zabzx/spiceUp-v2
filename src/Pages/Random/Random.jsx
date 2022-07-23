import React, { useContext, useState } from 'react'
import Header from '../../Components/Header/Header'
import { RandomContext } from '../../context/RandomContex';
import Modal from '../../Components/Modal/Modal';
import { AnimatePresence } from 'framer-motion';

const Random = () => {

    // State
    const [showModal, setShowModal] = useState(false);
    const [selectedDish, setSelectedDish] = useState();

    const [favpage, setFavpage] = useState(true);

  // Context
  const [randomDish, setRandomDish] = useContext(RandomContext);

  // Functions

    // New random dish
    async function getRandomDish() {
      await fetch("https://www.themealdb.com/api/json/v1/1/random.php")
      .then(res => res.json())
      .then(res => {
        setRandomDish(res.meals[0]);
      })
    }

    // Open modal
    const openModal = () => {
      setShowModal(true);
    }

    // Close modal
    const closeModal = () => {
      setShowModal(false);
    }

  return (
    <div className="randoms-page overflow-hidden h-full">
      <Header/>
      <AnimatePresence>
      { showModal ? <Modal selectedDish={randomDish} favPage={favpage} closeModal={closeModal}/> : ''}
      </AnimatePresence>
      <div className="bg-red-500 sm:w-1/4 w-3/4 mx-auto rounded-lg mt-5 cursor-pointer overflow-hidden" key={randomDish.idMeal} onClick={() => openModal()}>
                <div className="dish-img">
                <img className="w-full object-cover rounded-t-lg" src={randomDish.strMealThumb} alt="" />
                </div>

                <div className="dish-info">
                <h1 className='text-white text-center text-4xl pt-3 font-dancing-script'>{randomDish.strMeal}</h1>
                <p className="px-6 mt-5 text-white text-lg">Region: {randomDish.strArea}</p>
                <p className="px-6 text-white category text-lg">Category: {randomDish.strCategory}</p>
                <p className="tags px-6 pb-5 text-white text-lg">Tags: {randomDish.strTags}</p>
                </div>
            </div>

            <button className="try-again-btn absolute sm:right-52 right-1/2 my-3 -translate-x-1/2 bg-red-500 p-3 rounded-lg text-white" onClick={getRandomDish}>Try Again</button>
    </div>
  )
}

export default Random