import React, { Component } from 'react';
import { timeAgo } from './formattedDate';

export default class Product extends Component {
  render() {
    const { product: { face, price, date, id, size }, handleAddCart, productIndex } = this.props;
    const dollarPrice = price / 100;
    const adSource = `http://localhost:3000/ads/?r=${productIndex}`;
    dollarPrice.toLocaleString("en-US", { style: "currency", currency: "USD" });
    return (
      <>
        <div className="product">
          <div className="product-img" style={{ fontSize: `${size}px` }}> {face}</div>
          <div className="product-desc">
            <div className="product-price">Price : <span>$ {dollarPrice} </span></div>
            <div className="product-date">{timeAgo(date)}</div>
          </div>
          <div className="add-cart" onClick={() => { handleAddCart(id) }}>
            Add to cart
        </div>
        </div>
        {(productIndex + 1)% 20 === 0 &&
          <div className="product">
            <img className='ad-image' src={adSource} alt="sponser" />
            <div className="adv-content">
              <p>A word from our sponsors:</p>
            </div>
          </div>
        }
      </>
    )
  }
}
