import React, { Component } from 'react';
import Blogpost from './/Blogpost';

class Bloglist extends Component {

  constructor () {
    super();
    this.state = {
      posts: [
        {
          id: 1,
          title: 'Building this blog',
          created: '15.04.2019',
          preview: 'My plan on developing this blog',
          readingTime: 3,
          content: `This Blog is still under construction. 
          I´m planning on developing a backend in NodeJS to store blog posts in a GraphQL database. 
            Also i would like this page to render markdown syntax automatically, so i can write my blogposts easier.`
        }
    ]
  }
}

  render() {
    return (
        <div style={postsStyle}>

        {this.state.posts.map(post => {
            return <Blogpost darkModeEnabled={this.props.darkModeEnabled} post={post}></Blogpost>
        })}

        </div>
    );
  }

  componentDidMount () {
    console.log(this.props.darkModeEnabled)
  }
}

const postsStyle = {
    marginTop: '30px'
}

export default Bloglist;