import React from "react";
import { Button } from 'react-bootstrap';
import './CardOrderUser.css'

export const CardOrderUser = ({ numOrder, products, indPrices, status, date, tPurchase }) => {
  return (
    <div className='cont-Address-1'>
        <div className='icon-user-1'><i class="bi bi-box-seam"></i></div>
        <div className="all-line">
            <div className="container-row">
                <div className='col-info'>
                    <div className='line-data'>Nº Order</div>
                    <div className='line-data'>Date:</div>
                    <div className='line-data'>Status:</div>
                    <div className='line-data'>Products:</div>
                    <div className='line-data'>Ind.prices:</div>
                    <div className='line-data'>Total purchase:</div>
                </div>
                <div className='col-info-2'>
                <div className='data-user'>{numOrder}</div>
                    <div className='data-user'>{date}</div>
                    <div className='data-user'>{status}</div>
                    <div className='data-user'>{products}</div>
                    <div className='data-user'>{indPrices}</div>
                    <div className='data-user'>{tPurchase}</div>
                </div>
            </div>
        </div>
    </div>
    
  );
}