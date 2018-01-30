import React, { Component } from 'react';

var products =[
  {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
  {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
  {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
  {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
  {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
  {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];

class ProductRow extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <tr>
        <th>{this.props.product.category}</th>
      </tr>
    );
  }
}

class ProductCategoryRow extends Component {
  render() {
    return (
      <div>
        
      </div>
    );
  }
}

class ProductTable extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    var rows = [];
    this.props.products.map(product => {
      rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
      rows.push(<ProductRow product={product} key={product.name}  />)
    })
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    );
  }
}

class SearchBar extends Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="Search..." />
        <p>
          <input type="checkbox" />
          Only show products in stock
        </p>
      </form>
    );
  }
}

class FilterableProductTable extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <ProductTable products={products} />
      </div>
    );
  }
}

export default FilterableProductTable;