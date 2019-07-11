import React, { Component } from 'react';
import NavBar from './NavBar';
import Logo from './../assets/logo.png';
import {Link} from 'react-router-dom';
import './../Styles/Header.css';

class Header extends Component {
    render(){
        return(
            <header className='app__header'>
                <Link className='app__logo'
                    to={'/'}>
                    <img
                        src={Logo}
                    />
                </Link>
                <NavBar/>
            </header>
        )
    }
}

export default Header;