import { View, Text, StyleSheet, Button } from "react-native"
import { OPENSANS_RENGULAR } from "../../utils/const";
import { NavigationProp, useNavigation, RouteProp } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';

const styles = StyleSheet.create({
    review : {
        fontSize: 30,
        fontFamily: OPENSANS_RENGULAR
    },
    reviewText:{
        fontSize: 25,
        fontFamily: OPENSANS_RENGULAR,
        padding: 15
    }
})

const DetailScreen = () => {
    const navigation: NavigationProp<RootStackParamList> = useNavigation();
    const route: RouteProp<RootStackParamList, 'review-detail'> = useRoute();
    
    return (
        <View>
            <Text style={styles.reviewText}>Id: {route.params?.id}</Text>
            <Text style={styles.reviewText}>Tiêu đề: {route.params?.title}</Text>
            <Text style={styles.reviewText}>Rating: {route.params?.star}</Text>
            <Button title="Go Home" onPress={()=>navigation.navigate("home")}/>
        </View>

    )
}

export default DetailScreen;