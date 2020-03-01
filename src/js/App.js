import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute'
import Home from './components/Home'
import Login from './components/Login'
import User from './components/User'
import DiscordAuth from './components/DiscordAuth'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login}/>
        <Route path="/auth-discord" component={DiscordAuth} />
        <PrivateRoute exact path="/" component={Home}/>
        <PrivateRoute exact path='/user' component={User} />
      </Switch>
    </Router>
  )
}

export default App
