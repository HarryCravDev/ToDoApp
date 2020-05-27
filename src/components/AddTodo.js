import React, { Component } from "react";
import PropTypes from "prop-types";

class AddTodo extends Component {
  state = {
    title: "",
  };

  // Submit
  onSubmit = (e) => {
    e.preventDefault();

    if (this.state.title !== "") {
      this.props.addTodo(this.state.title);
      this.setState({ title: "" });
    } else {
      return false;
    }
  };

  // Update state from input field
  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: "flex" }}>
        <input
          type="text"
          name="title"
          style={{ flex: "10", borderRadius: "0" }}
          className="form-control"
          placeholder="Enter Task Here..."
          value={this.state.title}
          onChange={this.onChange}
        />
        <button
          className="btn btn-secondary"
          style={{ flex: "1", borderRadius: "0" }}
        >
          Submit
        </button>
      </form>
    );
  }
}

// PropTypes
AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default AddTodo;
