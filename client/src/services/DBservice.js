require('dotenv').config();

import axios from 'axios';

class DBservice {
    constructor() {
        super()
        let service = axios.create({
        baseURL: `${process.env.REACT_APP_URL}`,
        withCredentials: true
        });
        console.log(baseURL)
        this.service = service
}

getMatches = (num) => {
    return this.service.get(`/matches/${num}`)
      .then(response => response.data)
    }

getMatch = (id) => {
    return this.service.get(`/teams/${id}`)
        .then(response => response.data)
    }

getHomeTeam = (id) => {
    return this.service.get(`/teams/hometeam/${id}`)
        .then(response => response.data)
    }

getHomeTeam = (id) => {
    return this.service.get(`/teams/awayteam/${id}`)
        .then(response => response.data)
    }

}