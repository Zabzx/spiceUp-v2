import React, { useContext, useState } from 'react'
import Header from '../../Components/Header/Header'
import { RandomContext } from '../../context/RandomContex';
import { ImCross } from 'react-icons/im'
import Modal from '../../Components/Modal/Modal';

const Random = () => {

    // State
    const [mountModal, setMountModal] = useState(false);
    const [dishSelected, setDishSelected] = useState(false);
    const [selectedDish, setSelectedDish] = useState();

  // Context
  const [randomDish, setRandomDish] = useContext(RandomContext);

  // Functions
      // Initially chosing a dish to be displayed when a user hovers over a result item.
      const chooseDish = () => {
        if (dishSelected) {
            return
        } else {
            setSelectedDish(randomDish);
            setMountModal(true)
        }
    }

    // Opens the modal
    const openModal = () => {
        setDishSelected(true)
    }

    // Closes the modal
    const closeModal = () => {
        setDishSelected(false);
    }

    // New random dish
    async function getRandomDish() {
      await fetch("https://www.themealdb.com/api/json/v1/1/random.php")
      .then(res => res.json())
      .then(res => {
        setRandomDish(res.meals[0]);
      })
    }

  return (
    <>
      <Header/>

          {/* Modal */}
      { mountModal ? <Modal state={dishSelected} selectedDish={selectedDish} closeModal={closeModal}/> : ''}
      <div className="bg-red-500 w-1/4 mx-auto rounded-lg mt-5 cursor-pointer" key={randomDish.idMeal} onClick={() => openModal()} onMouseEnter={() => chooseDish(randomDish)}>
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

            <button className="try-again-btn absolute right-52 bg-red-500 p-3 rounded-lg text-white" onClick={getRandomDish}>Try Again</button>
    </>
  )
}

export default Random