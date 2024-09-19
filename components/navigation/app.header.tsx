import { StyleSheet, Text, View } from "react-native"
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { globalStyles } from "../../utils/const";
import { NavigationProp, useNavigation } from "@react-navigation/native";

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: "#CCC",
        paddingHorizontal: 5,
        paddingVertical: 10,
        alignItems: "center",
        //paddingTop: 40
    },
    headerText: {
        textAlign: "center",
        flex: 1 ,
        fontSize: 25,
    }
})
const AppHeader = () => {
    const navigation:any = useNavigation();

    return (
        <View style={styles.container}>
            <MaterialIcons
                name="menu" size={24}
                color="black"
                onPress={()=>{navigation.openDrawer()}}
            />
            <Text style={[styles.headerText, globalStyles.globalFont]}>Noah</Text>
        </View>
    )
}

export default AppHeader