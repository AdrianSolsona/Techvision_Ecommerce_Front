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


