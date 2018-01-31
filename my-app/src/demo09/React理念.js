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
    var name = this.props.product.stocked ?
      this.props.product.name :
      <span style={{'color': 'red'}}>{this.props.product.name}</span>;
    return (
      <tr>
        <td>{name}</td>
        <td>{this.props.product.price}</td>
      </tr>
    );
  }
}

class ProductCategoryRow extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <tr>
        <th colSpan="2">{this.props.category}</th>
      </tr>
    );
  }
}

class ProductTable extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    var rows = [];
    var lastCategory = null;
    this.props.products.map(product => {
      if (product.name.indexOf(this.props.filterText) === -1 || (product.stocked && this.props.inStockOnly)) {
        return;
      }
      if (product.category !== lastCategory) {
        rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
      }
      rows.push(<ProductRow product={product} key={product.name} />)
      lastCategory = product.category;
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
  constructor(props) {
    super(props);
    console.log(this.props);
  }

  handleFilterTextChange = event => {
    this.props.onfilterTextInput(event.target.value);
  }

  handleInStockChange = event => {
    this.props.onInStockInput(event.target.checked);
  }
  
  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Search..."
          value={this.props.filterText}
          onChange={this.handleFilterTextChange} />
        <p>
          <input
            type="checkbox"
            checked={this.props.inStockOnly}
            onChange={this.handleInStockChange} />
          Only show products in stock
        </p>
      </form>
    );
  }
}

class FilterableProductTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      inStockOnly: false
    }
  }

  handlefilterTextInput = filterText => {
    this.setState({ filterText })
  }

  handleInStockInput = inStockOnly => {
    this.setState({ inStockOnly })
  }
  
  render() {
    return (
      <div>
        <SearchBar
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          onfilterTextInput={this.handlefilterTextInput}
          onInStockInput={this.handleInStockInput} />
        <ProductTable
          products={products}
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly} />
      </div>
    );
  }
}

export default FilterableProductTable;