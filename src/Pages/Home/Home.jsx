import React, { useContext } from 'react'
import { RandomContext } from '../../context/RandomContex';
import { useNavigate } from 'react-router-dom';

const Home = () => {

  let navigate = useNavigate();

  // Context
  const [randomDish, setRandomDish] = useContext(RandomContext);

  async function getRandomDish() {
    await fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    .then(res => res.json())
    .then(res => {
      setRandomDish(res.meals[0])
      navigate('/random');
    })
  }

  return (
    <>
    <div className="bg-hero-img relative h-full bg-cover">
      <h1 className="text-white relative z-10 text-center text-4xl mt-40 w-2/4 mx-auto">Find recipes to dishes from all over the world with just the click of a button!</h1>
      <div className="black-overlay absolute inset-0 h-full bg-black opacity-80"></div>

    <div className="random-btn text-center mt-28">
      <button className="relative z-10 bg-white py-5 px-4 rounded-lg border-0 text-4xl font-dancing-script" onClick={getRandomDish}>Random Dish</button>
      </div>
    </div>
    </>
  )
}

export default Home