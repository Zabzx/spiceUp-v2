import React, { useEffect, useState } from 'react';
import Header from '../../Components/Header/Header.jsx';
import Modal from '../../Components/Modal/Modal.jsx';
import {  useNavigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

const Favorites = () => {

    let navigate = useNavigate

    // State
    const [showModal, setShowModal] = useState(false);
    const [selectedDish, setSelectedDish] = useState();
    const [favpage, setFavpage] = useState(false);

    // Functions

    // Clear favorites
    const clearFavorites = () => {
        localStorage.clear();
        document.location.reload();
    }

    // Open modal
    const openModal = (dish) => {
        setSelectedDish(dish);
        setShowModal(true);
    }

    const closeModal = () => {
        setShowModal(false);
    }

  return (
    <>
    <Header/>
    <AnimatePresence>
    { showModal ? <Modal selectedDish={selectedDish} closeModal={closeModal} favPage={favpage}/> : ''}
    </AnimatePresence>
    
    { localStorage.getItem('favoriteDishes') !== null ? <div className='text-center'> <button className='p-4 bg-red-500 rounded-lg text-white' onClick={clearFavorites}>Clear Favorites</button> <div className="pt-20 grid sm:grid-cols-3 gap-y-10 items-center w-full">
        {JSON.parse(localStorage.getItem('favoriteDishes')).map((dish) => (
            <div className="flex flex-col bg-green-500 w-3/5 rounded-2xl justify-self-center cursor-pointer" key={dish.idMeal} onClick={() => openModal(dish)}>
                <div className="dish-img">
                <img className="w-full object-cover rounded-t-lg" src={dish.strMealThumb} alt="" />
                </div>
                <div className="dish-info">
                <h1 className='text-white text-center text-4xl pt-3 font-dancing-script'>{dish.strMeal}</h1>
                <p className="px-6 mt-5 text-white text-lg">Region: {dish.strArea}</p>
                <p className="px-6 text-white category text-lg">Category: {dish.strCategory}</p>
                <p className="tags px-6 pb-5 text-white text-lg">Tags: {dish.strTags}</p>
                </div>
            </div>
        ))}
    </div> </div> : <h1 className="text-center mt-10 text-3xl">No favorites yet</h1>}
    </>
  )
}

export default Favorites