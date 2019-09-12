import React from 'react';
import {Link} from 'react-router-dom';


class Button extends React.Component{

handleClick = e => {
  console.log('clicked')
  this.props.eventButton(this.props.event)
  console.log(this.props)
}


    render(){
      console.log("buttonnnnn", this.props)
      return(
        <React.Fragment >
            <button onClick = {this.handleClick}>{this.props.innerText}</button>
        </React.Fragment>
      )
    }
  }
      
  export default Button;