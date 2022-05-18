import React from 'react'
import Header from '../../Components/Header/Header';
import PlaceHolderImage from '../../assets/hero.jpg';

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
  return (
    <>
    <Header/>
    <div className="mt-20 grid grid-cols-3 gap-y-10 items-center w-full">
        {array.map((dish) => (
            <div className="bg-red-500 h-80 w-2/4 rounded-2xl justify-self-center">
                <img src={PlaceHolderImage} alt="" />
                <h1 className='text-white text-center text-2xl font-dancing-script'>{dish.type}</h1>
            </div>
        ))}
    </div>
    </>
  )
}

export default Results