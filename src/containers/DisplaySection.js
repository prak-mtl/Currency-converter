import React, { Component } from "react";
import "../App.css";
import { connect } from "react-redux";
import { Row, Col, Button } from "reactstrap";
import InputComponent from "../components/Input";

class DisplaySection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      country: ""
    };
  }
  countryHandler = e => {
    this.setState({
      country: e.target.value
    });
  };
  onIncrease = currencyName => {
    var addedArr = {};
    for (const key of Object.keys(this.props.data)) {
      if (key.toLowerCase() === currencyName.toLowerCase()) {
        addedArr = {
          currency: currencyName.toUpperCase(),
          value: this.props.data[key]
        };
        this.setState({
          country: ""
        });
        this.props.updateChoosen(addedArr);
      }
    }
  };
  render() {
    return (
      <section className="data-section">
        <Row>
          {this.props.choosed &&
            this.props.choosed.map((item, index) => (
              <Col key={index} lg={4} md={4}>
                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <div className="d-flex justify-content-around align-items-center py-3">
                        <p>{item.currency}</p>
                        <p>{(item.value * this.props.currency).toFixed(2)}</p>
                      </div>
                      <p className="pb-3"> 1 USD = {item.value}</p>
                    </div>
                    <div
                      className="flip-card-back"
                      onClick={() => {
                        this.props.deleteChoosen(index);
                      }}
                    >
                      <p>(-) Remove currency</p>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          <Col lg={4} md={4} className="add-btn">
            <InputComponent
              min={0}
              type="text"
              placeholder="Enter country code (Eg. JPY)"
              onChange={this.countryHandler}
              value={this.state.country}
            />
            <Button
              className="mt-2"
              onClick={() => this.onIncrease(this.state.country)}
            >
              (+) Add More currencies
            </Button>
          </Col>
        </Row>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  currency: state.currency,
  data: state.data,
  choosed: state.choosed
});
const mapDispatchToProps = dispatch => ({
  updateChoosen: val => dispatch({ type: "UPDATE_CHOOSEN", payload: val }),
  deleteChoosen: val => dispatch({ type: "DELETE_CHOOSEN", payload: val })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DisplaySection);
