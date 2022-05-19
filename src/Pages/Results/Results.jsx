import React, { useContext, useState } from 'react'
import Header from '../../Components/Header/Header';
import Modal from '../../Components/Modal/Modal';
import PlaceHolderImage from '../../assets/hero.jpg';
import { ResultContext } from '../../context/ResultContext';

const Results = () => {

    // State
    const [modal, setModal] = useState(false);
    const [selectedDish, setSelectedDish] = useState();

    // Context
    const [results, setResults] = useContext(ResultContext);

    // Functions
    const openModal = (dish) => {
         setSelectedDish(dish)
        setModal(!modal);
        console.log(selectedDish)
    }

  return (
    <>
    <Header/>
    <Modal dish={selectedDish} state={modal}/>
    <div className="pt-20 grid grid-cols-3 gap-y-10 items-center w-full bg-gray-300">
        {results.map((dish) => (
            <div className="flex flex-col bg-red-500 w-3/5 rounded-2xl justify-self-center" key={dish.idMeal} onClick={() => openModal(dish)}>
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