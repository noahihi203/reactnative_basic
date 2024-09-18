import { View, Text, StyleSheet } from "react-native"
import { OPENSANS_RENGULAR } from "../../utils/const";

const styles = StyleSheet.create({
    review : {
        fontSize: 30,
        fontFamily: OPENSANS_RENGULAR
    }
})

const DetailScreen = () => {
    return (
        <View>
            <Text style={styles.review}>Detail screen google</Text>
        </View>

    )
}

export default DetailScreen;