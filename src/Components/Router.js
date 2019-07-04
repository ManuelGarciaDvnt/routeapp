import React, { Component } from 'react';
import { BrowserRouter ,Route, Switch} from 'react-router-dom';
import Home from './Home';
import Nosotros from './Nosotros';
import FileError from './FileError';
import infoproductos from './../Data/products.json';
import Productos from './Productos';
import Header from './Header';
import SingleProduct from './SingleProduct';

class Router extends Component{

    state = {
        products : []
    }

    componentWillMount(){
        this.setState({
            products : infoproductos
        })
    }

    render(){

        return(
            <BrowserRouter>
                <div className='container'>
                    <Header/>
                    <Switch>
                        <Route exact path='/' render={()=>(<Home/>)} />
                        <Route exact path='/nosotros' render={()=>(<Nosotros/>)} />
                        <Route exact path='/products' render={()=>(
                            <Productos
                                products={this.state.products}
                            />
                        )}/>
                        <Route exact path='/products/:ProductId' render={(props)=>{
                            let idProducto = props.location.pathname.replace('/products/','');
                            return(
                                <SingleProduct info={this.state.products[idProducto]}/>
                            )
                        }}/>
                        <Route component={FileError}
                        />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

export default Router;