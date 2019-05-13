import React, { Component } from 'react';
import "./cssContents/NavBar.css"

//clase componente que renderiza los contenidos genéricos
//usando rendering condicional y el componente Switch que ya conocéis podéis mostrar los contenidos oportunos que queráis
export default class Contents extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
     <div>
        <nav className="navbar">
          <img className="cat"src="https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/480/public/media/image/2017/11/274699-entender-gato.jpg?itok=UDpzBDsf" width="40px" height="40px"alt=""/>
          <p>polo</p>
          <img className="user" src="https://static.thenounproject.com/png/17241-200.png" width="30px" height="30px"alt=""/>
        </nav>
      </div>
        // {/* <a href="/login" onClick={()=>this.props.logout()}>LOGOUT</a> */}
    )
  }
  }
