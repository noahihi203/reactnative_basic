import { View, Text } from "react-native"
import HomeScreen from "./components/review/home";
import AboutScreen from "./components/review/about";
import DetailScreen from "./components/review/detail";

import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { OPENSANS_RENGULAR } from "./utils/const";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

SplashScreen.preventAutoHideAsync();

const App = () => {
    const [loaded, error] = useFonts({
        [OPENSANS_RENGULAR]: require('./assets/fonts/OpenSans-Regular.ttf'),
    });
    useEffect(() => {
        if (loaded || error) {
            SplashScreen.hideAsync();
        }
    }, [loaded, error]);
    if (!loaded && !error) {
        return null;
    }

    const Stack = createNativeStackNavigator<RootStackParamList>();

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="home" component={HomeScreen}
                    options={{ title: 'Trang chủ' }}
                />
                <Stack.Screen
                    name="review-detail" component={DetailScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;