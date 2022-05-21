import React, { useContext, useState } from 'react'
import Header from '../../Components/Header/Header'
import { RandomContext } from '../../context/RandomContex';
import { ImCross } from 'react-icons/im'

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
            console.log(randomDish)
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
    { mountModal ? <div className={ dishSelected ? "fixed inset-1/2 -translate-x-1/2 -translate-y-1/2 w-5/6 h-5/6 bg-white border overflow-scroll ease-linear duration-300 scale-1" : "fixed inset-1/2 -translate-x-1/2 -translate-y-1/2 w-5/6 h-5/6 bg-white ease-linear duration-300 scale-0" }>
        <div className="flex justify-between container h-20 items-center">
        <h1 className="flex-1 text-3xl text-red-500">{dishSelected ? selectedDish.strMeal : 'placeholder'}</h1>
        <ImCross className="cursor-pointer p-1 text-3xl" onClick={closeModal}/>
        </div>
        <div className="container h-full">
        <img src={selectedDish.strMealThumb} className="h-1/2 rounded-lg"/>
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
    </div> : ''}
      
      <div className="flex flex-col bg-red-500 w-3/5 rounded-2xl justify-self-center cursor-pointer" key={randomDish.idMeal} onClick={() => openModal()} onMouseEnter={() => chooseDish(randomDish)}>
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
    </>
  )
}

export default Random