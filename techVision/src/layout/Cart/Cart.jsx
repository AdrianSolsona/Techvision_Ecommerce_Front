import React, {useState, useEffect} from 'react'
import './Cart.css';
import { useSelector } from "react-redux";
import { userData } from "../userSlice";
import { CartBuy } from '../../services/apiCalls';
import { NavBar } from '../../components/Navbar/NavBar';
import { Footer } from '../../components/Footer/Footer';
import { CardBuy} from '../../components/CardBuy/CardBuy';
import { ButtonAct } from '../../components/ButtonAct/ButtonAct';
import { Button } from 'react-bootstrap';
import { DeleteItemBuy } from '../../services/apiCalls';
import { AllInfoBuy } from '../../services/apiCalls';
import { useNavigate } from 'react-router-dom';
import { addressUsers } from '../../services/apiCalls';
import { productData } from '../productSlice';
import { OrderCart } from '../../services/apiCalls';
import { cleanProductCart }  from '../productSlice';
import { useDispatch } from 'react-redux';




export const Cart = () =>  {

    const credentialsRdx = useSelector(userData);
    console.log(credentialsRdx.credentials.decodificado.userId)
    const dispatch = useDispatch();

    const productBuy = useSelector(productData);
    console.log(productBuy)
    
    const [showMessage, setShowMessage] = useState(false);
    const [orders, setOrders] = useState([]);
    const [products, setProducts] = useState([]);
    const [hasAddress, setHasAddress] = useState(false);
    

    const navigate = useNavigate();

    useEffect(() => {
        // Obtener la dirección del usuario
        addressUsers(credentialsRdx.credentials.token)
            .then(result => {
                // Si la dirección existe, establecer hasAddress en true
                setHasAddress(result.data.length > 0);
            })
            .catch(error => console.log(error));
    })
    console.log(hasAddress)

    useEffect(() => {
        if (products.length === 0) {
            
                CartBuy(credentialsRdx.credentials.token)
            .then(result  => {

                setProducts(result.data);    
            }).catch(error => console.log(error));
        }
    }, [credentialsRdx.credentials.token, products]);
    console.log(products)
   // const totalPrice = products.reduce((total, tag) => total + tag.product.price, 0);
   const totalPrice = productBuy.choosenObjectProduct.reduce((total, item) => {
    return total + item.choosenObjectProduct.price;
    }, 0);
    console.log(totalPrice)
    

    useEffect(() => {
        if (orders.length === 0) {
            
                AllInfoBuy(credentialsRdx.credentials.token)
            .then(result  => {

                setOrders(result.data);    
            }).catch(error => console.log(error));
        }
    }, [credentialsRdx.credentials.token, orders]);
    console.log(orders)
    console.log(credentialsRdx.credentials.decodificado.userId)

    const productIds = productBuy.choosenObjectProduct.map(item => item.choosenObjectProduct);
    console.log(productIds)

    const handleOrderBuy = () => {
        const productIds = productBuy.choosenObjectProduct.map(item => item.choosenObjectProduct);
        console.log(productIds)

        const bodyBuy = {
            userId: credentialsRdx.credentials.decodificado.userId,
            products: productIds,
          };
        
        OrderCart(bodyBuy, credentialsRdx.credentials.token)
        dispatch(cleanProductCart({ choosenObjectProduct: {}}))
          .then(result => {
            console.log("Order created successfully!");
            setShowMessage(true);
          })
          .catch(error => console.log(error));
      };

    const completedOrderIds = orders.filter(order => order.status === "pending").map(order => order.id);
    const completedOrders = completedOrderIds.map(id => {
        return orders.find(order => order.id === id);
      });
    
    console.log(completedOrderIds)
    console.log(completedOrders)

    const emptyCart = () =>{
        try{
            dispatchEvent(cleanProductCart({ ProductCart: {}}))
        navigate("/")
        }catch(error){
            console.log(error);
        }
        
    }
    

    const OrderBuy = () => {
    
        NewAddressShip(credentialsRdx.credentials.token);
        setWelcome(`¡New buy successfully created!`);
        setTimeout(()=>{
          
          navigate("/profile");
      },1000)
      };


    return(
        <>
        <NavBar/>
        {!hasAddress ? ( // Si el usuario no tiene una dirección registrada, mostrar un mensaje
            <div className='no-address'>No address registered. Please register an address<div onClick={()=>navigate("/new/shipping")} className='here-add'>here</div> before continuing.</div>
        ) :
        !showMessage ? (
            <div>
    {productBuy.choosenObjectProduct.map((item, index) => (
      <div key={index}>
        <CardBuy 
            name={item.choosenObjectProduct.name}
            price={item.choosenObjectProduct.price}
            image={item.choosenObjectProduct.image}
            description={item.choosenObjectProduct.description}
        />
        </div>
    ))}
    <div className='total-btn-purchase'>
        <div className='total-price'>Purchase price: ${totalPrice}</div>
        <div className='btn-purchase'><Button className='purchase-items' onClick={handleOrderBuy}>Process order ({productBuy.choosenObjectProduct.length} products)</Button></div>
    </div>
    <div className='clean-button'>
        <div className='clean-products'><Button className='purchase-items' onClick={handleOrderBuy}>Clean cart</Button></div>  
    </div>
    
    </div>
    
        /*<div>   
        {products.map((tag) => (
        <div key={tag.product.id}>
            <CardBuy 
            name={tag.product.name}
            price= {tag.product.price}
            image= {tag.product.image}
            description={tag.product.description}
            />
            <div className='btn-delete'><Button className='delete-item' onClick={() => {
            DeleteItemBuy(tag.product.id, credentialsRdx.credentials.token)
              .then(() => {
                // Eliminar el producto del estado local
                setProducts(products.filter(p => p.id !== tag.id));
              })
              .catch(error => console.log(error));
          }}>Remove from cart</Button></div>
        </div>
        ))}
        <div>
        <div className='total-price'>Purchase price: ${totalPrice}</div>
            <div className='btn-purchase'><Button className='purchase-items' onClick={() =>{setShowMessage(true);OrderBuy()}}>Process order ({products.length} products)</Button></div> 
        </div>
        </div>*/
        ) : (
            <div className='title-buy'>
                <div className='processed'>Your order has been processed!</div>
                <div className='thank'>Thank you for shopping with us.<div onClick={()=>navigate("/orders")} className='see-order'>See order</div></div>
            </div>
        
        )}
        <Footer/>
        </>
    )
}