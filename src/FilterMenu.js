/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from './actions/productAction';

class FilterMenu extends React.Component{
  handleFilter = param => {
    this.props.fetchProducts(param, 1, 20);
  }

   render(){
     const { cartItems } = this.props;
     return(
      <div className="main-navbar">
         <h1>
          Products Grid
        </h1>

        <ul className="filterbtn">
          <li className="dropdown filter-li sort-button">
            <a className="dropdown-toggle" data-toggle="dropdown" href="#">
              <i className='material-icons'>
                sort
              </i>
            </a>
            <ul className="dropdown-menu">
              <li onClick={() => {this.handleFilter("id")}}>Id</li>
              <li role="presentation" className="divider"></li>
              <li onClick={() => {this.handleFilter("size")}}>Size</li>
              <li role="presentation" className="divider"></li>
              <li onClick={() => {this.handleFilter("price")}}>Price</li>
            </ul>
          </li>
          <li className="filter-li">
            <a href="#">
             <i className='material-icons'>shopping_cart</i>
             <i className='cart-item-count'>{cartItems.length}</i>
            </a>
          </li>
        </ul>
      </div>
     )
   }
}

function mapStateToProps(state) {
  return {}
}
export default connect(mapStateToProps, {
  fetchProducts
})(FilterMenu);