import React, { Component } from "react";
import PropTypes from "prop-types";

export class TodoItem extends Component {
  // Check if Task is complete = Apply correct style
  getStyle = () => {
    return {
      background: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px #ccc solid",
      textDecoration: this.props.todo.completed ? "line-through" : "none",
    };
  };

  // JSX
  render() {
    // Vars from Props
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p className="m-0 p-2">
          <input
            type="checkbox"
            onChange={this.props.markComplete.bind(this, id)}
          />{" "}
          {title}
          <button
            onClick={this.props.delTodo.bind(this, id)}
            className="btn btn-primary btn-sm float-right"
          >
            X
          </button>
        </p>
      </div>
    );
  }
}

// PropTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
};

export default TodoItem;
