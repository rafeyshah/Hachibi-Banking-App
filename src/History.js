import React, { Component } from 'react'
import {db , auth} from './fire'
import './History.css'


class History extends Component {

    state = {
        Transfer: null,
        check: null
    }

    componentDidMount(){
        db.collection('Transfer').get().then( snapshot => {
            const Transfer = []
          
            snapshot.forEach( doc => {
                let currentID = doc.id
                let appObj = { ...doc.data(), ['id']: currentID }
                Transfer.push(appObj)

            })
            this.setState({Transfer: Transfer})
           
          })
          .catch( error => console.log(error()))
          
    }

     add = () => {
        this.setState({check:0})
        this.state.Transfer && this.state.Transfer.map 
            ( Transfe => {
                console.log(this.props.location.state.RtoMoney+ ' '+ Transfe.RtoMoney
                    + ' ' + this.props.location.state.Tmoney+' '+Transfe.Tmoney
                    + ' ' + this.props.location.state.receiver+' '+Transfe.receiver
                    + ' ' + this.props.location.state.transferer+' '+Transfe.transferrer
                    )
                if( (Number(this.props.location.state.RtoMoney)==Number(Transfe.RtoMoney)) &&
                    (Number(this.props.location.state.Tmoney)==Number(Transfe.Tmoney)) &&
                    (this.props.location.state.receiver===Transfe.receiver) &&
                    (this.props.location.state.transferer===Transfe.transferrer) ){
                        this.setState({check: 1})
                        
                    }
            })
        if(Number(this.state.check) == 0){
            db.collection('Transfer').add({
                RtoMoney: this.props.location.state.RtoMoney,
                Tmoney: this.props.location.state.Tmoney,
                receiver: this.props.location.state.receiver,
                transferrer: this.props.location.state.transferer
            })}
            window.location.reload(false);

    }

    

    render() { 
        
        return (
            <> 
                <div className="flex">
                    <h1>Receiver</h1>
                    <h1>Received Money</h1>
                    <h1>Transferer</h1>
                    <h1>Transfered Money</h1>
                </div>
                {
                    this.state.Transfer && this.state.Transfer.map 
                    ( Transfe => {
                        return(
                            <div className="flex">
                                <p>{Transfe.receiver}</p>
                                <p>{Transfe.RtoMoney}</p>
                                <p>{Transfe.transferrer}</p>
                                <p>{Transfe.Tmoney}</p>
                            </div>
                        )
                    })
                }

               <button onClick={this.add}>refresh</button>
            </>
         );
    }
}
 
export default History;