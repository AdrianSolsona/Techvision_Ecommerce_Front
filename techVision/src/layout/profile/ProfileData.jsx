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
import { Navigator } from '../../components/Navigator/Navigator';
import { Col, Container, Row } from 'react-bootstrap';
import { CardAddress } from '../../components/CardAddress/CardAddress';




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
                <i class="bi bi-box-seam box-icon"></i><Navigator ruta={"Orders"} destino={"/orders"} />
            </div>
            <div className='order-detail'>
                <i class="bi bi-truck box-icon"></i><Navigator ruta={"New Shipping Address"} destino={"/new/shipping"} />
            </div>
            <div className='order-detail'>
            <i class="bi bi-bag box-icon"></i><div>Continue shopping</div> 
            </div>
            
        </div>
        <div className='all-container'>
        <Container>
        {address.length > 0 ? (
          <Row>
            {address.map(tag => {
              return (
                <Col
                  key={tag.id}
                  sm="12"
                  md="6"
                  lg="6"
                  xl="4"
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
                </Col>
              );
            })}
          </Row>
        ) : (
          <div className="date-confirm">LOADING SHIPPING ADDRESS...</div>
        )}
      </Container>
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