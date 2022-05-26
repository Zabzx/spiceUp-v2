import { parse } from 'postcss'
import React, { useEffect, useContext, useState } from 'react'
import { ImCross } from 'react-icons/im'
import { FavoritesContext } from '../../context/FavoritesContext'

const Modal = ({selectedDish, state, closeModal}) => {

  // Context
  const [favoritesContext, setFavoritesContext] = useContext(FavoritesContext);

  // State
  const [favoriteDishes, setFavoriteDishes] = useState([]);
  const [readyForStorage, setReadyForStorage] = useState(false)

  // Functions

  useEffect(() => {
    if (favoritesContext === undefined) {
      return 
    } else {
      setFavoriteDishes(favoritesContext)
    }
  }, [])

  useEffect(() => {
    // if (localStorage.getItem('favoriteDishes') === null) {
    //   localStorage.setItem('favoriteDishes', favoriteDishes)
    // } else if (localStorage.getItem('favoriteDishes') === '') {
    //   localStorage.setItem('favoriteDishes', JSON.stringify(favoriteDishes))
    //   console.log(favoriteDishes)
    //   console.log(localStorage)
    // } else {
    //   let parsedStorage = JSON.parse(localStorage.getItem('favoriteDishes'))
    //   console.log(parsedStorage)
    // }

    if (!readyForStorage) {
      return
    } else {
      setFavoritesContext(favoriteDishes)
      localStorage.setItem('favoriteDishes', JSON.stringify(favoriteDishes))
    }
    
  }, [favoriteDishes])

  const addToFavorites = (dish) => {
    setReadyForStorage(true)
    setFavoriteDishes([dish, ...favoriteDishes])
  }

  return (

    <div className={ state ? "fixed inset-1/2 -translate-x-1/2 -translate-y-1/2 w-5/6 h-5/6 bg-white border border-black overflow-scroll ease-linear duration-300 scale-1" : "fixed inset-1/2 -translate-x-1/2 -translate-y-1/2 w-5/6 h-5/6 bg-white ease-linear duration-300 scale-0" }>
        <div className="flex justify-between container h-20 items-center">
        <h1 className="flex-1 text-3xl text-red-500">{selectedDish.strMeal}</h1>
        <ImCross className="cursor-pointer p-1 text-3xl" onClick={closeModal}/>
        </div>
        <div className="container h-full">
        <img src={selectedDish.strMealThumb} className="h-1/2 rounded-lg"/>

        <button className="p-4 bg-red-500 text-white rounded-lg mt-5" onClick={() => addToFavorites(selectedDish)}>Add to Favorites</button>
        <h1 className="text-3xl text-red-500 py-10">Instructions:</h1>
        <p className="pt-4">{selectedDish.strInstructions}</p>

        {/* Ingredients */}
        <h1 className="text-red-500 text-3xl mt-20 mb-10">Ingredients:</h1>
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

        <div className="my-10">
        <h1 className="text-3xl text-red-500">YouTube Link</h1>
        <a href={selectedDish.strYoutube} target="_blank"><p className='text-red-500 pb-10'>{selectedDish.strYoutube}</p></a>
        </div>
        </div>
    </div>
  )
}

export default Modal