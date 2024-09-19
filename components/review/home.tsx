import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { View, Text, Button, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import CreateModal from "./create.modal";
import AntDesign from '@expo/vector-icons/AntDesign';
interface IReview {
    id: number;
    title: string;
    star: number;
}
const styles = StyleSheet.create({
    reviewItem: {
        padding: 15,
        backgroundColor: "#CCC",
        margin: 11
    }
})
const HomeScreen = (props: any) => {
    const navigation: NavigationProp<RootStackParamList> = useNavigation();

    const [reviews, setReview] = useState<IReview[]>([
        { id: 1, title: "React Native", star: 5 },
        { id: 2, title: "Noah", star: 5 },

    ]);
    const [modalVisible, setModalVisible] = useState(false)
    
    const addNew = (item: IReview) => {
        setReview([...reviews, item])
    }
    return (
        <View>
            <Text style={{ fontSize: 30, padding: 10 }}>Review list:</Text>
            <View style={{alignItems: "center"}}>
                <AntDesign
                    onPress={() => setModalVisible(true)}
                    name="plussquare" size={30} color="black"
                />
            </View>
            <View>
                <FlatList
                    data={reviews}
                    keyExtractor={item => item.id + ""}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity
                                onPress={() => navigation.navigate("review-detail", item)}
                            >
                                <View style={styles.reviewItem}>
                                    <Text>{item.title}</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    }}
                />
            </View>
            <CreateModal
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                addNew={addNew}
            />
        </View>

    )
}

export default HomeScreen;