import React, { Component } from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom';
import circle from './imgs/circle.svg'; // gives image path
import card from './imgs/card.png'
import './home.css'


class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <div>     
                <Navbar />
                <div className="hero">
                    <div className="left-column">
                        <h1>Zero fees</h1>
                        <p>Get started with our free plan. Receive
                            zero fees for transactions under $1000
                        </p>
                        <button><Link style={{textDecoration: "none", color: '#fff'}} to="/User">All Users</Link></button>
                        <img src={circle} alt="circle" id="circle-1"/>
                    </div>
                    <div className="right-column">
                        <img src={card} alt='card' className="card"/>
                        <img src={circle} alt="circle" id="circle-2"/>

                    </div>
                </div>
            </div>
         );
    }
}
 
export default Home;