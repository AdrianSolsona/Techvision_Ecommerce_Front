import React from 'react'
import { NavBar } from '../../components/Navbar/NavBar';
import './Home.css';
import productPrincipal from '../../assets/iphone-13-pro-max-plata-5-1-500.png';
import productMac from '../../assets/mac-prp-1.png'



export const Home = () => {
    return (
        <>
        <NavBar className='navigator'/>
        <div className='container-product'>
            <div className='visual-product'>
                <div className='text-product'>
                    <p className='best'>THE BEST TECHNOLOGY</p>
                    <p className='offers'>Techv offers you the best prices and conditions as well as an extensive catalog in our store.</p>
                </div>
                <div className='img-product'>
                    <img src={productMac} alt="" />
                    <img className='img-movil-prp' src={productPrincipal} alt="" />
                </div>
            </div>
        </div>
        
        </>
    )
};