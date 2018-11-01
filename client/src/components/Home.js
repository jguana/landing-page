import React, { Component } from "react";
import { Container, Col, Row } from "reactstrap";
import styles from "../App.css";

class Home extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <p className={styles.p}>home component</p>
          </Col>
          <Col>
            <p>idk.</p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
