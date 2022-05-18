import { createContext, useState } from "react";

export const ResultContext = createContext();

export const ResultContextProvider = (props) => {
    const [results, setResults] = useState();

    return (
        <ResultContext.Provider value={[results, setResults]}>
            {props.children}
        </ResultContext.Provider>
    )
};