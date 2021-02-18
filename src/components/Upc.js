import React, { Component } from 'react';
import axios from 'axios';

class Upc extends Component {
  state = {
    product: {},
  };

  upcLookupUrl = 'https://foodwell.herokuapp.com/upc/';
  upcCodeRef = React.createRef();

  getByUpc = async (e) => {
    e.preventDefault();

    const products = (
      await axios.get(`${this.upcLookupUrl}${this.upcCodeRef.current.value}`)
    ).data.products;

    this.setState({ product: products[0] });
  };

  reset = () => {
    this.setState({ product: {} });
  };

  render() {
    if (this.state.product?.barcode_number) {
      return (
        <div>
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <strong>{this.state.product.product_name}</strong>
              <br />
              {this.state.product.size}
              <br />
              <span className="small text-muted">
                {this.state.product.category}
              </span>

              <img
                src={this.state.product.images[0]}
                alt={this.state.product.images[0]}
              />

              <div className="card">
                <div className="card-body">
                  {this.state.product.description}
                </div>
              </div>
            </div>
          </div>
          <button
            className="btn btn-danger mt-5"
            type="button"
            onClick={this.reset}
          >
            Search Again
          </button>
        </div>
      );
    }

    return (
      <div>
        <form onSubmit={this.getByUpc}>
          <input
            name="upcCode"
            ref={this.upcCodeRef}
            type="text"
            placeholder="UPC Code"
            defaultValue="850791002017"
          />
          <br />
          <br />
          <button className="btn btn-success" type="submit">
            Lookup Product
          </button>
        </form>
      </div>
    );
  }
}

export default Upc;
