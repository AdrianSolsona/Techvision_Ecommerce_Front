import React from 'react'
import { NavBar } from '../../components/Navbar/NavBar';
import './Home.css';
import productPrincipal from '../../assets/iphone-13-pro-max-plata-5-1-500.png';
import productMac from '../../assets/mac-prp-1.png'
import CardComponent from '../../components/Card/Card';
import { Col, Container, Row } from 'react-bootstrap';
import { Footer } from '../../components/Footer/Footer';


export const Home = () => {
    return (
        <>
        <NavBar className='navigator'/>
        <div className='container-product'>
            <div className='visual-product'>
                <div className='text-product'>
                    <p className='best'>THE BEST TECHNOLOGY</p>
                    <p className='offers'>Techv offers you the best prices and conditions as well as an extensive catalog in our store.</p>
                </div>
                <div className='img-product'>
                    <img src={productMac} alt="" />
                    <img className='img-movil-prp' src={productPrincipal} alt="" />
                </div>
            </div>
        </div>
        <div className='all-categories'>
            <div className='categories-home'>
                <div className='all'>ALL</div>
                <div>PHONE</div>
                <div>COMPUTER</div>
                <div>WATCH</div>
                <div>HEADPHONES</div>
                <div>ACCESORIES</div>
                <div className='div-filter'>
                    <div className='filter'>FILTER</div>
                </div>
            </div>
        </div>
        <Container className='container-products'>
            <Row className='flex-row d-flex product-home '>
                <Col md={6} lg={6} xl={4} xxl={3} className="card-container">
                <CardComponent
                    image={productMac}
                    showButton={true} 
                    title= "NEW"
                />                  
                </Col>
                <Col md={6} lg={6} xl={4} xxl={3} className="card-container">
                <CardComponent
                    image={productMac}
                    showButton={true} 
                    title= "NEW"
                /> 
                </Col>
                <Col md={6} lg={6} xl={4} xxl={3} className="card-container">
                <CardComponent
                    image={productMac}
                    showButton={true} 
                    title= "NEW"
                /> 
                </Col>
                <Col md={6} lg={6} xl={4} xxl={3} className="card-container">
                <CardComponent
                    image={productMac}
                    showButton={true} 
                    title= "NEW"
                /> 
                </Col>
            </Row>
            <Row>
                <Col md={6} lg={6} xl={4} xxl={3} className="card-container card-final">
                <CardComponent
                    image={productMac}
                    showButton={true} 
                    title= "NEW"
                /> 
                </Col>
                <Col md={6} lg={6} xl={4} xxl={3} className="card-container">
                <CardComponent
                    image={productMac}
                    showButton={true} 
                    title= "NEW"
                /> 
                </Col>
                <Col md={6} lg={6} xl={4} xxl={3} className="card-container">
                <CardComponent
                    image={productMac}
                    showButton={true} 
                    title= "NEW"
                /> 
                </Col>
                <Col md={6} lg={6} xl={4} xxl={3} className="card-container">
                <CardComponent
                    image={productMac}
                    showButton={true} 
                    title= "NEW"
                /> 
                </Col>
            </Row>
        </Container>
        <Footer/>
        </>
    )
};