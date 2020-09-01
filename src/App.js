import React, { useState } from "react";
import TodoList from "./components/TodoList";
import { ScrollView } from "react-native-web";
import TodoForm from "./components/TodoForm";

const App = () => {
  const [todos, setTodos] = useState([]);

  return (
    <ScrollView>
      <TodoForm />
      <TodoList />
    </ScrollView>
  );
};

export default App;
