import React, { useState } from 'react'

const Header = props => {
  const headerStyle = {
    marginBottom: '3rem',
  }

  const themeSwitcherStyle = {
    display: 'block',
    float: 'right',
    lineHeight: '1.5rem',
  }

  const blogInfoStyle = {
    marginTop: '1rem',
  }

  const linkStyleDark = {
    textDecoration: 'none',
    color: 'white',
    borderBottom: '1px solid #8333ff',
  }

  const linkStyleLight = {
    textDecoration: 'none',
    color: 'black',
    borderBottom: '1px solid #5e14d1',
  }

  const themeSwitcher = {
    position: 'relative',
    display: 'block',
    width: '3rem',
    height: '1.5rem',
    backgroundColor: 'grey',
    borderRadius: '35px',
  }

  const themeToggle = {
    background: 'white',
    position: 'absolute',
    cursor: 'pointer',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    transition: '.5s ',
    width: '1.5rem',
    height: '1.5rem',
    borderRadius: '50%',
  }

  const themeToggleActive = {
    background: 'white',
    position: 'absolute',
    cursor: 'pointer',
    top: 0,
    right: 0,
    bottom: 0,
    transition: '.5s ',
    width: '1.5rem',
    height: '1.5rem',
    borderRadius: '50%',
    left: '50%',
  }
  const [toggleIsActive, setToggleIsActive] = useState(false)

  const toggleToggle = () => {
    setToggleIsActive(!toggleIsActive)
    props.changeTheme()
  }
  return (
    <header style={headerStyle}>
      <h1 style={{ fontFamily: 'Pacifico' }}>The DevShip</h1>
      <div style={themeSwitcherStyle}>
        <label style={themeSwitcher}>
          <input
            style={{ display: 'none' }}
            type="checkbox"
            name="switchDarkMode"
            // ref="complete"
            // onChange={this.props.changeTheme this.toggleIsActive = !this.toggleIsActive}
            onChange={toggleToggle}
          />
          <span style={toggleIsActive ? themeToggleActive : themeToggle}></span>
        </label>
      </div>
      <div style={blogInfoStyle}>
        personal blog by{' '}
        <a
          href="https://github.com/mpleines"
          style={props.darkModeEnabled ? linkStyleDark : linkStyleLight}
        >
          Maik Pleines
        </a>
      </div>
    </header>
  )
}

export default Header
