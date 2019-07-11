import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './../Styles/NavBar.css';
import Arrow from './../assets/icons/drop-down-arrow.svg';

class NavBar extends Component{

    render(){
        return(
            <React.Fragment>
                <input id='navBar' type='checkbox'/>
                <label htmlFor='navBar' className='btn-show-menu'>
                    <img
                        src={Arrow}
                    />
                </label>
                <nav className='App__navbar'>
                    <Link className='navItem' to={'/'}>Home</Link>
                    <Link className='navItem' to={'/products'}>Articulos</Link>
                    <Link className='navItem' to={'/contact'}>Contacto</Link>
                </nav>

            </React.Fragment>
        )
    }
}

export default NavBar;