import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Results from './Pages/Results/Results';
import Random from './Pages/Random/Random';
import { ResultContextProvider } from './context/ResultContext';
import { SearchedForContextProvider } from './context/SearchedFor';
import { RandomContextProvider } from './context/RandomContex';
import SearchError from './Pages/Search-Error/SearchError';
import Favorites from './Pages/Favorites/Favorites';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ResultContextProvider>
    <SearchedForContextProvider>
    <RandomContextProvider>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<App />}/>
    <Route path='/results' element={<Results/>}/>
    <Route path='/random' element={<Random/>}/>
    <Route path='/search-error' element={<SearchError/>}/>
    <Route path='/favorites' element={<Favorites/>}/>
    </Routes>
    </BrowserRouter>
    </RandomContextProvider>
    </SearchedForContextProvider>
    </ResultContextProvider>
);