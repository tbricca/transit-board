import React, { Component } from 'react';
// import logo from './logo.svg';
import busApiCall from './Components/apis.js'
import './App.css';

class App extends Component {
  componentDidMount() {
    busApiCall() 
  }
  render() {
    return (
      <div className="App">
        <div className="Container-Fluid">
          <div className="Top">
            <h1>Transit Board</h1>
            <h4>Here's a board to track all the transit that is around you </h4>
            <input className="searchbox" type='text' placeholder="Search by city..."  />
          </div>
          <div className="card" style={{width: "20rem"}} >
              <img className="card-img-top" src="..." alt="Card image cap" />
              <div className="card-block">
                <h4 className="card-title">Card title</h4>
                <p className="card-text">{busApiCall()} </p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Cras justo odio</li>
                <li className="list-group-item">Dapibus ac facilisis in</li>
                <li className="list-group-item">Vestibulum at eros</li>
              </ul>
              <div className="card-block">
                <a href="#" className="card-link">Card link</a>
                <a href="#" className="card-link">Another link</a>
              </div>
            </div>
        </div>
      </div>
    );
  }
}
// value={this.state.location} onChange={this.handleLocationChange}
export default App;
