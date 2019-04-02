import React, { Component } from 'react';
import Blogpost from './/Blogpost';

class Bloglist extends Component {

  constructor () {
    super();
    this.state = {
      posts: [
        {
            id: 1,
            title: 'Ein Blog Eintrag',
            created: new Date(),
            preview: 'This one is sure interesting',
            readingTime: 3,
            content: `##hello this is maik speaking,\ni would like to welcome you to my blog! [I'm an inline-style link](https://www.google.com)`
        },
        {
          id: 2,
          title: 'Zwei Blog Eintrag',
          created: new Date(),
          preview: 'This one is maybe a bit longer',
          readingTime: 10,
          content: `## Emphasis **This is bold text**\n 
            hello this is a :smile: smile emoji
          `
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