import React from 'react'
import Button from './Button'


class Event extends React.Component{


  render(){
      console.log(this.props.event)
    return(
    <div id="each-event">
      <h1 id="event-title">{this.props.event.title}</h1>
      <p>{this.props.event.date}</p>
      <p>{this.props.event.description}</p>
      <p id="time">Time: {this.props.event.time} o'clock</p>
      <p id="address">Address: {this.props.event.location}</p>
      <Button event ={this.props.event} eventButton = {this.props.removeEvent} innerText={'Delete'} />
    </div>
    )
  }
}
    
export default Event;






