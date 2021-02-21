import React, {Component } from 'react'
import {db , auth} from './fire'
import {Route, Link} from 'react-router-dom'
import './User.css'
import Navbar from './Navbar'

class User extends Component {
    state = { Customers: null }
    
    componentDidMount(){
        db.collection('Customers').get().then( snapshot => {
            const Customers = []
            snapshot.forEach( doc => {
            let currentID = doc.id
            let appObj = { ...doc.data(), ['id']: currentID }
            Customers.push(appObj)
            })
            this.setState({Customers: Customers})
            
          })
          .catch( error => console.log(error()))
    }

    render() { 
        return ( 
<>
        <div className="main">

            <Route path="./User.js" component={User}/>
            
            <h1 style={{marginTop: '100px'}}>Banking App</h1>
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
                                    id: Customer.id,
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
        </>
         );
    }
}
 
export default User;

