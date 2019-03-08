import React, { Component } from 'react';
import axios from 'axios';
import {Route, NavLink } from 'react-router-dom'; 
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  } 
  componentDidMount() {
    axios 
    .get('http://localhost:3333/smurfs/')
    .then((smurfs) => this.setState({ smurfs: smurfs.data }))
    .catch(err => console.log(err))
  } 
  
  deleteSmurf = (e, id) => {
    e.preventDefault(); 
    axios 
    .delete(`http://localhost:3333/smurfs/${id}`) 
    .then(res => {
      this.setState({
        smurfs: res.data 
      })
    })
      .catch(err => {
        console.log(err);
      })
  }
 
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
      <div className="nav-bar">
        <NavLink to="/" activeClassName="chosen-smurf">Smurf Village</NavLink>
        <NavLink to="/smurfform" activeClassName="chosen-smurf">Invite a Smurf to the Village!</NavLink>
      </div>
        <Route path="/smurfform" render={props => ( <SmurfForm {...props} addSmurf={this.addSmurf} /> ) } /> 
    <Route exact path="/" render={props => ( <Smurfs {...props} smurfs={this.state.smurfs} deleteSmurf={this.deleteSmurf} /> ) } />
      </div>
    );
  }
}

export default App;
