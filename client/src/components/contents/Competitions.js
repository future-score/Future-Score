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
          <p className="message-user">{this.props.loggedInUser}</p>
          <div className="competitions">
            <h2>Competitions</h2>
              <div className="competition-container">
                 <div className="santander">
                 <a href="/matchdays"><img className="liga-image" src="/images/ligasantander.png" width= "120px" alt="" />
                  </a>
                </div>
                <div className="champions">
                 <a href="/matchdays"><img className="champions-image" src="/images/champions.png" width= "120px" alt="" />
                 </a>
                </div>
                </div>
      <div className="competition-container">
        <div className="undostres">
           <a href="/macthdays"><img className="segunda-image"src="/images/liga123.png" width= "120px" alt="" />
           </a>
        </div>
        <div className="premier">
         <a href="/macthdays"><img className="premier-image" src="/images/premier.png" width= "120px" alt="" />
         </a>
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
