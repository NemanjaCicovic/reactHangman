import React, {Component} from 'react'


class Menu extends Component {

  render() {

    return (
        <ul class="menu">
        <li title="home"><a href="/" class="home">home</a></li>
        <li title="instructions"><a href="/instructions" class="search">instructions</a></li>
      </ul>
    )
  }
}


export default Menu;