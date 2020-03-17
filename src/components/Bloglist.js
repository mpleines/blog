import React, { useContext } from 'react'
import Blogpost from './Blogpost'
import { PostContext } from '../PostContext'

const Bloglist = props => {
  const postsStyle = {
    marginTop: '30px',
  }
  const posts = useContext(PostContext)

  return (
    <div style={postsStyle}>
      {posts.map(post => {
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
