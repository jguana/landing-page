import React, { Component } from "react";
import { Container } from "reactstrap";
import styles from "../App.css";

class Home extends Component {
  render() {
    return (
      <Container>
            <p className={styles.header}>John Kim</p>
            <p className={styles.header}>I don't know.</p>
      </Container>
    );
  }
}

export default Home;
