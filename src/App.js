import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>


    <div className="container text-center">
        <h1>THE ORLANDO SISTERS</h1>
        <p>
            <h3>Of Perpetual Indulgence</h3>
        </p>
        <p>Misson, Events and World Wide Orders.</p>
    </div>
    <div className="row text-center">
        <div className="col-sm-4">
            <div className="thumbnail">
                <img src="../images/ospi-rosary.JPG" alt="Paris" />
                <p>
                    <strong>MISSION</strong>
                </p>
                <p></p>
                <button className="btn"></button>
            </div>
        </div>
        <div className="col-sm-4">
            <div className="thumbnail">
                <img src="../images/ospiblacklogo.JPG" alt="New York" />
                <p>
                    <strong>EVENTS</strong>
                </p>
                <p></p>
                <button className="btn"></button>
            </div>
        </div>
        <div className="col-sm-4">
            <div className="thumbnail">
                <img src="../images/ospiwhitelogo.JPG" alt="San Francisco" />
                <p>
                    <strong>WORLD ORDERS</strong>
                </p>
                <p></p>
                <button className="btn"></button>
            </div>
        </div>
    </div>
   
   
    <h3>World Orders</h3>
    <div id="map"></div>
 


    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
    <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDnBWxK-ducko_tj_Asq246SlBQ9N1otDo&callback=initMap">
    </script>
    <script type="text/javascript" src="/static/js/main.c309969b.js"></script>


      </div>
    );
  }
}

export default App;
