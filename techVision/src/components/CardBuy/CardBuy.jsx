import React from "react";
import { Button } from 'react-bootstrap';
import './CardBuy.css'
import { Navigator } from '../Navigator/Navigator';
import { useNavigate } from 'react-router-dom';

export const CardBuy = ({name, price, image,description, showButton, button} ) => {

    return (
        <div className="all-buy">
            <div className='cont-all-buy'>
                <div className="img-buy">
                    <img className='img-logo-buy' src={image} alt=""/>
                </div>
                <div className="info-buy">
                    <div className=' buy-container'>{name}</div>
                    <div className='title-product-buy'>{description}</div>
                    <div className='price-buy'><div>$</div>{price}</div>
                </div>
            </div>
        </div>
        /*
        <div className="container-buy">
            <div className="name-product-buy">{name}</div>
            <div className="price-buy">{price}</div>
            <div className="container-image-buy">
                <div className="image-buy" src={image}></div>
            </div>
            <div className="status-buy">{status}</div>
            <div className="description-buy">{description}</div>
        </div>*/
    );
  
}

export default CardBuy;