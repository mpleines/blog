import React, { useContext } from 'react'
import Blogpost from './Blogpost'
import { PostContext } from '../PostContext'

const Bloglist = props => {
  const postsStyle = {
    marginTop: '30px',
  }
  const posts = useContext(PostContext)

  const sortBlogPosts = (a, b) => {
    if (a.created > b.created) return -1
    else if (a.created < b.created) return 1
    else return 0
  }

  return (
    <div style={postsStyle}>
      {posts.sort(sortBlogPosts).map(post => {
        return (
          <Blogpost
            darkModeEnabled={props.darkModeEnabled}
            post={post}
          ></Blogpost>
        )
      })}
    </div>
  )
}

export default Bloglist
