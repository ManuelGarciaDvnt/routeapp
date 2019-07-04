import React, { Component } from 'react';
import Product from './Producto';

class Productos extends Component{
    render(){
        return(
            <div>
                <h4>Nuestros Productos</h4>
                {Object.keys(this.props.products).map((key)=>(
                    <Product
                        info={this.props.products[key]}
                        key={key}
                    />
                ))}
            </div>
        )
    }
}

export default Productos;