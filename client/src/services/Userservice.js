import axios from 'axios';

class Userservice {
    constructor() {
        this.service = axios.create({
        baseURL: `${process.env.REACT_APP_URL}/user`,
        withCredentials: true
        });

}

getUser = () => {
    return this.service.get('/')
    .then(response=>{
        console.log(response)
         return response
    })
    
}
}
export default Userservice;