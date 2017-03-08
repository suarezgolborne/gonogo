import React, { Component } from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import App from './App.js'

class AppStart extends Component {



  render() {

      const Container = (props) => <div>  {props.children} </div>

      const Home = (props) => <App app={props}  />
      const Zone = (props) =>  <App app={props} />
      const NotFound = () => (  <h1>404.. Tyvärr!</h1>)

    return (
      <Router history={browserHistory}>
        <Route path='/' component={Container}>
          <IndexRoute component={Home} />
          <Route path='/:name' component={Zone} />
          <Route path='*' component={NotFound} />
        </Route>
      </Router>

    )
  }
}



export default AppStart
