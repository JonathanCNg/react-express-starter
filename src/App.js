import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teamMembers: ['iggy','jon','rob','fader'],
    };
  //   this.handleChange = this.handleChange.bind(this);
  //   this.handleSubmit = this.handleSubmit.bind(this);
  }

  // handleChange(event) {
  //   this.setState({ name: event.target.value });
  // }

  // handleSubmit(event) {
  //   event.preventDefault();
  //   fetch(`/api/greeting?name=${encodeURIComponent(this.state.name)}`)
  //     .then(response => response.json())
  //     .then(state => this.setState(state));
  // }

  createPairs() {
    let iggysPartner = Math.ceil(Math.random() * 3)
    console.log(iggysPartner)
    let pairs = [[0,iggysPartner]]
    if(iggysPartner===1) {
      pairs.push([2,3])
    }
    else if (iggysPartner === 2) {
      pairs.push([1,3]) 
    }
    else
      pairs.push([1,2]) 
    return pairs
  }

  displayPairs() {
    let pairs = this.createPairs();
    return (
      <div>
        <h2>Pairs of the day!</h2>
        <h3>Pair 1</h3>
        <div>{this.state.teamMembers.at(pairs.at(0).at(0))}, {this.state.teamMembers.at(pairs.at(0).at(1))}</div>
        <h3>Pair 2</h3>
        <div>{this.state.teamMembers.at(pairs.at(1).at(0))}, {this.state.teamMembers.at(pairs.at(1).at(1))}</div>
      </div>
    )
  }

  exampleFunctionComponent() {
    return (
      <div>hello</div>
    )
  }

  displayMember(index) {
    return (
      <div>{this.state.teamMembers.at(index)}</div>
    )
  }
  displayTeamMembers() {
    let renderedOutput = this.state.teamMembers.map(item => <div> {item} </div>)
    return (
      <div>
        <h2>Team Members!</h2>
        {renderedOutput}
      </div>
    )
  }
    
    render() {
      return (
        <div className="App">
        <h1>Welcome to Pairpears</h1>
        
        <div>
          <h2>Add team members!</h2>
          <input></input>
          <input type='submit' value='Submit'></input>
        </div>

        {this.displayTeamMembers()}
        {this.displayPairs()}        

        {/*<header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="name">Enter your name: </label>
            <input
              id="name"
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
            />
            <button type="submit">Submit</button>
          </form>
          <p>{this.state.greeting}</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
    </header>*/}
       </div>
    );
  }
}

export default App;
