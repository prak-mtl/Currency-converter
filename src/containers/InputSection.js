import React, { Component } from "react";
import "../App.css";
import { connect } from "react-redux";
import { Row, Col, Button, Form, FormGroup, Label } from "reactstrap";
import InputComponent from "../components/Input";

class InputSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phone: "",
      email: "",
      address: "",
      editable: false,
      fromList: false
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.person) {
      this.setState({
        name: nextProps.person[0].name,
        phone: nextProps.person[0].phone,
        email: nextProps.person[0].email,
        address: nextProps.person[0].address,
        editable: true,
        fromList: true
      });
    }
  }

  inputHandler = (e, type) => {
    switch (type) {
      case "name":
        this.setState({
          name: e.target.value
        });
        break;
      case "phone":
        this.setState({
          phone: e.target.value
        });
        break;
      case "email":
        this.setState({
          email: e.target.value
        });
        break;
      case "address":
        this.setState({
          address: e.target.value
        });
        break;
    }
  };

  handleAdd = () => {
    let person = { ...this.state };
    this.setState({
      name: "",
      phone: "",
      email: "",
      address: ""
    });
    this.props.addPerson(person);
  };
  handleSave = () => {
    let person = { ...this.state };
    this.props.savePerson(person);
  };
  handleEdit = () => {
    this.setState({
      editable: !this.state.editable
    });
  };
  handleDelete = () => {
    this.setState({
      name: "",
      phone: "",
      email: "",
      address: "",
      editable: false,
      fromList: false
    });
    this.props.deletePerson(this.props.person[0].name);
  };

  render() {
    const { editable, fromList } = this.state;
    return (
      <section className="input-section">
        <Form>
          <FormGroup>
            <Label for="name">Name</Label>
            <InputComponent
              type="text"
              id="name"
              placeholder="Enter your unique name"
              onChange={e => this.inputHandler(e, "name")}
              value={this.state.name}
              disabled={this.state.editable}
            />
          </FormGroup>

          <FormGroup>
            <Label for="phone">Phone</Label>
            <InputComponent
              type="number"
              id="phone"
              placeholder="Enter your phone"
              onChange={e => this.inputHandler(e, "phone")}
              value={this.state.phone}
              disabled={this.state.editable}
            />
          </FormGroup>

          <FormGroup>
            <Label for="email">Email</Label>
            <InputComponent
              type="email"
              id="email"
              placeholder="Enter your email"
              onChange={e => this.inputHandler(e, "email")}
              value={this.state.email}
              disabled={this.state.editable}
            />
          </FormGroup>

          <FormGroup>
            <Label for="address">Address</Label>
            <InputComponent
              type="textarea"
              id="address"
              placeholder="Enter your address"
              onChange={e => this.inputHandler(e, "address")}
              value={this.state.address}
              disabled={this.state.editable}
            />
          </FormGroup>
        </Form>

        <Row>
          <Col xs="4">
            {this.state.fromList ? (
              <Button onClick={this.handleSave} disabled={editable}>
                Save
              </Button>
            ) : (
              <Button onClick={this.handleAdd}>Add</Button>
            )}
          </Col>
          <Col xs="4">
            <Button onClick={this.handleEdit} disabled={!editable}>
              Edit mode
            </Button>
          </Col>
          <Col xs="4">
            {this.state.fromList ? (
              <Button onClick={this.handleDelete}>Delete</Button>
            ) : (
              <Button onClick={this.handleDelete}>Clear</Button>
            )}
          </Col>
        </Row>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  person: state.choosed
});
const mapDispatchToProps = dispatch => ({
  addPerson: val => dispatch({ type: "ADD_PERSON", payload: val }),
  deletePerson: val => dispatch({ type: "DELETE_PERSON", payload: val }),
  savePerson: val => dispatch({ type: "SAVE_PERSON", payload: val })
});

export default connect(mapStateToProps, mapDispatchToProps)(InputSection);
