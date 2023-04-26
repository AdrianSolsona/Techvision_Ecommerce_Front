import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../layout/home/Home'
import {Login} from '../layout/login/Login'
import {Register} from '../layout/register/Register'
import {ProfileData} from '../layout/profile/ProfileData'
import { Shop } from '../layout/shop/Shop'
import { UserAdmin } from '../layout/usersAdmin/UserAdmin'
import { OrderUsers } from '../layout/orders/Orders'
import { OrderUser } from '../layout/orderUser/OrderUser'
import { NewShipping } from '../layout/newShipping/NewShipping'


export const MainApp = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/profile' element={<ProfileData/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/users/admin' element={<UserAdmin/>}/>
        <Route path='/users/order' element={<OrderUsers/>}/>
        <Route path='/orders' element={<OrderUser/>}/>
        <Route path='/new/shipping' element={<NewShipping/>}/>
    </Routes>
    </>
  )
}