import React from 'react';
import Event from './Event';
import Form from './Form'
import flag from './ethiopiapics/flag.jpg'; 



class EventsContainer extends React.Component{
    
    render(){
        console.log("events container",  this.props.events)
       const eventList =  this.props.events.map(event => {
           return <Event event = {event} removeEvent = {this.props.removeEvent}/>
        })

        return(
        <div>
        <img id="flag" src={flag} alt="flag of ethiopia" />
            <div id="event-container">
                <h1 id="upcoming">Upcoming Events</h1>
            {eventList}
            </div>
            <Form  addEvent = {this.props.addEvent}/>
        </div>
        )}
}


export default EventsContainer;