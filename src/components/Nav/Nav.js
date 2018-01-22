import React from "react";
import { Link } from "react-router-dom";
// import logo from './logo.svg';
// import './App.c;ss';
import "./Nav.css";

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
const Nav = () => (
        <nav className="Nav-header">
        
         <h1 className="Nav-title"></h1>


 <div className="row">
 <div className="col-md-4">SISTORY</div>
 <div className="col-md-4">ORLANDO</div>
  <div className="col-md-4"><p><a href="https://www.wonderfogg.com./">EVENTS</a></p>

</div>
 </div>

 <div className="row">
 <div className="col-md-4"id="sistorycov"></div>
 <div className="col-md-4"id="blacklogo"></div>
 <div className="col-md-4"id="photoal"></div>
</div>

        </nav>
  

 	);







export default Nav;