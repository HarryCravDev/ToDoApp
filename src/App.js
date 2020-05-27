import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Todos from "./components/Todos.js";
import Header from "./components/layout/Header.js";
import AddTodo from "./components/AddTodo.js";
import About from "./components/pages/About.js";
import { v4 as uuid } from "uuid";
// import Axios from "axios";

class App extends React.Component {
  state = {
    todos: [
      {
        id: uuid(),
        title: "Learn React",
        completed: false,
      },
    ],
  };

  // Get todos
  // componentDidMount() {
  //   Axios.get(
  //     "https://jsonplaceholder.typicode.com/todos?_limit=10"
  //   ).then((res) => this.setState({ todos: res.data }));
  // }

  // Toggle Complete
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };

  // Delete Todo
  delTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter((todo) => todo.id !== id)],
    });
  };

  // Add Todo
  addTodo = (title) => {
    const newTodo = {
      id: uuid(),
      title: title,
      completed: false,
    };

    this.setState({ todos: [...this.state.todos, newTodo] });
  };

  // JSX
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route
            exact
            path="/"
            render={(props) => (
              <div className="container">
                <AddTodo addTodo={this.addTodo} />
                <Todos
                  todos={this.state.todos}
                  markComplete={this.markComplete}
                  delTodo={this.delTodo}
                />
              </div>
            )}
          />
          <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
