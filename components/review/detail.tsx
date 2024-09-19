import { View, Text, StyleSheet, Button, Image } from "react-native"
import { OPENSANS_RENGULAR } from "../../utils/const";
import { NavigationProp, useNavigation, RouteProp } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import starIcon from "../../assets/images/star.png";
const styles = StyleSheet.create({
    review: {
        fontSize: 30,
        fontFamily: OPENSANS_RENGULAR
    },
    reviewText: {
        fontSize: 25,
        fontFamily: OPENSANS_RENGULAR,
        padding: 15
    }
})

const DetailScreen = () => {
    const navigation: NavigationProp<RootStackParamList> = useNavigation();
    const route: RouteProp<RootStackParamList, 'review-detail'> = useRoute();

    return (
        <View >
            <Text style={styles.reviewText}>Id: {route.params?.id}</Text>
            <Text style={styles.reviewText}>Tiêu đề: {route.params?.title}</Text>
            <Text style={styles.reviewText}>
                Rating: {route.params?.star}
            </Text>
            <View style={{flexDirection: "row", gap: 10, marginHorizontal: 10}}>
                <Image
                    style={{ height: 50, width: 50 }}
                    source={starIcon}
                />
                <Image
                    style={{ height: 50, width: 50 }}
                    source={require("../../assets/images/star.png")}
                />
                <Image
                    style={{ height: 50, width: 50 }}
                    source={require("../../assets/images/star.png")}
                />
                <Image
                    style={{ height: 50, width: 50 }}
                    source={require("../../assets/images/star.png")}
                />
                <Image
                    style={{ height: 50, width: 50 }}
                    source={require("../../assets/images/star.png")}
                />
            </View>
        </View>

    )
}

export default DetailScreen;