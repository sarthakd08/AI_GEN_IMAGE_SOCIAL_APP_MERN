import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {BrowserRouter, Route, Routes, Link} from "react-router-dom"
import './App.css'
import {Home, CreatePost} from "./Pages"

function App() {

  return (
    <>
      <BrowserRouter>
        <header className='w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e4e4e4]'>
          <Link to="/">
            <img src="/vite.svg" alt="logo" className='w-20 h-12 object-contain'/>
          </Link>

          <Link to="/create-post"
            className='font-medium bg-[#6469ff] text-white px-2 py-4 rounded-md'>
              Create
          </Link>
        </header>

        <main className='w-full sm:p-8 px-4 py-8 bg-gray-100 min-h-[calc(100vh-73px)]'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create-post" element={<CreatePost />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  )
}

export default App
