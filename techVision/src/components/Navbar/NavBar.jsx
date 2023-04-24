
import Navbar from 'react-bootstrap/Navbar';
import React from 'react'
import "./Navbar.css"
import { Navigator } from '../Navigator/Navigator';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { userData, userout } from '../../layout/userSlice';
import { useDispatch } from 'react-redux';
import {useEffect} from "react";
import principalImage from"../../assets/logo-prp-1.jpg"


export const NavBar = () => {

    const dispatch = useDispatch()

    const datosCredencialesRedux = useSelector(userData);

    const logoutFunction = () => {
      dispatch(userout({credentials: {}, token: ""}))
      
    }

    const navigate = useNavigate();

    useEffect(()=>{
        
    })

    return (
            <Navbar className='all-nav'>
              <div className='row-nav'>
                
                {!datosCredencialesRedux?.credentials?.decodificado?.rolId ? (
                <> 
                  <div className='nav-init'>
                      <div className='home-dif'><Navigator ruta={"HOME"} destino={"/"} /></div>
                      <Navigator ruta={"SHOP"} destino={"/shop"} />
                      <Navigator ruta={"CONTACT"} destino={"/contact"} />
                  </div>
                  <div className='factordent'>
                    <img className='image-prp' src={principalImage} alt="" />
                  </div>
                  <div className='nav-init'>
                    <div className='nav-login'>
                      <i class="bi bi-cart2 cart-buy"></i> 
                      <Navigator ruta={"CART"} destino={"/register"} />
                    </div>
                    <div className='nav-login'>
                      <i class="bi bi-person icon-login"></i>
                      <Navigator ruta={"LOGIN"} destino={"/login"} />
                    </div>
                    <i class="bi bi-search icon-search"></i>
                  </div>
                </>  
                ) :
                datosCredencialesRedux?.credentials?.decodificado?.rolId === 1 ? (
                <> 
                  <div className='nav-init'>
                      <Navigator ruta={"Inicio"} destino={"/"} />
                      <div onClick={()=>navigate("/users")}>Usuarios</div>
                      <div onClick={()=>navigate("/data/user")}>{datosCredencialesRedux?.credentials?.decodificado?.username}</div>
                      <div className='factordent'>
                    <div className='link-title'>TECHV</div>
                  </div>
                      <div onClick={() => {  navigate("/login"); logoutFunction();}}>LOGOUT</div>
                  </div>  
                </>       
    
                ) : datosCredencialesRedux?.credentials?.decodificado?.rolId === 2 ? (
                <>
                  <div className='nav-init'>
                    <div className='home-dif'><Navigator ruta={"HOME"} destino={"/"} /></div>
                    <Navigator ruta={"SHOP"} destino={"/shop"} />
                    <div onClick={()=>navigate("/contact")}>CONTACT</div>
                    <div>{datosCredencialesRedux?.credentials?.decodificado?.username}</div>
                  </div>
                  <div className='factordent'>
                    <div className='link-title'>TECHV</div>
                  </div>
                  <div className='nav-init'>
                    <div className='nav-login'>
                      <i class="bi bi-cart2 cart-buy"></i> 
                      <Navigator ruta={"CART"} destino={"/register"} />
                    </div>
                    <div className='nav-login'>
                      <i class="bi bi-person icon-login"></i>
                      <div onClick={() => {  navigate("/login"); logoutFunction();}}>LOGOUT</div>
                    </div>
                    <div><Navigator ruta={" MY PROFILE"} destino={"/profile"} /></div>
                    <i class="bi bi-search icon-search"></i>
                  </div>
                </>
                ) : (
                  <div className='nav-init'>
                    <>
                    <Navigator ruta={"Registro"} destino={"/register"} />
                    <Navigator ruta={"Inicio sesion"} destino={"/login"} />
                    </>
                  </div>
                )}   
                </div>  
          </Navbar>  
          );
};

