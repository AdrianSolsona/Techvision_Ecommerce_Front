import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { NavBar } from '../../components/Navbar/NavBar';
import { Col, Container, Row } from 'react-bootstrap';
import { Footer } from '../../components/Footer/Footer';
import { allCategories, allProducts } from '../../services/apiCalls';
import productMac from '../../assets/mac-prp-1.png';
import './shop.css';
import CardComponent from '../../components/Card/Card';

export const Shop = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    Promise.all([allCategories(), allProducts()])
      .then(([categoryData, productData]) => {
        setCategories(categoryData.data);
        setProducts(productData.data);
      })
      .catch(error => console.log(error));
  }, []);

  const handleCategoryClick = categoryId => {
    setSelectedCategory(categoryId);
  };

  const filteredProducts = selectedCategory
    ? products.filter(p => p.category.id === selectedCategory)
    : products;

  return (
    <>
      <NavBar />
      <div className="your-categories">
        {categories.map(c => (
          <div
            className="categories-int"
            key={c.id}
            onClick={() => handleCategoryClick(c.id)}
          >
            {c.name}
          </div>
        ))}
      </div>
      <div className="the-latest">
        <div className="latest-container">
          <p className="lastest">The latest. </p>
          <p className="take">Take a look at what’s new, right now.</p>
        </div>
      </div>
      <Container>
        {filteredProducts.length > 0 ? (
          <Row>
            {filteredProducts.map(tag => {
              return (
                <Col
                  key={tag.id}
                  sm="12"
                  md="6"
                  lg="6"
                  xl="6"
                  xxl="4"
                  className="col-products"
                >
                  <CardComponent
                    title={tag.status}
                    image={tag.image}
                    showButton={true}
                    productName={tag.name}
                    price={tag.price}
                  />
                </Col>
              );
            })}
          </Row>
        ) : (
          <div className="date-confirm">LOADING PRODUCTS...</div>
        )}
      </Container>
      <Footer />
    </>
  );
};
