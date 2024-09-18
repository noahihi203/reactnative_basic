import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { View, Text, Button, FlatList, TouchableOpacity, StyleSheet } from "react-native";

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
    return (
        <View>
            <Text style={{ fontSize: 30 }}>Review list:</Text>
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
            
        </View>

    )
}

export default HomeScreen;