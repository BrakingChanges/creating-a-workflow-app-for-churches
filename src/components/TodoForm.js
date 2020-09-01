import React from "react";
import { View, TextInput } from "react-native-web";

const TodoForm = ({ todos, setTodos }) => {
  let todoName;
  let todoDescription;

  const nameHandler = (val) => {
    todoName = val;
  };

  const descriptionHandler = (val) => {
    todoDescription = val;
  };

  const putToDataBase = (name, description) => {
    setTodos((prevTodos) => {
      todos = [
        ...prevTodos,
        {
          name: todoName,
          description: todoDescription,
          id: Math.random()
        }
      ];
    });
  };

  const twoHandler = (val) => {
    descriptionHandler(val);
    putToDataBase(todoName, todoDescription);
  };

  return (
    <View>
      <TextInput onSubmitEditing={(val) => nameHandler(val)}></TextInput>
      <TextInput onSubmitEditing={(val) => twoHandler(val)}></TextInput>
    </View>
  );
};

export default TodoForm;
