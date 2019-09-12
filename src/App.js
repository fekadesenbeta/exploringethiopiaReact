import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Event from './components/Event'
import EventsContainer from './components/EventsContainer'
import Nav from './components/Nav'
import Gallery from './components/Gallery'
import People from './components/People'
import Culture from './components/Culture'
import History from './components/History'
import DiasporaJournal from './components/DiasporaJournal'
import 'bootstrap/dist/css/bootstrap.min.css'




class App extends React.Component {
  constructor(){
    super()
    this.state={
      events: [],
    }
  }

  componentDidMount(){
    fetch("http://localhost:3000/events")
      .then(response => response.json())
      .then(res => this.setState({
        events: res
      }))
  }

  addEvent = (occation) => {
    if(this.state.events.includes(occation)){
      return null
    }else
    this.setState({
      events: [...this.state.events, occation]
    })
  }


  removeEvent = (occation) => {
    this.setState({ 
      events: this.state.events.filter(ev =>  ev !== occation)
    })
  }

  // removeEvent = (occation) => {
  //   fetch('http://localhost:3000/events/${id}', 
  //   {
  //     method: 'DELETE',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //   }).then((response) => { 
  //       console.log('event ddeleteddddddd')
  //     })
  // }



  render(){
    console.log(this.state.events)
    return (
    <Router>
      <div className="App">
        <Nav/>
        <Switch>
          <Route exact path="/" render={(props) => <EventsContainer {...props} events={this.state.events} addEvent={this.addEvent} removeEvent = {this.removeEvent} />} />
          <Route path="/culture" component={Culture} />
          <Route path="/history" component={History} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/people" component={People} />
          <Route path="/diaspora" component={DiasporaJournal} />
        </Switch>
      </div>
    </Router>  
    );
  }
}

export default App;
