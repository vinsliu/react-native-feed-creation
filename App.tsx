import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet } from "react-native";
import { useEffect, useState } from "react";
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
import { UserListContext } from "./src/context";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  const [userLoggedIn, setIsUserLoggedIn] = useState(true);
  const [userList, setUserList] = useState(null);

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  });

  useEffect(() => {
    async function fetchUserData() {
      const response = await fetch(requestBase + "/user.json");
      const data = await response.json();
      setUserList(data);
    }

    if (fontsLoaded) {
      fetchUserData();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded || !userList) {
    return <AppLoading />;
  }

  return (
    <SafeAreaProvider>
      <UserListContext.Provider value={{ userList }}>
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
      </UserListContext.Provider>
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
