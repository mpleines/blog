import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";

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
      </div>
    )
  }
}

export default BlogpostView
