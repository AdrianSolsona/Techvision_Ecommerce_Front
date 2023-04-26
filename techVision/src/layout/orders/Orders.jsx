import React, {useState, useEffect} from 'react'
import './Orders.css';
import { useSelector } from "react-redux";
import { userData } from "../userSlice";
import { NavBar } from '../../components/Navbar/NavBar';
import { Footer } from '../../components/Footer/Footer';
import Table from 'react-bootstrap/Table';
import { AllOrderUsers } from '../../services/apiCalls';
import Moment from 'moment';

export const OrderUsers = () =>  {

    const [orders, setOrders] = useState([]);
    

    const ReduxCredentials = useSelector(userData);

    useEffect(() => {
        if (orders.length === 0) {
                
            AllOrderUsers(ReduxCredentials.credentials.token)
                .then(result  => {
                    setOrders(result.data);
                }).catch(error => console.log(error));
        }
    }, [orders]);
    
    console.log(orders)

    return (
        <>
        <NavBar/>
            <div className='container-table'>
            <Table striped bordered hover size="sm" className='all-table'>
                <thead className='head-data'>
                <tr>
                    <th className='data-th'>ID</th>
                    <th className='data-th'>USER ID</th>
                    <th className='data-th'>ORDER DATE</th>
                    <th className='data-th'>STATUS</th>
                    <th className='data-th'>QUANTITY</th>
                    <th className='data-th'>ADDRESS</th>
                </tr>
                </thead>
                <tbody>
                {orders.map((order) => (
                    <tr key={order.id}>
                        <td className='data-cell'>{order?.id}</td>
                        <td className='data-cell'>{order?.user_id}</td>
                        <td className='data-cell'>{Moment (order?.date).format('DD/MM/YYYY HH:mm:ss')}</td>
                        <td className='data-cell'>{order?.status}</td>   
                        <td className='data-cell'>{order?.total}</td>
                        <td className='data-cell'>{order?.User.email}</td> 
                    </tr>
                ))}
                </tbody>
            </Table>
            </div>
            <Footer/>
        </>
    );
  }