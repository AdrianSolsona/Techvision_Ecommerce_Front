import React, {useState, useEffect} from 'react'
import './Contact.css';
import { useSelector } from "react-redux";
import { userData } from "../userSlice";
import { NavBar } from '../../components/Navbar/NavBar';
import { Footer } from '../../components/Footer/Footer';
import Table from 'react-bootstrap/Table';
import Moment from 'moment';
import { InputText } from '../../components/InputText/InputText';
import { ButtonAct } from '../../components/ButtonAct/ButtonAct';

export const Contact = () =>  {

    return (
    
        <>
        <NavBar/>
        <div className='all-contact'>
            <div className='all-location'>
                <div className='location-detail'>
                <div>LOCATION</div>
                <div>18004</div>
                <div>Avalon Blvd</div>
                <div>Carson CA</div>
                <div>EE.UU</div>
                <div>TECHVISION SL</div>
                <div>EXMOUTH MARKET</div>
                <div>+1 484 987 7654</div>
                <div>Monday-Friday</div>
                <div>7:00-18:00</div>
                <div>techvisioninfo@info.com</div>
                </div>
                <div>
                    <div classname="map"><iframe className='map-inside' width="300" height="300" src="https://maps.google.com/maps?width=300&amp;height=300&amp;hl=en&amp;q=Carlson%20CA%20avd%20Boulevard%2090740+(Caravan%20restaurant)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                        <a href="https://www.gps.ie/sport-gps/">hiking gps</a></iframe></div>
                    </div>
                </div>
            <div className='form-contact'>
                <div className='you-want'>Do you want to tell us something?</div>
                <InputText className={"inputBasicDesign"}
                        type="email"
                        name="email"
                        placeholder="Email"
                        required={true}/>
                <textarea className='form-area' placeholder='Write your answer here..'></textarea>
                <ButtonAct className={"loginSendDeac"}
                        buttonName="SEND ANSWER"/>
            </div>
        </div>
        <Footer/>
        </>
  )
}