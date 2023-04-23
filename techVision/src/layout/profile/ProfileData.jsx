import React, {useState, useEffect} from 'react'
import './profileData.css';
import { dataUsers } from '../../services/apiCalls';
import { addressUsers } from '../../services/apiCalls';
import { useSelector } from "react-redux";
import { userData } from "../userSlice";
import { addChoosen } from '../detailSlice';
import { userAddress } from "../addressSlice";
import { addChoosenAddress } from '../addressSlice';
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { NavBar } from '../../components/Navbar/NavBar';
import { Footer } from '../../components/Footer/Footer';
import { ButtonAct } from "../../components/ButtonAct/ButtonAct";




export const ProfileData = () => {

    const [users, setUsers] = useState([]);
    const [address, setAddress] = useState([]);

    const ReduxCredentials = useSelector(userData);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (users.length === 0) {
            Promise.all([
                dataUsers(ReduxCredentials.credentials.token),
                addressUsers(ReduxCredentials.credentials.token)
            ]).then(([userData, addressData]) => {
                setUsers(userData.data);
                setAddress(addressData.data);
            }).catch(error => console.log(error));
        }
    }, [ReduxCredentials.credentials.token, users]);
/*
    useEffect(()=>{
        if(users.length === 0){

            dataUsers(ReduxCredentials.credentials.token)
                .then(
                    result => {
                        //console.log(result)
                        //Efectivamente, despues de traer los usuarios de la base de datos, los guardamos en el hook
                        setUsers(result.data)
                    }
                )
                .catch(error => console.log(error));
        }

    },[users])
    console.log(users)
    /*
    

    
    

    useEffect(()=>{
        if(address.length === 0){

            addressUsers(ReduxCredentials.credentials.token)
                .then(
                    result => {
                        console.log(result)
                        //Efectivamente, despues de traer los usuarios de la base de datos, los guardamos en el hook
                        setAddress(result.data)
                    }
                )
                .catch(error => console.log(error));
        }

    },[address])
    console.log(address)*/
    const selected = (persona) => {
        
        
        dispatch(addChoosen({ choosenObject: persona }))

        setTimeout(()=>{
            navigate("/modify/user");
        },500)
    }
    
     return (
        <>
        <NavBar/>
        <div className='order-others'>
            <div className='order-detail'>
                <i class="bi bi-box-seam box-icon"></i><div>Orders</div> 
            </div>
            <div className='order-detail'>
                <i class="bi bi-truck box-icon"></i><div>New shipping address</div> 
            </div>
            <div className='order-detail'>
            <i class="bi bi-bag box-icon"></i><div>Continue shopping</div> 
            </div>

            
        </div>
        <div className='all-container'>
         <div className='usersDesign'>
            <div className='icon-user'><i class="bi bi-person-rolodex"></i></div>
            <div className='col-info'>
                <div className='line-1'>Email:</div><div className='data-user'>{ users.email }</div>  
            </div>
            <div className='col-info'>
                <div className='line-1'>Name:</div><div className='data-user'>{ address[0]?.name}</div>
            </div>
            <div className='col-info'>
                <div className='line-1'>Surname:</div><div className='data-user'>{ address[0]?.surname}</div>
            </div>
            <div className='col-info'>
                <div className='line-1'>Country:</div><div className='data-user'>{ address[0]?.country}</div>
            </div>
            <div className='col-info'>
                <div className='line-1'>City:</div><div className='data-user'>{ address[0]?.city}</div>
            </div>
            <div className='col-info'>
                <div className='line-1'>Address:</div><div className='data-user'>{ address[0]?.address}</div>
            </div>
            <div className='col-info'>
                <div className='line-1'>Phone:</div><div className='data-user'>{ address[0]?.phone}</div>
            </div>
            <div className='col-info'>
                <div className='line-1'>Postcode:</div><div className='data-user'>{ address[0]?.postcode}</div>
            </div>
        </div>
        </div>
        <div className='buttons-info'>
            <div className='bnt-modify'>
                <ButtonAct
                        className={"loginSendDeac"}
                        buttonName="MODIFY EMAIL"
                        onClick={() => { 
                            selected();
                        }}
                    />
            </div>
            <div>
                <ButtonAct
                        className={"loginSendDeac"}
                        buttonName="MODIFY SHIPPING ADDRESS"
                        onClick={() => { 
                            selected();
                        }}
                    />   
            </div>   
            </div>
         <Footer/>
         </>
     )
}