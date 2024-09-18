import { View, Text, Button } from "react-native"
const HomeScreen = () => {
    return (
        <View>
            <Text>Home screen</Text>
            <Button title="View Detail"
            onPress={()=> alert("me")}/>
        </View>

    )
}

export default HomeScreen;