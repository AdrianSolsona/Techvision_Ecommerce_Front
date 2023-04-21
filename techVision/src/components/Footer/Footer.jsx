import React from 'react';
import './Footer.css'
import { Button, Col, Container, Row } from 'react-bootstrap';

 export const Footer = () =>{
    return(
        <div className='all-footer'>
            <Container>
                <Row>
                    <Col className='col-footer'>
                        <div>
                            <p className='title-footer'>FACTORDENT</p>
                        </div>
                        <div className='icons-car'>
                        <i class="bi bi-facebook"></i>
                        <i class="bi bi-instagram"></i>
                        <i class="bi bi-twitter"></i>
                        <i class="bi bi-linkedin"></i>
                        <i class="bi bi-youtube"></i>
                        </div>
                        <div className='call-free'>
                            <p>Llama ahora gratis al:</p>
                            <Button className='number-phone'>900 111 003</Button>
                        </div>
                    </Col>
                    <Col className='treatment-footer'xs={12} md={12} lg={12} xl={9} xxl={9}>
                            <div className='footer-int-treat'>
                                <p className='treatment-title'>Implantología</p>
                                <p className='treatment-other'>Puente dental sobre implantes</p>
                                <p className='treatment-other'>Implante dental unitario</p>
                                <p className='treatment-other'>Implantes de carga inmediata</p>
                                <p className='treatment-other'>Injerto de hueso y regeneración ósea</p>
                                <p className='treatment-other'>Elevación del seno maxilar</p>
                            </div>
                            <div className='footer-int-treat'>
                                <p className='treatment-title'>Ortodoncia</p>
                                <p className='treatment-other'>Brackets</p>
                                <p className='treatment-other'>Ortodoncia invisible</p>
                                <p className='treatment-other'>Ortodoncia infantil</p>
                                <p className='treatment-other'>Ortodoncia adulta</p>      
                            </div>
                            <div className='footer-int-treat'>
                                <p className='treatment-title'>Estética dental</p>
                                <p className='treatment-other' >Carillas dentales</p>
                                <p className='treatment-other'>Blanqueamiento dental</p>
                                <p className='treatment-other'>Limpieza dental avanzada</p>
                                <p className='treatment-other'>Contorneado dental</p>
                                <p className='treatment-other'>Diseño de sonrisa</p>
                            </div>
                    </Col>
                </Row>
            </Container>
            <div className='separator-container'>
                <hr className='separator'/>
            </div>
            <div className='privacy-all'>
                <div className='privacy-container'>
                    <p className='privacy'>Términos legales</p>
                    <p className='privacy'>Pólitica de privacidad</p>
                    <p className='privacy'>Pólitica de cookies</p>
                    <p className='privacy'>Mapa web</p>
                    <p className='privacy'>Accesibilidad</p>
                </div> 
                    <div className='reserved-container'>
                        <p className='reserved'>© Factordent. Todos los derechos reservados</p>
                    </div>
            </div>
            <div className='content-advisor'>
                <p className='advisor'>El contenido sobre salud bucodental de la web y blog de Vitaldent está revisado por nuestra junta de revisión médica y nuestro equipo de expertos para que esté actualizado y en consonancia con la información médica basada en la evidencia más reciente y las pautas de salud bucodental aceptadas. Este contenido educativo no es un consejo médico o de diagnóstico. El uso de este sitio está sujeto a nuestros términos legales y política de privacidad. En caso de duda o cualquier comentario sobre los contenidos publicados en este sitio, por favor, póngase en contacto con nosotros. © 2021 Vitaldent todos los derechos reservados.</p>
            </div>
        </div>
    )
    
 }