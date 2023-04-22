import React from "react";
import { Button } from 'react-bootstrap';
import './Card.css'

function CardComponent({ image, showButton, title, text }) {
  return (
    <div className='cont-treatment-1'>
        <div className='title-treatment-1'>{title}</div>
        <div className="cont-all">
            <img className='img-logo' src={image} alt=""/>
            {showButton && <Button className='appointment-btn'>ADD TO CART</Button>}
        </div>
    </div>
  );
}

export default CardComponent;