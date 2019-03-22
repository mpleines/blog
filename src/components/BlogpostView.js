import React, { Component } from 'react';
import { Link } from "react-router-dom";

export class BlogpostView extends Component {

  render() {
    const {title, content} = this.props.location.state.post;

    return (
      <div>
        <h1>{title}</h1>
        <div>
          <p>{content}</p>
          <div style={{width: 320, height: 240}}>
            <img src="https://loremflickr.com/320/240" />
          </div>

          <p>sadlkjdaskjldasjkldasjkldasjklasdkjlöasdjklsdaklöjlkölökasdasdasdasd
            asdasdasdasdsadasdsadasdsaödjaslköjdasdas
            asddasödoisaödkasökd asöälk ölaskdas     ödalkasöldk 
             ölaskdjasöldkas öäklasdölaskdöaslkd ölkas dökasöaskdölaskdölaskdölaskd 
              asdölkjaskdöksadösa
          </p>
          <div style={{width: 320, height: 240}}>
            <img src="https://loremflickr.com/320/240" />
          </div>
        </div>

        <div style={bottomNavStyle}>
          <Link style={{color: '#8333ff'}} to="/">← back</Link>
          <span style={{float: 'right'}}>©Maik Pleines</span>
        </div>
      </div>
    )
  }
}

const bottomNavStyle = {
  marginTop: '2rem',
  height: '3rem'
}

export default BlogpostView
