import React, { Component } from 'react';
import Product from './ProductCard';
import { connect } from 'react-redux';
import { fetchProducts, addToCart } from './actions/productAction';

class Products extends Component {
  componentDidMount = () => {
    this.props.fetchProducts('', 1, 20);
    window.addEventListener('scroll', () => {
      const { meta, APILoading } = this.props;
      if (window.pageYOffset + window.innerHeight === document.getElementById('app').offsetHeight && !APILoading) {
        this.props.fetchProducts(meta.filter, meta.page + 1, 20);
      }
    });
  }

  handleAddcart = id => {
    this.props.addToCart(id);
  }

  render() {
    const { products, APILoading, meta } = this.props;
    return (
      <>
        <div className="products" id="products">
          {APILoading && meta.page === 1 ?
            <div className="spinner">
              <span className="loader loader-3"></span>
            </div> :
            products && products.map((product, index) => <Product key={`${product.id}-${new Date()}`} product={product} handleAddCart={this.handleAddcart} productIndex={index} />)}

        </div>
        {APILoading && meta.page !== 1 &&
          <div className="spinner">
            <span className="loader loader-3"></span>
          </div>}
      </>
    )
  }
}

function mapStateToProps(state) {
  return {
    products: state.products.productsData,
    APILoading: state.products.loading,
    meta: state.products.meta,
  }
}
export default connect(mapStateToProps, {
  fetchProducts,
  addToCart,
})(Products)
