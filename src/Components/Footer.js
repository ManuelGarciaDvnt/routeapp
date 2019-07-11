import React, { Component } from 'react';
import './../Styles/Footer.css';

class Footer extends Component{
    render(){
        return(
            <footer className='App__footer'>
                Todos los derechos reservados - ManuelDEV 2019
                <br/>
                ReactJS - GeekStore
            </footer>
        )
    }
}

export default Footer;