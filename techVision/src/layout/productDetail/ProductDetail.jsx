import React, {useState, useEffect} from 'react'
import './ProductDetail.css';
import { useSelector } from "react-redux";
import { NavBar } from '../../components/Navbar/NavBar';
import { Footer } from '../../components/Footer/Footer';
import Table from 'react-bootstrap/Table';
import Moment from 'moment';
import { useDispatch } from 'react-redux';
import { detailData } from '../detailSlice';
import productMac from '../../assets/mac-prp-1.png';
import Button from 'react-bootstrap/Button';


export const ProductDetail = () =>  {
    console.log(detailData)
    const dataProducts = useSelector(detailData);
    console.log(dataProducts.choosenObject)
    

    return(
        <>
        <NavBar/>
            <div className='all-detail-pro'>
            <img className='img-detail-2' src={productMac} alt="" />
                <div className='detail-container'>
                    <div className='title-detail'>Macbook 14 Pro</div>
                    <div className='description-detail'>Supercharged by M2 Pro or M2 Max, MacBook Pro takes its power and efficiency further than ever. It delivers exceptional performance whether it’s plugged in or not, and now has even longer battery life. Combined with a stunning Liquid Retina XDR display and all the ports you need — this is a pro laptop without equal.</div>
                    <div className='all-btn-detail'>
                        <Button variant="primary" size="lg" className='btn-detail'>
                            <div className='buy-detail-logo'><i class="bi bi-cart2 cart-buy-det"></i><div>Add to cart</div></div>
                        </Button>{' '}
                        <div className='container-status'><div className='arrival'>New Arrival</div></div>
                    </div>
                    <div className='price-detail'>PRICE: 1100$</div>
                </div>
                <img className='img-detail' src={productMac} alt="" />
            </div>
        <Footer/>
        </>
    )
}