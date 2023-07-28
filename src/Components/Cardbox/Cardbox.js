import React, { Component } from "react";

class Cardbox extends Component {
  render() {
    const { CardHeader, price, users, trafic, support, btnClass, btnName } =
      this.props.data;
    return (
      <div className="Cardbox">
        <div class="CardHeader card-header">{CardHeader}</div>
        <div class="card-body">
          <h5 class="card-title">
            ${price}
            <span className="opacity-75">/mo</span>
          </h5>
          <p className="card-text">{users} users included</p>
          <p className="card-text">{trafic} GB of storage</p>
          <p className="card-text">{support} support</p>
          <p className="card-text">Help center access</p>
          <a href="#" class={btnClass}>
            {btnName}
          </a>
        </div>
      </div>
    );
  }
}

export default Cardbox;
