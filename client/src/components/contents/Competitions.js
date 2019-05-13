import React, { Component } from 'react'
import NavBar from './NavBar';
import './cssContents/Competitions.css'

export default class Competitions extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <p>Welcome User</p>
        <div className="competitions">
          <h2>Competitions</h2>
            <div className="liga">
               <div className="santander">
                 <img className="liga-image" src="/images/ligasantander.png" width= "150px" alt="" />
              </div>
              <div className="champions">
                 <img className="champions-image" src="/images/champions.png" width= "150px" alt="" />
              </div>
              </div>
    <div className="segunda">
      <div className="undostres">
          <img className="segunda-image"src="/images/liga123.png" width= "150px" alt="" />
      </div>
      <div className="premier">
          <img className="premier-image" src="/images/premier.png" width= "150px" alt="" />
      </div>
    </div>
  </div>
      </div>
    )
  }
}
