import React, { useContext, useEffect } from 'react'
import Header from '../../Components/Header/Header';
import PlaceHolderImage from '../../assets/hero.jpg';
import { ResultContext } from '../../context/ResultContext';

const Results = () => {

    const array = [
        {
            id: 1,
            dishName: 'Dish Name 1',
            type: 'Breakfast'
        },
        {
            id: 2,
            dishName: "Dish Name 2",
            type: 'Lunch'
        }, 
        {
            id: 3,
            dishName: "Dish Name 3",
            type: 'Dinner'
        },
        {
            id: 3,
            dishName: "Dish Name 3",
            type: 'Dinner'
        }
    ]

    const [results, setResults] = useContext(ResultContext);

  return (
    <>
    <Header/>
    <div className="mt-20 grid grid-cols-3 gap-y-10 items-center w-full">
        {results.map((dish) => (
            <div className="flex flex-col bg-red-500 w-3/5 rounded-2xl justify-self-center" key={dish.idMeal}>
                <div className="dish-img">
                <img className="w-full object-cover" src={dish.strMealThumb} alt="" />
                </div>

                <div className="dish-info">
                <h1 className='text-white text-center text-2xl pt-3 font-dancing-script'>{dish.strMeal}</h1>
                <p className="px-6 py-20 text-white">Region: {dish.strArea}</p>
                </div>
            </div>
        ))}
    </div>
    </>
  )
}

export default Results