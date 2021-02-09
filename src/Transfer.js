import React, { Component, } from 'react'
import Select from 'react-select';
class Transfer extends Component {
    
    state = { Customers: null,
                select: null };
    
    componentDidMount(){
        this.setState({Customers: this.props.location.state.fetch})
    }
    
    handleChange = (e) => {
        this.setState({select: e.target.value})
    }

    render() { 
        return (
            <div>
                <p>{this.props.location.state.name}</p>
                <p>{this.props.location.state.value}</p>
                
                {/* Show all the values other than select */}
                <select value={this.state.select} onChange={this.handleChange}>
                    { this.state.Customers &&
                        this.state.Customers.map( Customer =>{
                            if((this.props.location.state.name != Customer.name) &&
                                (this.props.location.state.value != Customer.value)){
                                    return(
                                        <option value={`${Customer.name} ${Customer.value}`}>
                                            {Customer.name}
                                        </option>
                                    )
                                }
                    })}
                </select>
                    
                <p>{this.state.select}</p>
                    
                    
                {/* Transfer it */}
                
                
                
                </div>
                )}}
export default Transfer; 
   
