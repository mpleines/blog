import React, { Component } from 'react';

class Blogpost extends Component {
  render() {
    return (
        <div style={postStyle}>
          <h2>{this.props.title}</h2>
          <p>{this.props.content}</p>
        </div>
    );
  }
}

const postStyle= {
  marginTop: '10px'
}
export default Blogpost;