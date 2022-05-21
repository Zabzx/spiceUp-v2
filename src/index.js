import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Results from './Pages/Results/Results';
import { ResultContextProvider } from './context/ResultContext';
import { SearchedForContextProvider } from './context/SearchedFor';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ResultContextProvider>
    <SearchedForContextProvider>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<App />}/>
    <Route path='/results' element={<Results/>}/>
    </Routes>
    </BrowserRouter>
    </SearchedForContextProvider>
    </ResultContextProvider>
  </React.StrictMode>
);