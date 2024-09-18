import { View, Text, Button } from "react-native"
const HomeScreen = (props: any) => {
    const {navigation} = props;
    return (
        <View>
            <Text>Home screen</Text>
            <Button title="View Detail"
            onPress={()=> navigation.navigate("review-detail")}/>
        </View>

    )
}

export default HomeScreen;