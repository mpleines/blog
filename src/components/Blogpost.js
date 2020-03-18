import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'

const Blogpost = props => {
  const { post, darkModeEnabled } = props
  const postStyle = {
    marginTop: '12px',
  }
  const titleStyleDark = {
    color: '#8333ff',
    textDecoration: 'none',
    fontSize: '2rem',
    letterSpacing: '0.2rem',
    fontWeight: '900',
  }
  const titleStyleLight = {
    color: '#5e14d1',
    textDecoration: 'none',
    fontSize: '2rem',
    letterSpacing: '0.2rem',
    fontWeight: '900',
  }

  return (
    <div style={postStyle}>
      <h2>
        <Link
          style={darkModeEnabled ? titleStyleDark : titleStyleLight}
          to={{
            pathname: '/BlogpostView',
            state: { post: post },
          }}
        >
          {props.post.title}
        </Link>
      </h2>
      <span style={{ fontSize: '0.85rem' }}>
        {moment(post.created).format('MMMM Do YYYY')} • {post.readingTime}min
        read
      </span>

      <p>{post.preview}</p>
    </div>
  )
}

export default Blogpost
