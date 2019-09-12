import React from 'react';
import {Link} from 'react-router-dom';
import Button from './Button';
import Event from './Event';


class Form extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      title: '',
      date: '',
      time: '',
      description: '',
      location: ''
    }
  }


    handleSubmit = e => {
      e.preventDefault()
      console.log(this.state)
  
      const data = this.state
      fetch('http://localhost:3000/events', {
             method: 'POST',
             body: JSON.stringify(data),
             headers: {
               'Content-Type': 'application/json'
             }
           })
           .then(res => res.json())
           .then(response => console.log('Success:', JSON.stringify(response) ))
           .catch(error => console.log('Error:', error))
        this.setState({
          title: '',
          date: '',
          time: '',
          description: '',
          location: ''
        })
    }

    changeHandler = e => {
      this.setState({[e.target.name]: e.target.value})
    }

    render(){
        console.log("form props", this.props)
      return(
        <form id="form" onSubmit={this.handleSubmit}>
            <label>
              Title:
              <input type="text" name="title" value={this.state.title} onChange={e => this.changeHandler(e)} required />
            </label>
            <label>
              Date:
              <input type="text" name="date" value={this.state.date} onChange={e => this.changeHandler(e)} required/>
            </label>
            <label>
              Time:
              <input type="text" name="time" value={this.state.time} onChange={e => this.changeHandler(e)} required/>
            </label>
            <label>
              Description:
              <input type="text" name="description" value={this.state.description} onChange={e => this.changeHandler(e)}/>
            </label>
            <label>
              Location:
              <input type="text" name="location" value={this.state.location} onChange={e => this.changeHandler(e)} required/>
            </label>
        <Button event={this.state} eventButton = {this.props.addEvent} innerText={'Submit'} />
      </form>
      )
    }
  }
      
  export default Form;