import axios from 'axios';

class AuthService {
  constructor() {
    this.service = axios.create({
      baseURL: `${process.env.REACT_APP_URL}/`,
      withCredentials: true
    });
  }
  
  signup = (username, password) => {
    return this.service.post('auth/signup', {username, password})
    .then(response => response.data)
  }

  login = (username, password) => {
    return this.service.post('auth/login', {username, password})
    .then(response => {
      return response.data})
  }

  loggedin = () => {
    console.log("Entra")
    return this.service.get('auth/currentuser',)
    .then(response => {
      console.log(response)
      return response.data
    })
  }

  logout = () => {
    return this.service.get('auth/logout',)
    .then(response => response.data)
  }
}

export default AuthService;