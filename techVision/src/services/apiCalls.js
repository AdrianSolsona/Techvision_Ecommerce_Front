import axios from 'axios'

const root = "https://techvisionecommerce-production.up.railway.app/"

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

export const updateAddress = async (id, body, token) => {
  let config = {
    headers: { 
      'Authorization': 'Bearer '+ token,  
    }
  };

  return await axios.put(`${root}address/${id}`, body, config);
}

export const deleteMyAddress = async (id, token) => {
  let config = {
    headers: { 
      'Authorization': 'Bearer '+ token,  
    }
  };

  return await axios.delete(`${root}address/${id}`, config);
}

export const ProductBuy = async ( body, token) => {
  let config = {
    headers: { 
      'Authorization': 'Bearer '+ token,  
    }
  };

  return await axios.post(`${root}buys`, body, config);
}

export const CartBuy = async ( token ) => {
  let config = {
    headers: { 
      'Authorization': 'Bearer '+ token,  
    }
  };

  return await axios.get(`${root}buys/cart`, config);
}

export const DeleteItemBuy= async ( id, token ) => {
  let config = {
    headers: { 
      'Authorization': 'Bearer '+ token,  
    }
  };

  return await axios.delete(`${root}buys/${id}`, config);
}

export const AllInfoBuy = async ( token ) => {
  let config = {
    headers: { 
      'Authorization': 'Bearer '+ token,  
    }
  };

  return await axios.get(`${root}buys/info`, config);
}

export const ChangeOrder = async ( id, token ) => {
  let config = {
    headers: { 
      'Authorization': 'Bearer '+ token,  
    }
  };

  return await axios.put(`${root}orders/buys/${id}`, config);
}



