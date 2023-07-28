import logo from "./logo.svg";
import "./App.css";
import Cardbox from "./Components/Cardbox/Cardbox";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

const HeaderLi = ["Features", "Enterprise", "Support", "Prising"];

const dataCards = [
  {
    id: 1,
    CardHeader: "Free",
    price: 0,
    user: 10,
    trafic: 2,
    support: "Email",
    btnClass: "btn btn-outline-primary",
    btnName: "Sign up for free",
  },
  {
    id: 2,
    CardHeader: "Pro",
    price: 15,
    user: 20,
    trafic: 10,
    support: "Priority email",
    btnClass: "btn btn-primary",
    btnName: "Get started",
  },
  {
    id: 3,
    CardHeader: "Enterprise",
    price: 29,
    user: 30,
    trafic: 15,
    support: "Phone and email",
    btnClass: "btn btn-primary",
    btnName: "Contact us",
  },
];

function App() {
  return (
    <div className="App">
      <header className="shadow d-flex justify-content-between p-3 pt-5">
        <p>Company name</p>
        <nav className="d-flex align-items-center">
          <ul>
            {HeaderLi.map((v) => (
              <Header li={v} />
            ))}
          </ul>

          <button className="btn btn-outline-primary">Sign in</button>
        </nav>
      </header>
      <div className="pricing d-flex justify-content-center flex-column  align-items-center col-lg-8 col-md-10 col-sm-12 m-1">
        <h1>Pricing</h1>
        <p className="pe-5 ps-5 me-lg-5 ms-lg-5">
          Quickly build an effective pricing table for your potential customers
          with this Bootstrap example. It's built with default Bootstrap
          components and utilities with little customization.
        </p>
        <div className="box d-flex flex-wrap justify-content-center">
          {dataCards.map((v, i) => (
            <div
              key={v.id}
              class="card text-center  col-lg-3 col-md-3 col-cm-6  border raunded shadow m-2"
            >
              <Cardbox data={v} />
            </div>
          ))}
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
