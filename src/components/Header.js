import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
        <header style={headerStyle}>
            <h1>Blog.dev</h1>
            <div style={themeSwitcherStyle}>
                <label style={switchLabelStyle} htmlFor="switchDarkMode" >Dark mode</label>
                <input 
                    style={switchStyle}
                    name="switchDarkMode" 
                    type="checkbox" 
                    ref="complete"
                    onChange={this.props.changeTheme} 
                />
            </div>
            <div style={blogInfoStyle}>
                personal blog by <a href="https://github.com/devilsdev" style={this.props.darkModeEnabled ? linkStyleDark : linkStyleLight}>Maik Pleines</a>
            </div>
        </header>
    );
  }
}

const headerStyle = {
    marginBottom: '3rem'
};

const themeSwitcherStyle = {
    display: 'block',
    float: 'right',
    lineHeight: '1.5rem'
};

const switchStyle = {
    verticalAlign: 'middle'
};
  
const switchLabelStyle = {
    fontSize: '0.75rem'
};

const blogInfoStyle = {
    marginTop: '1rem',
};

const linkStyleDark = {
    textDecoration: 'none',
    color: 'white',
    borderBottom: '1px solid #8333ff'
};

const linkStyleLight = {
    textDecoration: 'none',
    color: 'black',
    borderBottom: '1px solid #5e14d1'
};

export default Header;