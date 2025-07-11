import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet } from "react-native";
import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Login } from "./src/surfaces/Login";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {
  Poppins_400Regular,
  Poppins_700Bold,
  useFonts,
} from "@expo-google-fonts/poppins";
import AppLoading from "expo-app-loading";
import { Home } from "./src/surfaces/Home";
import { ConversationsNavigation } from "./src/surfaces/ConversationsNavigation";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  const [userLoggedIn, setIsUserLoggedIn] = useState(true);
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          {!userLoggedIn ? (
            <Stack.Screen name="Login" component={Login} />
          ) : (
            <>
              <Stack.Screen
                name="Home"
                component={Home}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ConversationsNav"
                component={ConversationsNavigation}
                options={{ headerShown: false }}
              />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
