import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../layout/home/Home'
import {Login} from '../layout/login/Login'
import {Register} from '../layout/register/Register'
import {ProfileData} from '../layout/profile/ProfileData'
import { Shop } from '../layout/shop/Shop'


export const MainApp = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/profile' element={<ProfileData/>}/>
        <Route path='/shop' element={<Shop/>}/>
    </Routes>
    </>
  )
}