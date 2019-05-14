import React, { Component } from 'react';
import "./cssContents/Accordion.css";
import DBservice from '../../services/DBservice'
import NavBar from './NavBar';

export default class MatchaDays extends Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
    this.services = new DBservice()
  }

  getMatchDays = () => {
    return this.services.getAllMatches()
        .then(data=>{
          
           this.setState({

              data
            })
        })
  }

  componentDidMount() {
    this.getMatchDays()
  }


  render() {
    return (
    <div className="container">
          <NavBar></NavBar>
      <ul className="accordion">
         <li className="accordion__item">
            <input type="checkbox" defaultChecked/>
            <i className="accordion__arrow"></i>
            <h2 className="accordion__title">Jornada 1</h2>
            <div className="vs-container">
                <div className="segunda">
                      <div className="undostres">
                          <img className="segunda-image"src="https://www.unionrayo.es/wp-content/uploads/2018/08/Atletico-de-Madrid.png" width= "50px" alt=""/>
                      </div>
                      <div className="premier">
                          <img className="premier-image" src="http://as00.epimg.net/img/comunes/fotos/fichas/equipos/large/253.png" width= "50px" alt=""/>
                      </div>
                    </div>
              </div>
          </li>
        </ul>
      </div>
    )
  }
}
