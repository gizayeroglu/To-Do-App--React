import React, { Component } from "react";
import TodoList from "./components/TodoList/TodoList";
import "./App.css";
import Form from "./components/Form/Form";
import Header from "./components/TodoHeader/TodoHeader";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInput: "",
      todos: [],
    };
  }

  addItem = () => {
    const currentValue = this.state.userInput;

    if (this.state.userInput !== "") {
      const userInput = {
        id: Math.random(),
        content: currentValue,
        isCompletedTodo: false,
      };

      this.setState(
        {
          todos: [...this.state.todos, userInput],
        },
        () => {
          this.setState({
            userInput: "",
          });
        }
      );
    }
  };

  toggleToDo = (todoItemId) => {
    const newToDos = this.state.todos.map((todo) => {
      if (todo.id === todoItemId) {
        todo.isCompletedTodo = !todo.isCompletedTodo;
      }

      return todo;
    });

    this.setState({ todos: newToDos });
  };

  deleteItem = (e, todoItemId) => {
    e.stopPropagation();
    const newToDos = this.state.todos.filter((todo) => todo.id !== todoItemId);

    this.setState({ todos: newToDos });
  };

  onInputChange = (e) => {
    const newVal = e.target.value;
    this.setState({
      userInput: newVal,
    });
  };

  render() {
    return (
      <div className='App'>
        <Header />
        <Form
          userInput={this.state.userInput}
          onInputChange={this.onInputChange}
          addItem={this.addItem}
        />
        {this.state.todos.length > 0 && (
          <div className='list'>
            <TodoList
              toggleToDo={this.toggleToDo}
              deleteItem={this.deleteItem}
              todos={this.state.todos}
            />
          </div>
        )}
      </div>
    );
  }
}

export default App;
