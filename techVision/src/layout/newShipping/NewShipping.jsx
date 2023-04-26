import React, {useState, useEffect} from 'react'
import './NewShipping.css';
import { useSelector } from "react-redux";
import { userData } from "../userSlice";
import { NavBar } from '../../components/Navbar/NavBar';
import { InputText } from "../../components/InputText/InputText";
import { validate } from "../../helpers/useful";
import { Footer } from '../../components/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import Moment from 'moment';
import { useNavigate } from 'react-router-dom';
import { NewAddressShip } from '../../services/apiCalls';

export const NewShipping = () =>  {

    const navigate = useNavigate();

    const credentialsRdx = useSelector(userData);

  const [infoShipping, setShipping] = useState({
    name: "",
    surname: "",
    address: "",
    phone: "",
    country: "",
    city: "",
    postcode: ""

  });

  const [welcome, setWelcome] = useState("");

  const inputHandler = (e) => {
    setShipping((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const [valiInfoShipping, setValiShipping] = useState({
    nameVali: false,
    surnameVali: false,
    addressVali: false,
    phoneVali: false,
    countryVali: false,
    cityVali: false,
    postcodeVali: false,
  });

  const [credencialesError, setCredencialesError] = useState({
    nameError: "",
    surnameError: "",
    addressError: "",
    phoneError: "",
    countryError: "",
    cityError: "",
    postcodeError: "",
  });

  const [ShippingAct, setShippingAct] = useState(false);

  useEffect(() => {

    for(let error in credencialesError){
        if(credencialesError[error] !== ""){
          setShippingAct(false);
          return;
        }
      }

    for (let empty in infoShipping) {
      if (infoShipping[empty] === "") {
        setShippingAct(false);
        return;
      }
    }

    for (let validated in valiInfoShipping) {
      if (valiInfoShipping[validated] === false) {
        setShippingAct(false);
        return;
      }
    }
    setShippingAct(true);
  });



  const checkError = (e) => {

    let error = "";

    let checked = validate(
      e.target.name,
      e.target.value,
      e.target.required
    );

    error = checked.message;
    

    setValiShipping((prevState) => ({
      ...prevState,
      [e.target.name + "Vali"]: checked.validated,
    }));

    //Aqui seteamos el hook de los errores

    setCredencialesError((prevState) => ({
      ...prevState,
      [e.target.name + "Error"]: error,
    }));
  };

  const bookShipping = () => {
    
    NewAddressShip(infoShipping,credentialsRdx.credentials.token);
    setWelcome(`¡New address successfully created!`);
    setTimeout(()=>{
      
      navigate("/profile");
  },1000)
  };

  return (
    <>
      <NavBar/>
      <div className='container-icon'>
        <i className="bi bi-person-workspace icon-login"></i>
      </div>
      {welcome !== "" ? (
            <div className="date-confirm">{welcome}</div>
          ) : (
      <Container className="container-register">
        <Row className="row-input">
          <Col md={12} lg={6} className="container-inputs-ship">
              <InputText className={
                          credencialesError.nameError === ""
                            ? "inputBasicDesign"
                            : "inputBasicDesign inputErrorDesign"
                        }
                    type={"name"}
                    name={"name"}
                    placeholder={"Name"}
                    required={true}
                    changeFunction={(e) => inputHandler(e)}
                    blurFunction={(e) => checkError(e)} 
                  />
                  <div className='message-error'>{credencialesError.nameError}</div>
            
                <InputText className={
                          credencialesError.surnameError === ""
                            ? "inputBasicDesign"
                            : "inputBasicDesign inputErrorDesign"
                        }
                  type={"text"}
                  name={"surname"}
                  placeholder={"Surname"}
                  required={true}
                  changeFunction={(e) => inputHandler(e)}
                  blurFunction={(e) => checkError(e)}
                />
                <div className='message-error'>{credencialesError.surnameError}</div>
             
              <InputText className={
                          credencialesError.addressError === ""
                            ? "inputBasicDesign"
                            : "inputBasicDesign inputErrorDesign"
                        }
                  type={"text"}
                  name={"address"}
                  placeholder={"Address"}
                  required={true}
                  changeFunction={(e) => inputHandler(e)}
                  blurFunction={(e) => checkError(e)} 
                />
                 <div className='message-error'>{credencialesError.phoneError}</div>
                 <InputText className={
                          credencialesError.phoneError === ""
                            ? "inputBasicDesign"
                            : "inputBasicDesign inputErrorDesign"
                        }
                    type={"text"}
                    name={"phone"}
                    placeholder={"Phone"}
                    required={true}
                    changeFunction={(e) => inputHandler(e)}
                    blurFunction={(e) => checkError(e)}  
                  />
                  <div className='message-error'>{credencialesError.phoneError}</div>  
          </Col>
          <Col md={12} lg={6} className="container-inputs-ship cont-inp-2">
            
            <InputText className={
                            credencialesError.countryError === ""
                                ? "inputBasicDesign"
                                : "inputBasicDesign inputErrorDesign"
                            }
                        type={"text"}
                        name={"country"}
                        placeholder={"Country"}
                        required={true}
                        changeFunction={(e) => inputHandler(e)}
                        blurFunction={(e) => checkError(e)}         
            />
            <div className='message-error'>{credencialesError.countryError}</div>
              
                <InputText className={
                          credencialesError.cityError === ""
                            ? "inputBasicDesign"
                            : "inputBasicDesign inputErrorDesign"
                        }
                    type={"text"}
                    name={"city"}
                    placeholder={"City"}
                    required={true}
                    changeFunction={(e) => inputHandler(e)}
                    blurFunction={(e) => checkError(e)} 
               
                />
                <div className='message-error'>{credencialesError.cityError}</div>
              <InputText className={
                          credencialesError.postcodeError === ""
                            ? "inputBasicDesign"
                            : "inputBasicDesign inputErrorDesign"
                        }
                    type={"text"}
                    name={"postcode"}
                    placeholder={"Postcode"}
                    required={true}
                    changeFunction={(e) => inputHandler(e)}
                    blurFunction={(e) => checkError(e)}  
                  />
                  <div className='message-error'>{credencialesError.postcodeError}</div>
          </Col>
          <div className="container-btn">
            <div
              type="submit"
                className={
                  ShippingAct ? "registerSendDeac registerSendAct" : "registerSendDeac"
                }
                onClick={
                  //Si el hook registerAct es true, el onclick nos permitirá ejecutar la función que haría el registro....
                  () => { 
                    bookShipping();
              }
                }
              >
                CONFIRM NEW ADDRESS
            </div>
          </div>
        </Row>
      </Container>
      )}
      <Footer/>
    </>
        );
    
}