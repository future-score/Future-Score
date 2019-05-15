import axios from 'axios';

class Predservice {
    constructor() {
        this.service = axios.create({
        baseURL: `${process.env.REACT_APP_URL}/math`,
        withCredentials: true
        });
}

getPrediction = (data) => {
    return this.service.post(`/`, {data})
      .then(response => {
        return response.data
      })
    }
}

export default Predservice;