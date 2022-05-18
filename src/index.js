import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Results from './Pages/Results/Results';
import { ResultContextProvider } from './context/ResultContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ResultContextProvider>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<App />}/>
    <Route path='/results' element={<Results/>}/>
    </Routes>
    </BrowserRouter>
    </ResultContextProvider>
  </React.StrictMode>
);