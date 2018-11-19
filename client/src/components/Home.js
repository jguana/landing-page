import React, { Component } from "react";
import { Container } from "reactstrap";
import MarkdownRenderer from "react-markdown-renderer";
import styles from "../App.css";

class Home extends Component {
  render() {
    const markdown = "# I am testing \n## Markdown";
    return (
      <Container>
        <MarkdownRenderer markdown={markdown} />
      </Container>
    );
  }
}

export default Home;
