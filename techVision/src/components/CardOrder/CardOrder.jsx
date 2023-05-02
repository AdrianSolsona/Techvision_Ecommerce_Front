import React from "react";
import { Button } from 'react-bootstrap';
import './CardOrder.css'

export const CardOrder = ({ id, email, userId, status, quantity, date }) => {
  return (
    <div className='cont-Address-1'>
        <div className='icon-user-1'><i class="bi bi-box-seam"></i></div>
        <div className="all-line">
            <div className="container-row">
                <div className='col-info'>
                    <div className='line-data'>Id:</div>
                    <div className='line-data'>User id:</div>
                    <div className='line-data'>Order date:</div>
                    <div className='line-data'>Status:</div>
                    <div className='line-data'>Quantity:</div>
                    <div className='line-data'>Email:</div>
                </div>
                <div className='col-info-2'>
                <div className='data-user'>{id}</div>
                    <div className='data-user'>{userId}</div>
                    <div className='data-user'>{date}</div>
                    <div className='data-user'>{status}</div>
                    <div className='data-user'>{quantity}</div>
                    <div className='data-user'>{email}</div>
                </div>
            </div>
        </div>
    </div>
    
  );
}