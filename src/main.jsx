import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App.jsx'
import "./index.css"
import CryptoResume from './pages/CryptoResume/CryptoResume.jsx'
import { Home } from './pages/Home/Home.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} >
                <Route index element={<Home />} />
                <Route path='cryptocurrencies' element={<CryptoResume />}/>
            </Route>
        </Routes>
    </BrowserRouter>
)
