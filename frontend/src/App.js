import "./App.css";
import react from "react";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import BackDrop from "./components/BackDrop";
import SideDrawer from "./components/SideDrawer";
import { useState, useEffect } from "react";
function App() {
  const [sideToggle, setSideToggle] = useState(false);
  return (
    <div className="app">
      <Router>
        {/* Navbar */}
        <Navbar click={() => setSideToggle(!sideToggle)} />
        {/* SideDrawer */}
        <SideDrawer show={sideToggle} />
        {/* Backdrop */}
        <BackDrop show={sideToggle} click={() => setSideToggle(!sideToggle)} />
        <main>
          <Switch>
            <Route exact path="/" component={HomeScreen} />
            <Route exact path="/product/:id" component={ProductScreen} />
            <Route exact path="/cart" component={CartScreen} />
          </Switch>
        </main>
        {/* ASANSAO Aman password */}
      </Router>
    </div>
  );
}

export default App;
