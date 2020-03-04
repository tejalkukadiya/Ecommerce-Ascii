import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import Products from './Products';
import FilterMenu from './FilterMenu';

class App extends React.Component {
  render(){
  const { products } = this.props;
  const randomIndex = Math.floor(Math.random() * 1000);
  const adSource = `http://localhost:3000/ads/?r=${randomIndex}`;
  return (
    <div className="App" id="app">
      <div className="navbar">
        <FilterMenu key={products.cartData.length} cartItems={products.cartData}/>
      </div>
      <div className="welcome-text">
        <p>Here you're sure to find a bargain on some of the finest ascii available to purchase. Be sure to peruse our selection of ascii faces in an exciting range of sizes and prices.</p>
        <p>But first, a word from our sponsors:</p>
        <img  src={adSource} alt="sponser" />
      </div>
      <Products />
    </div>
  );
  }
}

function mapStateToProps(state) {
  return {
    products: state.products,
  }
}
export default connect(mapStateToProps, {})(App);
