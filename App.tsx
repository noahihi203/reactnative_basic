import { useState } from 'react';
import { Button, FlatList, Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

interface ITodo {
  id: number,
  name: string,
}
export default function App() {

  const [todo, setTodo] = useState("");
  const [listTodo, setListTodo] = useState<ITodo[]>([])
  const handleAddTodo = () => {
    if (!todo) {
      alert("empty todo")
      return;
    }
    setListTodo([...listTodo,
    {
      id: randomInterger(2, 200000),
      name: todo
    }])
    setTodo("")
  }

  const deleteTodo = (id: number) => {
    const newTodo = listTodo.filter(item => item.id !== id);
    setListTodo(newTodo)
  }

  function randomInterger(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Todo App</Text>
      {/* form */}
      <View style={styles.body}>
        <TextInput
          value={todo}
          style={styles.todoInput}
          onChangeText={(value) => setTodo(value)}
        />
        <Button
          title='Add todo'
          onPress={handleAddTodo}
        />
      </View>
      {/* list todo */}
      <View style={styles.body}>
        <FlatList
          data={listTodo}
          keyExtractor={item => item.id + ""}
          renderItem={({ item }) => {
            return (
              <Pressable
                style={({ pressed }) => ({ opacity: pressed ? 0.5 : 1 })}
                onPress={() => deleteTodo(item.id)}
              >
                <Text
                  style={styles.todoItem}>{item.name}
                </Text>
              </Pressable>
            )
          }}
        />
      </View>
    </View >

  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "orange",
    paddingHorizontal: 20,
    textAlign: "center",
    fontSize: 40,
  },
  container: {
    paddingTop: 50,
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  todoInput: {
    borderBottomWidth: 1,
    borderBottomColor: "green",
    padding: 15,
    margin: 15,
  },
  todoItem: {
    fontSize: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderStyle: "dashed",
    padding: 10,
  },
  body: {
    paddingHorizontal: 10,
    marginBottom: 20,

  }

});
