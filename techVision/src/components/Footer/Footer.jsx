import React from 'react';
import './Footer.css'
import { Col, Container, Row } from 'react-bootstrap';

 export const Footer = () =>{
    return(
        <div className='all-footer'>
            <Container className='container-prp-footer'>
                <Row className='flex-row d-flex '>
                <Col className='col-footer-int'xs={12} md={12} lg={12} xl={9} xxl={3}>
                            <div>
                                <p className='footer-title'>CUSTOMER SERVICE</p>
                                <p className='footer-other'>Help & Contact Us</p>
                                <p className='footer-other'>Return & Refunds</p>
                                <p className='footer-other'>Orders</p>
                                <p className='footer-other'>Terms & Conditions</p>
                            </div>
                    </Col>
                    <Col className='col-footer-int'xs={12} md={12} lg={12} xl={9} xxl={3}>
                            <div>
                                <p className='footer-title'>COMPANY</p>
                                <p className='footer-other'>What We Do</p>
                                <p className='footer-other'>Available Services</p>
                                <p className='footer-other'>Latest posts</p>
                                <p className='footer-other'>FAQs</p>
                            </div>
                    </Col>
                    <Col className='col-footer-int'xs={12} md={12} lg={12} xl={9} xxl={3}>
                            <div>
                                <p className='footer-title'>SOCIAL MEDIA</p>
                                <p className='footer-other'>Twitter</p>
                                <p className='footer-other'>Instagram</p>
                                <p className='footer-other'>Facebook</p>
                                <p className='footer-other'>Linkedin</p>
                                
                            </div>
                    </Col>
                    <Col className='col-footer-int'xs={12} md={12} lg={12} xl={9} xxl={3}>
                            <div>
                                <p className='footer-title'>PROFILE</p>
                                <p className='footer-other'>My account</p>
                                <p className='footer-other'>Cart</p>
                                <p className='footer-other'>Logout</p>
                                <p className='footer-other'>Help & support</p>
                            </div>
                    </Col>      
                </Row>
            </Container>
            <div className='separator-container'>
                <hr className='separator'/>
            </div>
            <div className='content-advisor'>
                <p className='advisor'>© 2023 Techv Interactive, All Rights Reserved</p>
            </div>
        </div>
    )
    
 }