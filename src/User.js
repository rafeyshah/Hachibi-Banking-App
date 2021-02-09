import React, {Component } from 'react'
import {db , auth} from './fire'
import {Route, Link} from 'react-router-dom'
import './User.css'

class User extends Component {
    state = { Customers: null }
  
    fetchingData() { 
        db.collection('Customers').get().then( snapshot => {
            const Customers = []
            snapshot.forEach( doc => {
              const data = doc.data()
       
              Customers.push(data)
            })
            this.setState({Customers: Customers})
            console.log(snapshot)
          })
          .catch( error => console.log(error()))
    }
    
    componentDidMount(){
        this.fetchingData()
    }

    render() { 
        return ( 
        <div className="main">

            <Route path="./User.js" component={User}/>

            <h1>Banking App</h1>
            {
                this.state.Customers &&
                this.state.Customers.map( Customer => {
                return(
                        <div className="flex">
                            <p>{Customer.name}</p>
                            <p className="value">{Customer.value}</p>
                            <Link to={{
                                pathname: '/Transfer',
                                state: {
                                    name: Customer.name,
                                    value: Customer.value,
                                    fetch: this.state.Customers
                                }
                                }}>
                                    Transfer
                            </Link>
                        </div>
                        )
                })
            }
        </div>
         );
    }
}
 
export default User;

