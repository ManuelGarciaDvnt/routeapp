import React, { Component } from 'react';
import Product from './Producto';
import './../Styles/products.css';

class Productos extends Component{
    render(){
        return(
            <div className='App__products'>
                <h4 className='products__header'>Nuestra coleccion selecta</h4>
                <main className='products__main'>
                {Object.keys(this.props.products).map((key)=>(
                    <Product
                        info={this.props.products[key]}
                        key={key}
                    />
                ))}
                </main>
            </div>
        )
    }
}

export default Productos;