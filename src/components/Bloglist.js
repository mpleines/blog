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
            content: 'Lorem Ipsum.. Lorem Ipsum.. Lorem Ipsum.. Lorem Ipsum.. Lorem Ipsum.. Lorem Ipsum.. Lorem Ipsum.. Lorem Ipsum.. Lorem Ipsum..'
        },
        {
          id: 2,
          title: 'Zwei Blog Eintrag',
          created: new Date(),
          preview: 'This one is maybe a bit longer',
          readingTime: 10,
          content: 'Lorem Ipsum.. Lorem Ipsum.. Lorem Ipsum.. Lorem Ipsum.. Lorem Ipsum.. Lorem Ipsum.. Lorem Ipsum.. Lorem Ipsum.. Lorem Ipsum..'
      },
      {
        id: 3,
        title: 'Ein Blog Eintrag',
        created: new Date(),
        preview: 'Something about this blog..',
        readingTime: 5,
        content: 'Lorem Ipsum.. Lorem Ipsum.. Lorem Ipsum.. Lorem Ipsum.. Lorem Ipsum.. Lorem Ipsum.. Lorem Ipsum.. Lorem Ipsum.. Lorem Ipsum..'
      },
      {
        id: 3,
        title: 'Ein Blog Eintrag',
        created: new Date(),
        preview: 'Something about this blog..',
        readingTime: 5,
        content: 'Lorem Ipsum.. Lorem Ipsum.. Lorem Ipsum.. Lorem Ipsum.. Lorem Ipsum.. Lorem Ipsum.. Lorem Ipsum.. Lorem Ipsum.. Lorem Ipsum..'
      },
      {
        id: 3,
        title: 'Ein Blog Eintrag',
        created: new Date(),
        preview: 'Something about this blog..',
        readingTime: 5,
        content: 'Lorem Ipsum.. Lorem Ipsum.. Lorem Ipsum.. Lorem Ipsum.. Lorem Ipsum.. Lorem Ipsum.. Lorem Ipsum.. Lorem Ipsum.. Lorem Ipsum..'
      },
      {
        id: 3,
        title: 'Ein Blog Eintrag',
        created: new Date(),
        preview: 'Something about this blog..',
        readingTime: 5,
        content: 'Lorem Ipsum.. Lorem Ipsum.. Lorem Ipsum.. Lorem Ipsum.. Lorem Ipsum.. Lorem Ipsum.. Lorem Ipsum.. Lorem Ipsum.. Lorem Ipsum..'
      },
      {
        id: 3,
        title: 'Ein Blog Eintrag',
        created: new Date(),
        preview: 'Something about this blog..',
        readingTime: 5,
        content: 'Lorem Ipsum.. Lorem Ipsum.. Lorem Ipsum.. Lorem Ipsum.. Lorem Ipsum.. Lorem Ipsum.. Lorem Ipsum.. Lorem Ipsum.. Lorem Ipsum..'
      },
      {
        id: 3,
        title: 'Ein Blog Eintrag',
        created: new Date(),
        preview: 'Something about this blog..',
        readingTime: 5,
        content: 'Lorem Ipsum.. Lorem Ipsum.. Lorem Ipsum.. Lorem Ipsum.. Lorem Ipsum.. Lorem Ipsum.. Lorem Ipsum.. Lorem Ipsum.. Lorem Ipsum..'
      },
      {
        id: 3,
        title: 'Ein Blog Eintrag',
        created: new Date(),
        preview: 'Something about this blog..',
        readingTime: 5,
        content: 'Lorem Ipsum.. Lorem Ipsum.. Lorem Ipsum.. Lorem Ipsum.. Lorem Ipsum.. Lorem Ipsum.. Lorem Ipsum.. Lorem Ipsum.. Lorem Ipsum..'
      },
      {
        id: 3,
        title: 'Ein Blog Eintrag',
        created: new Date(),
        preview: 'Something about this blog..',
        readingTime: 5,
        content: 'Lorem Ipsum.. Lorem Ipsum.. Lorem Ipsum.. Lorem Ipsum.. Lorem Ipsum.. Lorem Ipsum.. Lorem Ipsum.. Lorem Ipsum.. Lorem Ipsum..'
      },
      {
        id: 3,
        title: 'Ein Blog Eintrag',
        created: new Date(),
        preview: 'Something about this blog..',
        readingTime: 5,
        content: 'Lorem Ipsum.. Lorem Ipsum.. Lorem Ipsum.. Lorem Ipsum.. Lorem Ipsum.. Lorem Ipsum.. Lorem Ipsum.. Lorem Ipsum.. Lorem Ipsum..'
      },
      {
        id: 3,
        title: 'Ein Blog Eintrag',
        created: new Date(),
        preview: 'Something about this blog..',
        readingTime: 5,
        content: 'Lorem Ipsum.. Lorem Ipsum.. Lorem Ipsum.. Lorem Ipsum.. Lorem Ipsum.. Lorem Ipsum.. Lorem Ipsum.. Lorem Ipsum.. Lorem Ipsum..'
      },
      {
        id: 3,
        title: 'Ein Blog Eintrag',
        created: new Date(),
        preview: 'Something about this blog..',
        readingTime: 5,
        content: 'Lorem Ipsum.. Lorem Ipsum.. Lorem Ipsum.. Lorem Ipsum.. Lorem Ipsum.. Lorem Ipsum.. Lorem Ipsum.. Lorem Ipsum.. Lorem Ipsum..'
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