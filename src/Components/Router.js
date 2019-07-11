import React, { Component } from 'react';
import { BrowserRouter ,Route, Switch} from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import FileError from './FileError';
import infoproductos from './../Data/products.json';
import Productos from './Productos';
import Header from './Header';
import SingleProduct from './SingleProduct';
import Footer from './Footer';

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
                        <Route exact path='/' render={()=>(<Home
                            product={this.state.products[2]}
                        />)} />
                        <Route exact path='/contact' render={()=>(<Contact/>)} />
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
                <Footer/>
            </BrowserRouter>
        )
    }
}

export default Router;