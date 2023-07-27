import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="shadow d-flex justify-content-between p-3">
        <p>Company name</p>
        <nav>
          <a href="#">Features</a>
          <a href="#">Enterprise</a>
          <a href="#">Support</a>
          <a href="#">Prising</a>
          <button className="btn btn-outline-primary">Sign in</button>
        </nav>
      </header>
      <div className="pricing d-flex justify-content-center flex-column  align-items-center col-lg-6 col-md-10 col-sm-12 m-1">
        <h1>Pricing</h1>
        <p className="pe-5 ps-5 me-lg-5 ms-lg-5">
          Quickly build an effective pricing table for your potential customers
          with this Bootstrap example. It's built with default Bootstrap
          components and utilities with little customization.
        </p>
        <div className="box d-flex">
          <div className="col-lg-4 col-md-4 col-cm-6 d-flex flex-column justify-content-center border raunded shadow m-2">
            <div className="p-1 bg-light border-bottom">
              <h3 className="text-center">Free</h3>
            </div>
            <div className="p-2">
              <h2>
                $0<span>/mo</span>
              </h2>
              <p>10 users included</p>
              <p>2 GB of storage</p>
              <p>Email support</p>
              <p>Help center access</p>
              <button className="btn btn-outline-primary w-100">
                Sign up for free
              </button>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-cm-6 d-flex flex-column justify-content-center border raunded shadow m-2 ">
            <div className="p-1 bg-light border-bottom">
              <h3 className="text-center">Pro</h3>
            </div>
            <div className="p-2">
              <h2>
                $15<span>/mo</span>
              </h2>
              <p>20 users included</p>
              <p>10 GB of storage</p>
              <p>Priority email support</p>
              <p>Help center access</p>
              <button className="btn btn-primary w-100">Get started</button>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-cm-6 d-flex flex-column justify-content-center border raunded shadow m-2">
            <div className="p-1 bg-light border-bottom">
              <h3 className="text-center">Enterprise</h3>
            </div>
            <div className="p-2">
              <h2>
                $29<span>/mo</span>
              </h2>
              <p>30 users included</p>
              <p>15 GB of storage</p>
              <p>Phone and email support</p>
              <p>Help center access</p>
              <button className="btn btn-primary w-100">Contact us</button>
            </div>
          </div>
        </div>
      </div>
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
    </div>
  );
}

export default App;
