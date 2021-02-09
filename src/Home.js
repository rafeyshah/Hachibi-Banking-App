import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <div>            
                <h1>HOME!!!!!</h1>
                <Link to="/User">All Users</Link>
            </div>
         );
    }
}
 
export default Home;