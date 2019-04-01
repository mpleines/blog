import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Markdown } from 'react-showdown';

export class BlogpostView extends Component {
  render() {
    const {title, content} = this.props.location.state.post;

    return (
      <div>
        <header>
          <h1>{title}</h1>
        </header>

        <main style={{marginTop: '15px'}}>
          <Markdown markup={content} />
        </main>

        <footer style={bottomNavStyle}>
          <Link style={{color: '#8333ff'}} to="/">← back</Link>
          <span style={{float: 'right'}}>©Maik Pleines</span>
        </footer>
      </div>
    )
  }
}

const bottomNavStyle = {
  marginTop: '2rem',
  height: '3rem'
}

export default BlogpostView
