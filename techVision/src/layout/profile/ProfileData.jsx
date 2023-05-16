import React, {useState, useEffect} from 'react'
import './profileData.css';
import { dataUsers, deleteMyAddress } from '../../services/apiCalls';
import { addressUsers } from '../../services/apiCalls';
import { useSelector } from "react-redux";
import { userData } from "../userSlice";
import { addChoosen } from '../detailSlice';
import { addressDataAll } from "../addressSlice";
import { addChoosenAddress } from '../addressSlice';
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { NavBar } from '../../components/Navbar/NavBar';
import { Footer } from '../../components/Footer/Footer';
import { ButtonAct } from "../../components/ButtonAct/ButtonAct";
import { Navigator } from '../../components/Navigator/Navigator';
import { Col, Container, Row } from 'react-bootstrap';
import { CardAddress } from '../../components/CardAddress/CardAddress';





export const ProfileData = () => {

    const [users, setUsers] = useState([]);
    const [address, setAddress] = useState([]);
    

    const ReduxCredentials = useSelector(userData);
    
    const addressSelectedRdx = useSelector(addressDataAll)
   

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

    const addressSelected = (address) => {
        dispatch(addChoosenAddress({ choosenAddress: address }))
        console.log(addChoosenAddress({ choosenAddress: address }))
        setTimeout(() => {
          navigate('/modify/address');
        }, 1000)
      }
      const deleteAddress =  async (address) =>{
        await deleteMyAddress(  address.id,ReduxCredentials.credentials.token)
        setAddress(prevAddress => prevAddress.filter(a => a.id !== address.id));
    }

    const selected = (persona) => {
        
        
        dispatch(addChoosen({ choosenObject: persona }))

        setTimeout(()=>{
            navigate("/modify/user");
        },500)
    }
    console.log(address.map)
     return (
        <>
        <NavBar/>
        <div className='order-others'>
            <div className='order-detail'>
                <i class="bi bi-box-seam box-icon"></i><Navigator ruta={"Orders"} destino={"/orders"} />
            </div>
            <div className='order-detail'>
                <i class="bi bi-truck box-icon"></i><Navigator ruta={"New Shipping Address"} destino={"/new/shipping"} />
            </div>
            <div className='order-detail'>
            <i class="bi bi-bag box-icon"></i><Navigator ruta={"Continue shopping"} destino={"/shop"} />
            </div>
        </div>
        <div>
        <Container >
        {address.length > 0 ? (
          <Row className='all-container'>
            {address.map(tag => {
              return (
                <Col 
                  key={tag.id}
                  sm="12"
                  md="12"
                  lg="12"
                  xl="6"
                  xxl="4"
                  className="usersDesign"
                >
                <CardAddress 
                    name={tag.name}
                    surname={tag.surname}
                    country={tag.country}
                    city={tag.city}
                    address={tag.address}
                    phone={tag.phone}
                    postcode={tag.postcode}
                />
                <div className='button-modify-add'>
                <ButtonAct
                        className={"loginSendDeac"}
                        buttonName="MODIFY PRINCIPAL ADDRESS"
                        onClick={() => { 
                            addressSelected(tag.id);
                        }}
                    />   
                </div>
                <div className='all-delete'>
                    <div
                    onClick = {() => deleteAddress(tag)}
                    className= "deleteDesign"
                  >
                    DELETE
                    </div>
                </div>
                </Col>
              );
            })}
          </Row>
        ) : (
          <div>
            <div className="date-confirm">Complete your shipping address information<div className='new-address'><Navigator ruta={"here"} destino={"/new/shipping"}></Navigator></div></div>
          </div>
        )}
      </Container>
        </div>
        <div className='buttons-info'>
               
            </div>
         <Footer/>
         </>
     )
}