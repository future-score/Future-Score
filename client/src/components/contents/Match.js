import React, { Component } from 'react'
import NavBar from './NavBar'
import './cssContents/Match.css'

export default class Match extends Component {
  render() {
    return (
      <div className="match-container">
      <NavBar></NavBar>
      <div className="match">
          <div className="segunda">
              <div className="undostres">
                  <img className="segunda-image"src="https://www.unionrayo.es/wp-content/uploads/2018/08/Atletico-de-Madrid.png" width= "50px" alt="" />
              </div>
              <div className="premier">
                  <img className="premier-image" src="http://as00.epimg.net/img/comunes/fotos/fichas/equipos/large/253.png" width= "50px" alt="" />
              </div>
            </div>
      </div>
    </div>
    )
  }
}
