import React from 'react'

const Modal = ({dish, state}) => {
  return (
    <div className={state ? "fixed inset-1/2 -translate-x-1/2 -translate-y-1/2 w-5/6 h-5/6 bg-white ease-linear duration-300 scale-1" : "scale-0 fixed inset-1/2 -translate-x-1/2 -translate-y-1/2 w-5/6 h-5/6 bg-white ease-linear duration-300"}>
        <h1 className="">{dish.strMeal}</h1>
    </div>
  )
}

export default Modal