import React, { Component } from 'react';
import { Link } from "react-router-dom";
import BlogpostView from './BlogpostView';

class Blogpost extends Component {
  render() {
    return (
        <div style={postStyle}>
          <h2>
            <Link 
              style={this.props.darkModeEnabled ? titleStyleDark : titleStyleLight}
              to={{ 
                pathname: '/BlogpostView', 
                state: { post: this.props.post } 
              }}
            > 
              {this.props.post.title}
            </Link>

          </h2>
          <span style={{fontSize: '0.85rem'}}>March 6, 2019 • {this.props.post.readingTime}min read</span>
          
          <p>{this.props.post.preview}</p>
        </div>
    );
  }

  componentDidMount() {
    console.log(this.props.darkModeEnabled);
  }
}

const postStyle= {
  marginTop: '12px'
};

const titleStyleDark = {color: '#8333ff', textDecoration: 'none', fontSize: '2rem', letterSpacing: '0.2rem', fontWeight: '900'};
const titleStyleLight = {color: '#5e14d1', textDecoration: 'none', fontSize: '2rem', letterSpacing: '0.2rem', fontWeight: '900'};


export default Blogpost;