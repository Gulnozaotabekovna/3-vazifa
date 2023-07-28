import React, { Component } from 'react'



class Footer extends Component {
  render() {
    return (
        <footer className=" border d-flex justify-content-center">
        <div className="col-lg-8 col-md-10 col-sm-12 m-1 d-flex justify-content-between">
          <div className="p-2">
            <img src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg"></img>
            <p>© 2017-2018</p>
          </div>
          <div className="p-2">
            <h3>Features</h3>
            <a href="#">Cool stuff</a>
            <a href="#">Random feature</a>
            <a href="#">Team feature</a>
            <a href="#">Stuff for developers</a>
            <a href="#">Another one</a>
            <a href="#">Last time</a>
          </div>
          <div className="p-2">
            <h3>Resources</h3>
            <a href="#">Resource</a>
            <a href="#">Resource name</a>
            <a href="#">Another resource</a>
            <a href="#">Final resource</a>
          </div>
          <div className="p-2">
            <h3>About</h3>
            <a href="#">Team</a>
            <a href="#">Locations</a>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer