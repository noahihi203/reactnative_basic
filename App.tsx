import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [count, setCount] = useState<number>(0);
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<number>();
  return (
    <View style={styles.container}>
      <View>
        <Text style={{ fontSize: 40, fontWeight: "600" }}>Name: {name}</Text>
        <TextInput
          multiline={true}
          onChangeText={(value) => setName(value)}
          style={{
            borderColor: "green",
            borderWidth: 1,
            width: 200,
            padding: 15,
          }} />
      </View>

      <View>
        <Text style={{ fontSize: 40, fontWeight: "600" }}>Agse: {age}</Text>
        <TextInput
          multiline={true}
          onChangeText={(value) => setAge(+value)}
          style={{
            borderColor: "green",
            borderWidth: 1,
            width: 200,
            padding: 15,
          }}
          keyboardType={"numeric"}
          maxLength={2}
        />
      </View>
      <Text style={{ fontSize: 40, fontWeight: "600" }}>
        count = {count}
      </Text>
      <View>
        <Button title='Increase' onPress={() => setCount(count + 1)} />
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  hello1: {
    color: "red",
    fontSize: 30,
    borderColor: "green",
    borderWidth: 1,
    padding: 10,
  },
  header: {
    fontSize: 30,
    fontWeight: "bold",
  },
  parent: {
    fontSize: 60,
    color: "green"
  }
});
