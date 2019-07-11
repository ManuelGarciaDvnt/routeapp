import React, { Component } from "react";
import "./../Styles/Home.css";
import "./../Styles/button.css";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div className="App__home">
        <h2 className="home__title">🔥 Lo mejor en ropa Geek 🔥</h2>
        <main className="home__main">
          <article className="best-article">
            <Link
              className="best-article__cover"
              to={"/products/" + this.props.product.id}
            >
              <img src={"./assets/img/" + this.props.product.icon + ".jpg"} />
            </Link>
            <span className="best-article__information">
              <h3 className="best-article__title">{this.props.product.name}</h3>
              <p className="best-article__description">
                {this.props.product.description}
              </p>
              <p className='best-article__price'>
                Precio: <span>${this.props.product.price.toFixed(2)}</span>
              </p>
              <div className='best-article__button-container'>
                <button className='btn btn--green w100'>
                    Agregar al carrito
                </button>
                <button className='btn btn--white w100'>
                    Comprar ahora
                </button>
              </div>
            </span>
          </article>
          <Link className="home__button" to={"/products"}>
            Lo mas vendido
          </Link>
        </main>
      </div>
    );
  }
}

export default Home;
