import React, { Component } from 'react';
import Header from './components/Header';
import Bloglist from './components/Bloglist'
import './App.css';

class App extends Component {
  constructor () {
    super();
    this.state = {
      darkModeEnabled: false,
      lightTheme: {
        height: '100vh',
        background: 'white',
        color: 'black',
        transition: 'background-color 0.3s ease-out'
      },
      darkTheme: {
        height: '100vh',
        background: 'rgb(34, 33, 33)',
        color: 'rgb(241, 241, 241)',
        transition: 'background-color 0.3s ease-out'
      },
      theme: this.darkModeEnabled ? this.darkTheme : this.lightTheme
    }
  }

  // handles click of Header Checkbox for dark theme
  changeTheme = () => {
    this.setState({darkModeEnabled: !this.state.darkModeEnabled}, () => {
      if(this.state.darkModeEnabled)
        this.setState({theme: this.state.darkTheme});
      else 
        this.setState({theme: this.state.lightTheme});
    });
  };

  render() {
    return (
      <div className="App" style={this.state.theme}>
        <div className="wrapper" >
          <Header changeTheme={this.changeTheme}></Header>
          <Bloglist>
            
          </Bloglist>
        </div>
      </div>
    );
  }
}

export default App;