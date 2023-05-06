import React from 'react'
import { NavBar } from '../../components/Navbar/NavBar';
import './Home.css';
import productPrincipal from '../../assets/iphone-13-pro-max-plata-5-1-500.png';
import productMac from '../../assets/mac-prp-1.png'
import CardComponent from '../../components/Card/Card';
import CardHome from '../../components/CardHome/CardHome';
import { Col, Container, Row } from 'react-bootstrap';
import { Footer } from '../../components/Footer/Footer';
import { Navigator } from '../../components/Navigator/Navigator';
import { useNavigate } from 'react-router-dom';
import  productAirPods  from '../../assets/airpods-max-removebg-preview.png'
import  watchUltra  from '../../assets/apple-watch-removebg-preview.png'
import  appleTv  from '../../assets/apple-tv-1-removebg-preview.png'
import  ipadPro  from '../../assets/ipad-pro-1-removebg-preview.png'
import macBook from '../../assets/macbook-air-removebg-preview.png'

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
                    <img className='img-movil-prp-2' src={productMac} alt="" />
                    <img className='img-movil-prp' src={productPrincipal} alt="" />
                </div>
            </div>
        </div>
        <div className="the-best">
            <div className="best-container">
                <p className="best-2">The best products, </p>
                <p className="also">also at the best prices in our store.</p>
            </div>
        </div>
        <Container className='container-products'>
            <Row className='flex-row d-flex product-home '>
                <Col xs={12} md={6} lg={6} xl={4} xxl={3} className="card-container">
                <CardHome
                    image={ipadPro}
                    showButton={true} 
                    title= "NEW"
                    productName="IPAD PRO'"
                    price="579"
                />                  
                </Col>
                <Col xs={12} md={6} lg={6} xl={4} xxl={3} className="card-container">
                <CardHome
                    image={productAirPods}
                    showButton={true} 
                    title= "AVAIABLE"
                    productName="AIRPODS PRO"
                    price="299"
                /> 
                </Col>
                <Col xs={12} md={6} lg={6} xl={4} xxl={3} className="card-container">
                <CardHome
                    image={watchUltra}
                    showButton={true} 
                    title= "NEW"
                    productName="APPLE WATCH ULTRA"
                    price="400"
                /> 
                </Col>
                <Col xs={12} md={6} lg={6} xl={4} xxl={3} className="card-container">
                <CardHome
                    image={appleTv}
                    showButton={true} 
                    title= "NEW"
                    productName="APPLE TV 4K"
                    price="1700"
                /> 
                </Col>
            
                <Col xs={12} md={6} lg={6} xl={4} xxl={3} className="card-container card-final">
                <CardHome
                    image={productMac}
                    showButton={true} 
                    title= "AVAIABLE"
                    productName="IMAC 24'"
                    price="1500"
                /> 
                </Col>
                <Col xs={12} md={6} lg={6} xl={4} xxl={3} className="card-container">
                <CardHome
                    image={macBook}
                    showButton={true} 
                    title= "NEW"
                    productName="MACBOOK AIR"
                    price="1250"
                />
                </Col>
                <Col xs={12} md={6} lg={6} xl={4} xxl={3} className="card-container">
                <CardHome
                    image={productPrincipal}
                    showButton={true} 
                    title= "NEW"
                    productName="IPHONE PRO MAX"
                    price="1200"
                /> 
                </Col>
                <Col xs={12} md={6} lg={6} xl={4} xxl={3} className="card-container">
                <CardHome
                    image={productMac}
                    showButton={true} 
                    title= "NEW"
                    productName="IPHONE PRO MAX"
                    price="1100"
                /> 
                </Col>
            </Row>
        </Container>
        <Footer/>
        </>
    )
};