import axios from 'axios';

class Predservice {
    constructor() {
        this.service = axios.create({
        baseURL: `${process.env.REACT_APP_URL}/math`,
        withCredentials: true
        });
}

getPrediction = (data) => {
    return this.service.get(`/`, {data})
      .then(response => response)
    }
}

export default Predservice;