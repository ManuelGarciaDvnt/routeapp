import React, { Component } from 'react';

class SingleProduct extends Component {
    render(){
        return(
            <div>
                Desde la ventana de 1 solo producto.
                <li>{this.props.info.id}</li>
            </div>
        )
    }
}

export default SingleProduct;