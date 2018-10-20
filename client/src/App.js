import React, { Component } from "react";
import AppNavBar from "./components/AppNavbar";
import ShoppingList from "./components/ShoppingList";
import ItemModal from "./components/ItemModal";
import Menu from "./components/Menu";

// ?
import { Container } from "reactstrap";
import { Provider } from "react-redux";
import store from "./store";

// css
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AppNavBar />
          <Container>
            <Menu />
          </Container>
        </div>
      </Provider>
    );
  }
}

export default App;
