import React from "react";
import { Button } from 'react-bootstrap';
import './Card.css'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';


function CardComponent({ image, showButton, title, text, productName, price }) {

  return (
    <div className='cont-treatment-1'>
        <div className='title-treatment-1'>{title}</div>
        <div className="cont-all">
            <img className='img-logo' src={image} alt=""/>
            {showButton && <Button className='appointment-btn'>VIEW IN DETAIL</Button>}
        </div>
        <div className='title-product-sh'>{productName}</div>
        <div className='title-product-sh-2'><div>$</div>{price}</div>
    </div>
  );
}

export default CardComponent;