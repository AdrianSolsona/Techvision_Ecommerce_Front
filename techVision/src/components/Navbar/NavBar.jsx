
import Navbar from 'react-bootstrap/Navbar';
import React from 'react'
import "./Navbar.css"
import { Navigator } from '../Navigator/Navigator';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { userData, userout } from '../../layout/userSlice';
import { useDispatch } from 'react-redux';
import {useEffect} from "react";

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
                      <Navigator ruta={"SHOP"} destino={"/treatments"} />
                      <Navigator ruta={"CONTACT"} destino={"/treatments"} />
                  </div>
                  <div className='factordent'>
                    <div className='link-title'>TECHV</div>
                  </div>
                  <div className='nav-init'>
                      <Navigator ruta={"CART"} destino={"/register"} />
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
                      <div onClick={() => {  navigate("/login"); logoutFunction();}}>Cerrar sesión</div>
                  </div>  
                </>       
    
                ) : datosCredencialesRedux?.credentials?.decodificado?.rolId === 2 ? (
                <>
                  <div className='nav-init'>
                      <Navigator ruta={"Inicio"} destino={"/"} />
                      <Navigator ruta={"Tratamientos"} destino={"/treatments"} />
                      <div onClick={()=>navigate("/appointments")}>Citas</div>
                      <div>{datosCredencialesRedux?.credentials?.decodificado?.username}</div>
                      <div onClick={() => {  navigate("/login"); logoutFunction();}}>Cerrar sesión</div>
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

