import { View, Text, StyleSheet, Button } from "react-native"
import { OPENSANS_RENGULAR } from "../../utils/const";
import { NavigationProp, useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
    review : {
        fontSize: 30,
        fontFamily: OPENSANS_RENGULAR
    }
})

const DetailScreen = () => {
    const navigation: NavigationProp<RootStackParamList> = useNavigation();

    return (
        <View>
            <Text style={styles.review}>Detail screen google</Text>
            <Button title="Go Home" onPress={()=>navigation.navigate("home")}/>
        </View>

    )
}

export default DetailScreen;