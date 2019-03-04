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
                personal blog by Maik Pleines
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
    marginTop: '2rem'
};

export default Header;