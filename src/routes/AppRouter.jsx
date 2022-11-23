import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<h1>Home</h1>} />
            <Route path="login" element={<h1>Login</h1>} />
        </Routes>
    </BrowserRouter>
  )
}
