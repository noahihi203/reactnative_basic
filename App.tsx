import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [count, setCount] = useState<number>(0);

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 40, fontWeight:"600"}}>
        count = {count}
      </Text>
      <View>
        <Button title='Increase' onPress={()=>setCount(count+1)}/>
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
