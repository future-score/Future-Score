import React, { Component } from 'react';
import "./NavBar.css"

//clase componente que renderiza los contenidos genéricos
//usando rendering condicional y el componente Switch que ya conocéis podéis mostrar los contenidos oportunos que queráis
export default class Contents extends Component {
  render() {
    return (
      <div class="nav">
        <input type="checkbox" id="nav-check" />
        <div class="nav-header">
          <div class="nav-title">
           LOGO
        </div>
        <div id="user-aside">
              <img id="user-photo"src="" width= "40px" height= "40px" alt="" />
              <a href="../profile/personal"><p>FOTO</p></a>
        </div>
      </div>
      </div>
    )
  }
}
