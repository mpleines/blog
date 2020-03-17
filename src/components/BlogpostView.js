import React from 'react'
import { Link } from 'react-router-dom'
import Markdown from 'react-markdown'
import { breaks } from 'remark-breaks'

const BlogpostView = props => {
  const { title, content } = props.location.state.post
  const bottomNavStyle = {
    marginTop: '2rem',
    height: '3rem',
  }

  return (
    <div>
      <header>
        <h1>{title}</h1>
      </header>

      <main style={{ marginTop: '15px' }}>
        <Markdown source={content} plugins={[breaks]} />
      </main>

      <footer style={bottomNavStyle}>
        <Link style={{ color: '#8333ff' }} to="/">
          ← back
        </Link>
        <span style={{ float: 'right' }}>©Maik Pleines</span>
      </footer>
    </div>
  )
}

export default BlogpostView
