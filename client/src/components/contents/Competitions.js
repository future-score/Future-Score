import React, { Component } from 'react'
import NavBar from './NavBar';
import './cssContents/Competitions.css'

export default class Competitions extends Component {
  constructor(props) {
    super (props)
    this.state = {
      data: {},
      user: this.props.user
    }

  }

  componentWillReceiveProps=(nextProps)=>{
    console.log(nextProps)
  }

  // getUser=()=>{
  //   this.props.getUser()
  // }

  render() {
    if(this.state.user!==null){

    return (
      <div>
        <NavBar/>
        <div className="competitions">
          <h2>¡Hola {this.state.user.username}!</h2>
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
  }else{
    return (
      <h1>LOADING...</h1>
    )
  }
}
}
