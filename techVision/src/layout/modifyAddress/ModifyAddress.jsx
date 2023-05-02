import React, {useState, useEffect} from 'react'
import './ModifyAddress.css';
import { useSelector } from "react-redux";
import { userData } from "../userSlice";
import { NavBar } from '../../components/Navbar/NavBar';
import { Footer } from '../../components/Footer/Footer';
import { Navigator } from '../../components/Navigator/Navigator';
import { useNavigate } from 'react-router-dom';
import { NewAddressShip } from '../../services/apiCalls';
import { Col, Container, Row } from 'react-bootstrap';
import { InputText } from "../../components/InputText/InputText";
import { validate } from "../../helpers/useful";
import { addressDataAll } from "../addressSlice";
import { updateAddress } from '../../services/apiCalls';

export const ModifyAddress = () =>  {

    const navigate = useNavigate();

    const credentialsRdx = useSelector(userData);
    const addressRdx = useSelector(addressDataAll)
    console.log(addressRdx)

  const [address, setAddress] = useState({
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
    setAddress((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  let addressNum = addressRdx.choosenAddress;
  console.log(addressNum)

  const [valiAddress, setValiAddress] = useState({
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

    for (let empty in address) {
      if (address[empty] === "") {
        setShippingAct(false);
        return;
      }
    }

    for (let validated in valiAddress) {
      if (valiAddress[validated] === false) {
        setShippingAct(false);
        return;
      }
    }
    setShippingAct(true);
  });
  console.log(address)

  let addressId = addressRdx.credentials.decodificado.userId; 
  console.log(addressId)

  const checkError = (e) => {

    let error = "";

    let checked = validate(
      e.target.name,
      e.target.value,
      e.target.required
    );

    error = checked.message;
    

    setValiAddress((prevState) => ({
      ...prevState,
      [e.target.name + "Vali"]: checked.validated,
    }));

    //Aqui seteamos el hook de los errores

    setCredencialesError((prevState) => ({
      ...prevState,
      [e.target.name + "Error"]: error,
    }));
  };
  console.log(credentialsRdx.credentials.token)
  const updateShip = () => {
    console.log("entro en submit");  
    updateAddress( addressId, address, credentialsRdx.credentials.token);
    console.log(updateAddress)
      setWelcome(`¡Fecha modificada con exito!`);
      setTimeout(()=>{
        
        navigate("/profile");
    },1000)
    
  };

 /* const bookShipping = () => {
    
    NewAddressShip(infoShipping,credentialsRdx.credentials.token);
    setWelcome(`¡New address successfully created!`);
    setTimeout(()=>{
      
      navigate("/profile");
  },1000)
  };*/

  return (
    <>
      <NavBar/>
      <div className='order-others'>
            <div className='order-detail'>
                <i class="bi bi-box-seam box-icon"></i><Navigator ruta={"Orders"} destino={"/orders"} />
            </div>
            <div className='order-detail'>
            <i class="bi bi-person box-icon"></i><Navigator ruta={"Profile"} destino={"/profile"} />
            </div>
            <div className='order-detail'>
            <i class="bi bi-bag box-icon"></i><Navigator ruta={"Continue shopping"} destino={"/shop"} />
            </div>
        </div>
      <div className='container-icon'>
        <i className="bi bi-person-workspace icon-login-1"></i>
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
                    updateShip();
              }
                }
              >
                CONFIRM CHANGES
            </div>
          </div>
        </Row>
      </Container>
      )}
      <Footer/>
    </>
        );
    
}