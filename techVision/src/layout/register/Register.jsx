import { useEffect } from "react";
import { Footer } from "../../components/Footer/Footer"
import { NavBar } from "../../components/Navbar/NavBar"
import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import './Register.css'
import { InputText } from "../../components/InputText/InputText";
import { validate } from "../../helpers/useful";
import { registerUser } from "../../services/apiCalls";
import { useNavigate } from "react-router-dom";
import { ButtonAct } from "../../components/ButtonAct/ButtonAct";
import { Navigator } from '../../components/Navigator/Navigator';

export const Register = () => {

  const navigate = useNavigate();

//HOOKS............

  // 1 - Primero siempre se comprueba el valor de los hooks
  const [credenciales, setCredenciales] = useState({
    
    email: "",
    password: "",
    
  });

  const [valiCredenciales, setValiCredenciales] = useState({
    emailVali: false,
    passwordVali:false,
  })

  //Este hook consistirá en el lugar de guardado de mensajes de error, a priori estarán en comillas vacías
  const [credencialesError, setCredencialesError] = useState({
    passwordError: "",
    emailError: "",
  });

  const [registerAct, setRegisterAct] = useState(false);

  //HANDLERS

  const inputHandler = (e) => {
    //inputHandler será la función adecuada para controlar el contenido que estamos introduciendo
    //en los inputs, su forma de manejarlo será actualizar las partes correspondientes del hook según el input
    //en el que estemos escribiendo

    setCredenciales((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
      //Este método hace una copia del estado del componente con spread para no tener que mutar el estado original,
      //posteriormente, mediante la técnica de diccionario de JS, asignamos el valor del input que esté escribiendose
      //EN ESE MOMENTO a la parte correspondiente del Hook.
    }));
  };

  //USEEFFECT

  //Funciones de ciclo de vida del componente, conocidas como useEffect

  // 3 - Ejecutamos los useEffect
  const [welcome, setWelcome] = useState("");

  //Este tipo de useEffect siempre se ejecuta cuando se actualice cualquier hook.....
  useEffect(() => {
 

    //Recorremos el primer for in para ver si hay errores en las credenciales....
    for(let error in credencialesError){
      if(credencialesError[error] !== ""){
        setRegisterAct(false);
        return;
      }
    }

    //Recorremos las credenciales con otro for in para comprobar en este caso si algún campo se ha dejado por rellenar...
    for(let vacio in credenciales){
      if(credenciales[vacio] === ""){
        setRegisterAct(false);
        return;
      }
    }

    //El último cortafuegos será un for in que recorrerá el hook valiCredenciales que mirará si todas las credenciales no sólo
    //están rellenas, sino que también han sido validadas
    for(let validated in valiCredenciales){
      if(valiCredenciales[validated] === false){
        setRegisterAct(false);
        return;
      }
    }
    //si llegamos a este punto es porque no hemos encontrado ningún error en el for in que recorre el hook de errores
    setRegisterAct(true);
  });

  //FUNCIONES
  //Funcion de validacion

  const checkError = (e) => {

    let error = "";

    let checked = validate(
      e.target.name,
      e.target.value,
      e.target.required
    );

    error = checked.message;
    
    //Aqui seteamos el hook de las validaciones
    console.log("asdfasdf",valiCredenciales)

    setValiCredenciales((prevState) => ({
      ...prevState,
      [e.target.name + "Vali"]: checked.validated,
    }));

    //Aqui seteamos el hook de los errores

    setCredencialesError((prevState) => ({
      ...prevState,
      [e.target.name + "Error"]: error,
    }));
  };


  const userRegister = () => {
    registerUser(credenciales)
    console.log(credenciales)

    setWelcome(`Gracias por confiar en nosotros`);


                setTimeout(() => {
                  navigate("/login");
                }, 2000);
                 
  };

  return (
    <>
      <NavBar/>
      <div className='container-icon'>
      <i class="bi bi-person-badge"></i>
      </div>
      {welcome !== "" ? (
            <div className="date-confirm">{welcome}</div>
          ) : (
      <Container className="container-register">
        <Row className="row-input">
          <Col className="container-inputs">
              <InputText className={
                          credencialesError.emailError === ""
                            ? "inputBasicDesign"
                            : "inputBasicDesign inputErrorDesign"
                        }
                    type={"email"}
                    name={"email"}
                    placeholder={"Email"}
                    required={true}
                    changeFunction={(e) => inputHandler(e)}
                    blurFunction={(e) => checkError(e)} 
                  />
                  <div>{credencialesError.emailError}</div>
            
                <InputText className={
                          credencialesError.passwordError === ""
                            ? "inputBasicDesign"
                            : "inputBasicDesign inputErrorDesign"
                        }
                  type={"password"}
                  name={"password"}
                  placeholder={"Password"}
                  required={true}
                  changeFunction={(e) => inputHandler(e)}
                  blurFunction={(e) => checkError(e)}
                />
                <div>{credencialesError.passwordError}</div>
                <div className="route-register-2">
                    <Navigator ruta={"You are already registered?"} destino={"/login"}
                    
                    
                            />
                </div>
          </Col>      
          <div className="container-btn">
          <ButtonAct
                        className={registerAct ? "registerSendDeac registerSendAct" : "registerSendDeac"}
                        buttonName="REGISTER"
                        onClick={registerAct
                            ? () => {
                                userRegister();
                              }
                            : () => {}}
                      />
          </div>
        </Row>
      </Container>
      )}
      <Footer/>
    </>
        );
}