import React, { Component } from "react";

class Cardbox2 extends Component {
  render() {
    return (
      <div className="Cardbox">
        <div class="card-header">Free</div>
        <div class="card-body">
          <h5 class="card-title">
            $0<span className="opacity-75">/mo</span>
          </h5>
          <p className="card-text">10 users included</p>
          <p className="card-text">2 GB of storage</p>
          <p className="card-text">Email support</p>
          <p className="card-text">Help center access</p>
          <a href="#" class="btn btn-primary">
            Sign up for free
          </a>
        </div>
      </div>
    );
  }
}

export default Cardbox2;
