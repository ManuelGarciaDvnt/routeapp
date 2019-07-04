import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Product extends Component{
    render(){
        return(
            <div>
                <h5>Información del Producto</h5>
                <ul>
                    <li>Nombre: {this.props.info.name}</li>
                    <li>Precio: {this.props.info.price}</li>
                </ul>
                <Link to={'/products/'+this.props.info.id}>
                    Read more...
                </Link>
                {console.log(this.props.info.id)}
            </div>
        )
    }
}

export default Product;