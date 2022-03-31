import React, { useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { AuthStateValue } from './context/AuthContext'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Profile from './pages/profile/Profile'
import Register from './pages/register/Register'
import Messenger from "./pages/messenger/Messenger"

function MyRoutes() {
  const { user, dispatch } = AuthStateValue()




  return (
    <Routes>

      <Route path="/" element={user ? <Home /> : <Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/profile/:id" element={<Profile />} />
      <Route path ="/messenger" element={<Messenger/>}/>
      <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />

    </Routes>
  )
}

export default MyRoutes