import React, { Component, } from 'react'
import {db , auth} from './fire'
import Select from 'react-select';

class Transfer extends Component {
    
    state = { Customers: null,
              select: null, 
              inputValue: null,
              final: null,
              inputId: null
            };
    
    
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
            
    
    handleChange = (e) => {
        this.setState({select: e.target.value})
    }

    inputChange = (e) => {
        this.setState({inputValue: e.target.value})
    }

    updateDatabase = () => {
         
            this.state.Customers &&
                this.state.Customers.map ( Customer =>{
                    
                    if(this.state.select == Customer.id) {
                        (Customer.value) = Number(Customer.value) + Number(this.state.inputValue);
                        (this.props.location.state.value) = Number(this.props.location.state.value) - Number(this.state.inputValue)
                        
                        this.setState({final: Customer.value})
                        this.setState({final2: this.props.location.state.value})


                        db.collection("Customers").doc(`'${Customer.id}'`).update({
                        value: this.state.final
                        })
                        
                        db.collection("Customers").doc(`'${this.props.location.state.id}'`).update({
                            value: this.state.final2
                            })

                            
                        }
                        
                    
            }
            
        )


    }
       

    render() { 
        return (
            <div>
                <p>{this.props.location.state.name}</p>
                <p>{this.props.location.state.value}</p>
                
                {/* Show all the values other than select */}
                <select value={this.state.IDs} onChange={this.handleChange}>
                    { 
                    this.state.Customers &&
                        this.state.Customers.map ( Customer =>{
                            
                            if((this.props.location.state.name != Customer.name) &&
                                (this.props.location.state.value != Customer.value)){
                                    return(
                                        <option value={Customer.id} >
                                            {`${Customer.name} (${Customer.value})`}
                                        </option>
                                    )
                                }
                        }
                        )
                        }

                </select>
                    
                {
                this.state.Customers &&
                this.state.Customers.map ( Customer =>{
                    
                    if(this.state.select == Customer.id) {
                            return(
                                <p>{Customer.value}</p>
                            )
                        }
                }
                )
                }
                
                
                
                <input onChange={this.inputChange} />
                <button onClick={this.updateDatabase}>Submit</button>
                    
                {/* Transfer it */}
                <p>{`Current Balance: ${this.state.final2}`}</p>
                
                </div>
                )}}
export default Transfer; 
   
