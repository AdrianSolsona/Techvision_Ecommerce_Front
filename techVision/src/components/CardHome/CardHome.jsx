import React from "react";
import { Button } from 'react-bootstrap';
import './CardHome.css'
import { Navigator } from '../Navigator/Navigator';
import { useNavigate } from 'react-router-dom';

function CardHome({ image, showButton, title, text, productName, price }) {

    const navigate = useNavigate();
    const goShop = () => {
    
        setTimeout(()=>{
          
          navigate("/shop");
      },500)
      };  
  return (
    <div className='cont-treatment-1'>
        <div className='title-treatment-1'>{title}</div>
        <div className="cont-all">
            <img className='img-logo' src={image} alt=""/>
            {showButton && <Button onClick={() => { goShop();}} className='appointment-btn'>GO TO SHOP</Button>}
        </div>
        <div className='title-product-sh'>{productName}</div>
        <div className='title-product-sh-2'><div>$</div>{price}</div>
    </div>
  );
}

export default CardHome;