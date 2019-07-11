import React, { Component } from "react";
import { Link } from "react-router-dom";
import cart from './../assets/icons/shopping-cart.svg';
import "./../Styles/Product.css";

class Product extends Component {
  render() {
    return (
      <div className="article__info">
        <h4 className="article__title">{this.props.info.name}</h4>
        <Link className="article__cover" to={"/products/" + this.props.info.id}>
          <img src={"./assets/img/" + this.props.info.icon + ".jpg"} />
        </Link>
        <ul>
          <li className="article__price">
            ${this.props.info.price.toFixed(2)}
          </li>
        </ul>
        <div className="article__button-container">
          <button className="btn btn--green w100">
            <img src={cart}/>
          </button>
          <button className="btn btn--white w100">+ info</button>
        </div>
      </div>
    );
  }
}

export default Product;
