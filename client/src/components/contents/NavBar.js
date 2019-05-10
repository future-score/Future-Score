import React, { Component } from 'react';
import "./NavBar.css"

//clase componente que renderiza los contenidos genéricos
//usando rendering condicional y el componente Switch que ya conocéis podéis mostrar los contenidos oportunos que queráis
export default class Contents extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
     <div>
       <nav>
         <a href="/login" onClick={()=>this.props.logout()}>LOGOUT</a>
       </nav>
     </div>
    )
  }
}
