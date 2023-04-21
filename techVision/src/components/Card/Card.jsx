import React from "react";
import { Button } from 'react-bootstrap';
import './Card.css'

function CardComponent({ image, showButton, title, text }) {
  return (
    <div className='cont-treatment-1'>
        <div className="cont-all">
            <img className='img-logo' src={image} alt=""/>
            <div className='title-treatment-1'>{title}</div>
            <p className='text-treatment-1'>{text}</p>
            {showButton && <Button className='appointment-btn'>Saber más <i class="bi bi-chevron-right arrow"></i></Button>}
        </div>
    </div>
  );
}

export default CardComponent;