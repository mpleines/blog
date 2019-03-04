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
            content: 'Lorem Ipsum.. Lorem Ipsum.. Lorem Ipsum.. Lorem Ipsum.. Lorem Ipsum.. Lorem Ipsum.. Lorem Ipsum.. Lorem Ipsum.. Lorem Ipsum..'
        },
        {
          id: 1,
          title: 'Ein Blog Eintrag',
          created: new Date(),
          content: 'Lorem Ipsum.. Lorem Ipsum.. Lorem Ipsum.. Lorem Ipsum.. Lorem Ipsum.. Lorem Ipsum.. Lorem Ipsum.. Lorem Ipsum.. Lorem Ipsum..'
      },
      {
        id: 1,
        title: 'Ein Blog Eintrag',
        created: new Date(),
        content: 'Lorem Ipsum.. Lorem Ipsum.. Lorem Ipsum.. Lorem Ipsum.. Lorem Ipsum.. Lorem Ipsum.. Lorem Ipsum.. Lorem Ipsum.. Lorem Ipsum..'
    },
    {
      id: 1,
      title: 'Ein Blog Eintrag',
      created: new Date(),
      content: 'Lorem Ipsum.. Lorem Ipsum.. Lorem Ipsum.. Lorem Ipsum.. Lorem Ipsum.. Lorem Ipsum.. Lorem Ipsum.. Lorem Ipsum.. Lorem Ipsum..'
  },
  {
    id: 1,
    title: 'Ein Blog Eintrag',
    created: new Date(),
    content: 'Lorem Ipsum.. Lorem Ipsum.. Lorem Ipsum.. Lorem Ipsum.. Lorem Ipsum.. Lorem Ipsum.. Lorem Ipsum.. Lorem Ipsum.. Lorem Ipsum..'
}
      ]
    }
  }

  render() {
    return (
        <div style={postsStyle}>

        {this.state.posts.map(post => {
            return <Blogpost title={post.title} content={post.content}></Blogpost>
        })}

        </div>
    );
  }
}

const postsStyle = {
    marginTop: '30px'
}

export default Bloglist;