import SplashScreen from "../screens/SplashScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import EventDetails from "../screens/EventDetails";
import LanguageHeader from "../components/LanguageHeader";
import SignupScreen from "../screens/SignupScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
    return (
        <Stack.Navigator initialRouteName="Splash"
            screenOptions={{
                header: () => <LanguageHeader />
            }}
        >
            <Stack.Screen
                name='Splash'
                component={SplashScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{ headerShown: true }}
            />
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{ headerShown: true }}
            />
            <Stack.Screen
                name="Profile"
                component={ProfileScreen}
                options={{ headerShown: true }}
            />
            <Stack.Screen
                name="EventDetails"
                component={EventDetails}
                options={{ headerShown: true }}
            />
            <Stack.Screen
                name="Signup"
                component={SignupScreen}
                options={{ title: 'Sign Up' }}
            />
        </Stack.Navigator>
    );
}
