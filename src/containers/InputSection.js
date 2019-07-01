import React, { Component } from "react";
import "../App.css";
import { connect } from "react-redux";
import { InputGroup, InputGroupAddon, Label } from "reactstrap";
import InputComponent from "../components/Input";

class InputSection extends Component {
  state = {
    currency: this.props.currency
  };

  inputHandler = e => {
    this.props.changeReducer(e.target.value);
    this.setState({
      currency: e.target.value
    });
  };
  render() {
    return (
      <section className="input-section">
        <Label for="exampleEmail">USD - United States Dollar</Label>
        <InputGroup>
          <InputGroupAddon addonType="prepend">$</InputGroupAddon>
          <InputComponent
            min={0}
            type="number"
            placeholder="Enter your value (in USD)"
            onChange={this.inputHandler}
            value={this.state.currency}
          />
        </InputGroup>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  currency: state.currency
});
const mapDispatchToProps = dispatch => ({
  changeReducer: val => dispatch({ type: "INCREASE_COUNTER", payload: val })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputSection);
