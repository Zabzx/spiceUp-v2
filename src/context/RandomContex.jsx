import { createContext, useState } from 'react';

export const RandomContext = createContext();

export const RandomContextProvider = (props) => {
    const [randomDish, setRandomDish] = useState();

    return (
        <RandomContext.Provider value={[randomDish, setRandomDish]}>
            {props.children}
        </RandomContext.Provider>
    )
}