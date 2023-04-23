import axios from 'axios'

const root = "https://localhost:3000/"

export const logMe = async(body) => {
    return await axios.post(`${root}login`, body)
}


