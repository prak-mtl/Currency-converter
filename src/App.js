import React, { Component } from "react";
import "./App.css";
import Axios from "axios";
import { connect } from "react-redux";
import { Container } from "reactstrap";
import InputSection from "./containers/InputSection";
import DisplaySection from "./containers/DisplaySection";
import List from "./containers/List";

class App extends Component {
  componentDidMount() {
    var defaultArr = [];
    Axios.get("https://api.exchangeratesapi.io/latest?base=USD").then(
      response => {
        for (const key of Object.keys(response.data.rates)) {
          if (key === "EUR" || key === "SGD" || key === "GBP") {
            defaultArr.push({ currency: key, value: response.data.rates[key] });
          }
        }
        this.props.defaultChoosen({ data: response.data.rates, defaultArr });
      }
    );
  }
  render() {
    return (
      <Container fluid={true}>
        <InputSection />
        <DisplaySection />
        <List />
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  defaultChoosen: val => dispatch({ type: "ADD_DEFAULT", payload: val })
});

export default connect(
  "",
  mapDispatchToProps
)(App);
