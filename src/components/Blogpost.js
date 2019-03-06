import React, { Component } from 'react';

class Blogpost extends Component {
  render() {
    return (
        <div style={postStyle}>
          <h2>
            <a href="http://localhost:3000" style={this.props.darkModeEnabled ? titleStyleDark : titleStyleLight}> 
              {this.props.title}
            </a>
          </h2>
          <span style={{fontSize: '0.85rem'}}>March 6, 2019 • 10min read</span>
          
          <p>{this.props.content}</p>
        </div>
    );
  }

  componentDidMount() {
    console.log(this.props.darkModeEnabled);
  }
}

const postStyle= {
  marginTop: '10px'
};

const titleStyleDark = {color: '#8333ff', textDecoration: 'none'};
const titleStyleLight = {color: '#5e14d1', textDecoration: 'none'};


export default Blogpost;