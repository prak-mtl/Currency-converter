import React, { Component } from "react";
import "./App.css";
import { Container, Row, Col } from "reactstrap";
import InputSection from "./containers/InputSection";
import DisplaySection from "./containers/DisplaySection";

class App extends Component {
  render() {
    return (
      <Container fluid={true}>
        <Row>
          <Col xs="4" className="px-0">
            <DisplaySection />
          </Col>
          <Col xs="8" className="pl-5">
            <InputSection />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
