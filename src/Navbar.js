import React , { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from './imgs/logo.svg'; // gives image path
import './Navbar.css'

class Navbar extends Component {
    render() { 
        return (
            <div className="nav">
                <div className="logo">
                    <Link to="/"><img src={logo} alt="logo"/></Link>
                </div>
                <div className="nav-links">
                    <Link className="a" to="/User">Users</Link>
                    <Link className="a" to="/History">History</Link>
                </div>
            </div >
          );
    }
}
 
export default Navbar;