import React, {useState, useEffect} from 'react'
import './OrderUser.css';
import { useSelector } from "react-redux";
import { userData } from "../userSlice";
import { AllInfoBuy } from '../../services/apiCalls';
import { NavBar } from '../../components/Navbar/NavBar';
import { Footer } from '../../components/Footer/Footer';
import Table from 'react-bootstrap/Table';
import Moment from 'moment';
import { CardOrderUser } from '../../components/CardOrderUser/CardOrderUser';

export const OrderUser = () =>  {

    const [orders, setOrders] = useState([]);
    
    const ReduxCredentials = useSelector(userData);

    useEffect(() => {
        if (orders.length === 0) {
            
                AllInfoBuy(ReduxCredentials.credentials.token)
            .then(result  => {

                setOrders(result.data);    
            }).catch(error => console.log(error));
        }
    }, [ReduxCredentials.credentials.token, orders]);
    console.log(orders)

    
    
    return(
        <>
        <NavBar/>
        <div className='container-table'>
        <Table striped bordered hover size="sm" className='all-table'>
                <thead className='head-data'>
                <tr>
                    <th className='data-th'>ID</th>
                    <th className='data-th'>DATE</th>
                    <th className='data-th'>STATUS</th>
                    <th className='data-th'>PRODUCTS</th>
                    <th className='data-th'>INDIVIDUAL PRICES</th>
                    <th className='data-th'>TOTAL PURCHASE</th>
                </tr>
                </thead>
                <tbody>
                {orders.map((item) => (
                    <tr key={item.id}>
                        <td className='data-cell'>{item.id}</td>
                        <td className='data-cell'>{Moment (item.date).format('DD/MM/YYYY HH:mm:ss')}</td>
                        <td className='data-cell'>{item.status}</td>
                        <td className='data-cell'>{item.buys.map((buy) => buy.product.name).join(' /   ')}</td>
                        <td className='data-cell'>${item.buys.map((buy) => buy.product.price).join(' /   $')}</td>
                        <td className='data-cell'>${item.buys.reduce((total, buy) => total + buy.product.price, 0)}</td>   
                    </tr>
                ))}
                </tbody>
            </Table>
            </div>
            <div className='card-alternative'>
                {orders.map((item) => (
                <CardOrderUser key={item.id}
                        numOrder={item.id}
                        date={Moment (item.date).format('DD/MM/YYYY HH:mm:ss')}
                        status={item.status}
                        products={item.buys.map((buy) => buy.product.name).join(' /   ')}
                        indPrices={item.buys.map((buy) => buy.product.price).join(' /   $')}
                        tPurchase={item.buys.reduce((total, buy) => total + buy.product.price, 0)}
                        />
                ))}
            </div>    
        <Footer/>
        </>
    )
    
}