import React, { useContext, useState } from 'react'
import Header from '../../Components/Header/Header';
import { ResultContext } from '../../context/ResultContext';
import { SearchedForContext } from '../../context/SearchedFor';
import Modal from '../../Components/Modal/Modal';

const Results = () => {

    // State
    const [mountModal, setMountModal] = useState(false);
    const [dishSelected, setDishSelected] = useState(false)
    const [selectedDish, setSelectedDish] = useState();

    // Context
    const [results, setResults] = useContext(ResultContext);
    const [searchedFor, setSearchedFor] = useContext(SearchedForContext);

    // Functions
    // Initially chosing a dish to be displayed when a user hovers over a result item.
    const chooseDish = (dish) => {
        if (dishSelected) {
            return
        } else {
            setSelectedDish(dish);
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

  return (
    <>
    <Header/>
    {/* Modal */}
    { mountModal ? <Modal state={dishSelected} selectedDish={selectedDish} closeModal={closeModal}/> : ''}
    {/* Grid */}

    <h1 className="text-3xl text-center pt-5 font-dancing-script">Results for {searchedFor}</h1>

    <div className="pt-20 grid grid-cols-3 gap-y-10 items-center w-full">
        {results.map((dish) => (
            <div className="flex flex-col bg-red-500 w-3/5 rounded-2xl justify-self-center cursor-pointer" key={dish.idMeal} onClick={() => openModal(dish)} onMouseEnter={() => chooseDish(dish)}>
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
    </div>
    </>
  )
}

export default Results