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
import { ProductBuy } from '../../services/apiCalls';
import { Navigator } from '../../components/Navigator/Navigator';
import { useNavigate } from 'react-router-dom';
import { userData } from '../userSlice';
import { addChoosenProduct } from '../productSlice';




export const ProductDetail = () =>  {
    
    const credentialsRdx = useSelector(userData);
    const dataProducts = useSelector(detailData);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    

    const [infoBuy, setBuy] = useState({
        user_id: credentialsRdx.credentials.decodificado.userId,
        product_id: dataProducts.choosenObject.id,
    
    });

      
    
    const addBuy = () => {
        ProductBuy(infoBuy,credentialsRdx.credentials.token);
        setTimeout(()=>{
          
          navigate("/cart");
      },1000)
      };

      const selectedProduct = (product) => {
        
        dispatch(addChoosenProduct({choosenObjectProduct: product}))
        
        setTimeout(()=>{
            navigate(`/cart`);
        },500)
    }

    return(
        <>
        <NavBar/>
            <div className='all-detail-pro'>
            <img className='img-detail-2' src={productMac} alt="" />
                <div className='detail-container'>
                    <div className='title-detail'>{dataProducts.choosenObject.name}</div>
                    <div className='description-detail'>{dataProducts.choosenObject.description}</div>
                    <div className='all-btn-detail'>
                        <Button onClick={
                  () => {
                    selectedProduct(dataProducts.choosenObject) 
                    /*addBuy();*/
              }
                } variant="primary" size="lg" className='btn-detail'>
                            <div className='buy-detail-logo'><i class="bi bi-cart2 cart-buy-det"></i><div>Add to cart</div></div>
                        </Button>{' '}
                        <div className='container-status'><div className='arrival'>New Arrival</div></div>
                    </div>
                    <div className='price-detail'>${dataProducts.choosenObject.price}</div>
                </div>
                <img className='img-detail' src={dataProducts.choosenObject.image} alt="" />
            </div>
        <Footer/>
        </>
    )
}