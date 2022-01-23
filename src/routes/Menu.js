import React from "react";
import { Link } from "react-router-dom";

export default class Menu extends React.Component {
  render() {
    return (
      <div>
<ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/datos00">Datos00</Link></li>
      <li><Link to="/datos01">Datos01</Link></li>
      <li><Link to="/datos02">Datos02</Link></li>
</ul>
      </div>
    );
  }
}