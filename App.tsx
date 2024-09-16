import { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [students, setStudents] = useState([
    {id: 1, name: "Noah1", age: 18},
    {id: 2, name: "Noah2", age: 18},
    {id: 3, name: "Noah3", age: 18},
    {id: 4, name: "Noah4", age: 18},
    {id: 5, name: "Noah5", age: 18},
    {id: 6, name: "Noah6", age: 18},
  ])
  return (
    <View style={styles.container}>
        <Text style={{fontSize: 60}}>Hello world </Text>
        <ScrollView>
          {students.map(item => {
            return (
              <View key={item.id} style={{
                padding: 30,
                backgroundColor:"pink",
                marginBottom: 30
              }}>
                <Text>{item.name}</Text>
              </View>
            )
          })}
        </ScrollView>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 20,
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },

});
