import React, {Component } from 'react'

import User from './User';
import Home from './Home'
import Transfer from './Transfer'
import History from './History'
import {Route, Link} from 'react-router-dom'

class App extends Component {
  state = {  }
  render() { 
    return ( 
      <div>
        <Route exact path="/" component={Home}/>
        <Route exact path="/Transfer" component={Transfer}/>
        <Route exact path="/User" component={User}/>
        <Route exact path="/History" component={History}/>
      </div>
     );
  }
}
 
export default App;
