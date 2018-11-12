import React, { Component } from "react";
import { Container, Col, Row } from "reactstrap";
import styles from "../App.css";

class Home extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <p className={styles.header}>John Kim</p>
          </Col>
          <Col>
            <p className={styles.header}>I don't know.</p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
