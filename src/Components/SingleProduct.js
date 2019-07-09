import React, { Component } from 'react';

class SingleProduct extends Component {
    render(){
        return(
            <div>
                Desde la ventana de 1 solo producto.
                {console.log(this.props)}
            </div>
        )
    }
}

export default SingleProduct;