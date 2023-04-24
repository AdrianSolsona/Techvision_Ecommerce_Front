import React, {useState, useEffect} from 'react'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { NavBar } from '../../components/Navbar/NavBar';
import { Col, Container, Row } from 'react-bootstrap';
import { Footer } from '../../components/Footer/Footer';
import { allCategories, allProducts } from '../../services/apiCalls';
import productMac from '../../assets/mac-prp-1.png'
import './shop.css'
import CardComponent from '../../components/Card/Card';


export const Shop = () => {

    const [product, setProduct] = useState([]);
    const [category, setCategory] = useState([]);

    const navigate = useNavigate();

    useEffect(()=>{
        if(product.length === 0){
            Promise.all([
                allCategories(),
                allProducts()
                
            ])
            .then(([categoryData, productData]) => {
                setCategory(categoryData.data);
                setProduct(productData.data);
                    }
                )
                .catch(error => console.log(error));
        }

    },[category, product])

     return (
        <>
        <NavBar/>
        <div className='your-categories'>
            <div className='categories-int'>{category.length > 0 && <div>{category[0].name}</div>}</div>
            <div className='categories-int'>{category.length > 0 && <div>{category[1].name}</div>}</div>
            <div className='categories-int'>{category.length > 0 && <div>{category[2].name}</div>}</div>
            <div className='categories-int'>{category.length > 0 && <div>{category[3].name}</div>}</div>
            <div className='categories-int'>{category.length > 0 && <div>{category[4].name}</div>}</div>
            <div className='categories-int'>{category.length > 0 && <div>{category[5].name}</div>}</div>
            <div className='categories-int'>{category.length > 0 && <div>{category[6].name}</div>}</div>
        </div>
        <div className='the-latest'>
            <div className='latest-container'><p className='lastest'>The latest. </p><p className='take'>Take a look at what’s new, right now.</p></div>
        </div>
            <Container>
            { product.length > 0 ? 
                (<Row>
                    {
                        product.map(
                            tag => {
                                return (
                                    <Col key={tag.id} sm="12" md="6" lg="6" xl="6" xxl="4" className='col-products'>
                                        <CardComponent
                                            title={tag.status}
                                            image={productMac}
                                            showButton={true}
                                            productName={tag.name}
                                            price={tag.price}   
                                        />  
                                    </Col>
                                )
                            }
                        )
                    }
                </Row>)
                : 
                
                (<div className='date-confirm'>LOADING PRODUCTS...</div>) 
            }
            </Container>
         <Footer/>
         </>
     )
}