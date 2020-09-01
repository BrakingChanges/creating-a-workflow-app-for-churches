import React from "react";
import { Text, View } from "react-native-web";

const Todo = ({ todo }) => {
  return (
    <View>
      <Text>{todo.name}</Text>
      <Text>{todo.description}</Text>
      <Text>{todo.completed ? "Completed" : "Not Completed"}</Text>
    </View>
  );
};

export default Todo;
