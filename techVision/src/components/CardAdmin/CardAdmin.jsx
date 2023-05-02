import React from "react";
import { Button } from 'react-bootstrap';
import './CardAdmin.css'

export const CardAdmin = ({ id, email, name, surname, country, city, address, phone, postcode }) => {
  return (
    <div className='cont-Address-1'>
        <div className='icon-user-1'><i class="bi bi-person-rolodex"></i></div>
        <div className="all-line">
            <div className="container-row">
                <div className='col-info'>
                    <div className='line-data'>Id:</div>
                    <div className='line-data'>Email:</div>
                    <div className='line-data'>Name:</div>
                    <div className='line-data'>Surname:</div>
                    <div className='line-data'>Country:</div>
                    <div className='line-data'>City:</div>
                    <div className='line-data'>Address:</div>
                    <div className='line-data'>Phone:</div>
                    <div className='line-data'>Postcode:</div>
                </div>
                <div className='col-info-2'>
                <div className='data-user'>{id}</div>
                    <div className='data-user'>{email}</div>
                    <div className='data-user'>{name}</div>
                    <div className='data-user'>{surname}</div>
                    <div className='data-user'>{country}</div>
                    <div className='data-user'>{city}</div>
                    <div className='data-user'>{address}</div>
                    <div className='data-user'>{phone}</div>
                    <div className='data-user'>{postcode}</div>
                </div>
            </div>
        </div>
    </div>
    
  );
}