import axios from 'axios'

const root = "http://localhost:3000/"

export const logMe = async(body) => {
    return await axios.post(`${root}login`, body)
}

export const registerUser = async (body) => {

  return await axios.post(`${root}users`, body)

}

export const dataUsers = async (token) => {
  let config = {
    headers: { 
      'Authorization': 'Bearer '+ token,  
    }
  };

  return await axios.get(`${root}users`, config);
}

export const addressUsers = async (token) => {
  let config = {
    headers: { 
      'Authorization': 'Bearer '+ token,  
    }
  };

  return await axios.get(`${root}address`, config);
}

export const allProducts = async (body) => {

  return await axios.get(`${root}products/all`, body)

}
export const allCategories = async (body) => {

  return await axios.get(`${root}categories/all`, body)

}

export const bringUsers = async (token) => {
  let config = {
    headers: { 
      'Authorization': 'Bearer '+ token,  
    }
  };

  return await axios.get(`${root}users/all`, config);
}

export const AllAddressUsers = async (token) => {
  let config = {
    headers: { 
      'Authorization': 'Bearer '+ token,  
    }
  };

  return await axios.get(`${root}address/all`, config);
}

export const AllOrderUsers = async (token) => {
  let config = {
    headers: { 
      'Authorization': 'Bearer '+ token,  
    }
  };

  return await axios.get(`${root}orders/all`, config);
}

export const NewAddressShip = async (body, token) => {
  let config = {
    headers: { 
      'Authorization': 'Bearer '+ token,  
    }
  };

  return await axios.post(`${root}address`, body, config);
}




