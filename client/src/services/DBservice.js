import axios from 'axios';

class DBservice {
    constructor() {
        this.service = axios.create({
        baseURL: `${process.env.REACT_APP_URL}`,
        withCredentials: true
        });
}

getAllMatches = () => {
    return this.service.get(`matches/all`)
      .then(response => response.data)
    }

getMatch = id => {
    return this.service.get(`/matches/${id}`)
        .then(response => response.data[0])
    }

// getHomeTeam = (id) => {
//     console.log(getHomeTeam)
//     return this.service.get(`/hometeam/${id}`)
//         .then(response => response.data)
//     }

// getAwayTeam = (id) => {
//     console.log(getAwayTeam)
//     return this.service.get(`/awayteam/${id}`)
//         .then(response => response.data)
//     }

}

export default DBservice