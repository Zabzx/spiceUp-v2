import React, { useEffect, useContext, useState } from 'react'
import { ImCross } from 'react-icons/im'
import { AiOutlineCheck } from 'react-icons/ai'
import { FavoritesContext } from '../../context/FavoritesContext'
import { motion } from 'framer-motion';

const Modal = ({selectedDish, closeModal, favPage}) => {

  // Context
  const [favoritesContext, setFavoritesContext] = useContext(FavoritesContext);

  // State
  const [addedToFavorites, setAddedToFavorites] = useState(false);
  const [dishAlreadyAdded, setDishAlreadyAdded] = useState(false);

  // Functions

  useEffect(() => {
    let existingStorage = JSON.parse(localStorage.getItem('favoriteDishes'));

    if (localStorage.getItem('favoriteDishes') === null) {
      return
    }

    if (favoritesContext.length === 0) {
      setFavoritesContext(existingStorage)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('favoriteDishes', JSON.stringify(favoritesContext))
  }, [favoritesContext]);

  const addToFavorites = (dish) => {
    if (favoritesContext.includes(dish)) {
      setDishAlreadyAdded(true);
      return
    }
    setFavoritesContext([dish, ...favoritesContext]);
    setAddedToFavorites(true)
  }

    // Dish already added alert
    useEffect(() => {
      setTimeout(() => {
        setDishAlreadyAdded(false);
      }, 3000)
    }, [dishAlreadyAdded])

    // Add to favorites alert
    useEffect(() => {
      setTimeout(() => {
        setAddedToFavorites(false);
      }, 5000)
    }, [addToFavorites]);

  return (
    <>
    {/* Added to favorites alert */}
    { addedToFavorites ? <div className="absolute inset-x-1/2 -translate-x-1/2 border-2 border-red-500 rounded-lg flex justify-around items-center w-80 h-40 text-3xl bg-white z-20">
      <h1>Added to favorites</h1>
      <AiOutlineCheck className="text-green-500"/>
    </div> : ''}


    {/* Dish already added alert */}
    { dishAlreadyAdded ? <div className="absolute inset-x-1/2 -translate-x-1/2 border-2 border-red-500 rounded-lg flex justify-around items-center w-80 h-40 text-3xl bg-white z-20">
      <h1>Dish already added</h1>
      <ImCross className="text-red-500"/>
    </div> : ''}

    <div className="modal-container absolute flex w-full h-90 justify-center overflow-hidden">
    <motion.div className="relative w-5/6 h-5/6 bg-white overflow-y-scroll overflow-x-hidden rounded-2xl shadow-2xl z-10" animate={{ opacity: 1, x: 0}} initial={{opacity: 0, x: 200}} exit={{ scale: .8, opacity: 0}}>
        <div className="flex justify-between sm:container mx-2 h-20 items-center">
        <h1 className="flex-1 sm:text-3xl text-xl text-red-500">{selectedDish.strMeal}</h1>
        <ImCross className="cursor-pointer p-1 text-3xl" onClick={closeModal}/>
        </div>
        <div className="sm:container mx-2 h-full">
        <img src={selectedDish.strMealThumb} className="h-1/2 rounded-lg"/>

        { favPage ? <button className="p-4 bg-red-500 text-white rounded-lg mt-5" onClick={() => addToFavorites(selectedDish)}>Add to Favorites</button> : ''}
        <h1 className="text-3xl text-red-500 py-10">Instructions:</h1>
        <p className="pt-4">{selectedDish.strInstructions}</p>

        {/* Ingredients */}
        <h1 className="text-red-500 text-3xl mt-20">Ingredients:</h1>
        <ul className="list-disc">
        <li>{selectedDish.strIngredient1 + " " + selectedDish.strMeasure1}</li>
        <li>{selectedDish.strIngredient2 + " " + selectedDish.strMeasure2}</li>
        <li>{selectedDish.strIngredient3 + " " + selectedDish.strMeasure3}</li>
        <li>{selectedDish.strIngredient4 + " " + selectedDish.strMeasure4}</li>
        <li>{selectedDish.strIngredient5 + " " + selectedDish.strMeasure5}</li>
        <li>{selectedDish.strIngredient6 + " " + selectedDish.strMeasure6}</li>
        <li>{selectedDish.strIngredient7 + " " + selectedDish.strMeasure7}</li>
        <li>{selectedDish.strIngredient8 + " " + selectedDish.strMeasure8}</li>
        <li>{selectedDish.strIngredient9 + " " + selectedDish.strMeasure9}</li>
        <li>{selectedDish.strIngredient10 + " " + selectedDish.strMeasure10}</li>
        <li>{selectedDish.strIngredient11 + " " + selectedDish.strMeasure11}</li>
        <li>{selectedDish.strIngredient12 + " " + selectedDish.strMeasure12}</li>
        <li>{selectedDish.strIngredient13 + " " + selectedDish.strMeasure13}</li>
        <li>{selectedDish.strIngredient14 + " " + selectedDish.strMeasure14}</li>
        <li>{selectedDish.strIngredient15 + " " + selectedDish.strMeasure15}</li>
        <li>{selectedDish.strIngredient16 + " " + selectedDish.strMeasure16}</li>
        </ul>

        <div className="sm:my-10">
        <h1 className="text-3xl text-red-500">YouTube Link</h1>
        <a href={selectedDish.strYoutube} target="_blank"><p className='text-red-500 pb-10'>{selectedDish.strYoutube}</p></a>
        </div>
        </div>
    </motion.div>
    </div>
    </>
  )
}

export default Modal