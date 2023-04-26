import React, {useState, useEffect} from 'react'
import './UserAdmin.css';
import { useSelector } from "react-redux";
import { userData } from "../userSlice";
import { bringUsers } from '../../services/apiCalls';
import { NavBar } from '../../components/Navbar/NavBar';
import { Footer } from '../../components/Footer/Footer';
import Table from 'react-bootstrap/Table';


export const UserAdmin = () =>  {

    const [users, setUsers] = useState([]);
    
    const ReduxCredentials = useSelector(userData);

    useEffect(() => {
        if (users.length === 0) {
            
                bringUsers(ReduxCredentials.credentials.token)
            .then(result  => {

                setUsers(result.data);    
            }).catch(error => console.log(error));
        }
    }, [ReduxCredentials.credentials.token, users]);
    console.log(users)
    

    return (
        <>
        <NavBar/>
            <div className='container-table'>
            <Table striped bordered hover size="sm" className='all-table'>
                <thead className='head-data'>
                <tr>
                    <th className='data-th'>ID</th>
                    <th className='data-th'>EMAIL</th>
                    <th className='data-th'>NAME</th>
                    <th className='data-th'>SURNAME</th>
                    <th className='data-th'>COUNTRY</th>
                    <th className='data-th'>CITY</th>
                    <th className='data-th'>ADDRESS</th>
                    <th className='data-th'>PHONE</th>
                    <th className='data-th'>POSTCODE</th>
                </tr>
                </thead>
                <tbody>
                {users.map((user) => (
                    <tr key={user.id}>
                        <td className='data-cell'>{user?.id}</td>
                        <td className='data-cell'>{user?.email}</td>
                        <td className='data-cell'>{user.Addresses[0]?.name}</td>
                        <td className='data-cell'>{user?.Addresses[0]?.surname}</td>
                        <td className='data-cell'>{user?.Addresses[0]?.country}</td>   
                        <td className='data-cell'>{user?.Addresses[0]?.city}</td>
                        <td className='data-cell'>{user?.Addresses[0]?.address}</td>
                        <td className='data-cell'>{user?.Addresses[0]?.phone}</td>
                        <td className='data-cell'>{user?.Addresses[0]?.postcode}</td>  
                    </tr>
                ))}
                </tbody>
            </Table>
            </div>
            <Footer/>
        </>
    );
  }
  
