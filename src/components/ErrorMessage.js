import React from 'react'

const Bloglist = props => {
  const styles = {
    maxWidth: '400px',
    background: '#5e14d1',
    color: 'white',
    padding: '5px',
    margin: '5px',
    textAlign: 'center',
    borderRadius: '7px',
  }

  return (
    <div style={styles}>
      <h2>Error</h2>
      <p>It seems that there has been an Error trying to load the posts...</p>
    </div>
  )
}

export default Bloglist
