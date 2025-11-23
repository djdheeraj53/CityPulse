import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./src/navigation/AppNavigator";
import { LocaleProvider } from "./src/context/LocateContext";
import { UserProvider } from "./src/context/UserContext";

export default function App() {
  return (
    <UserProvider>
      <LocaleProvider>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </LocaleProvider>
    </UserProvider>
  );
}