import React from "react";
import { ScrollView } from "react-native-web";
import Todo from "./Todo";

const TodoList = ({ todos }) => {
  const displayTodo = (todo) => <Todo todo={todo} />;

  const displayTodos = () => {
    for (let todo in todos) {
      displayTodo(todo);
    }
  };

  return <ScrollView>{displayTodos()}</ScrollView>;
};

export default TodoList;
