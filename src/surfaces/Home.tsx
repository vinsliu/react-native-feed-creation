import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View } from "react-native";
import { Feed } from "./Feed";
import { Conversations } from "./Conversations";
import { AddPost } from "./AddPost";
import { Favorites } from "./Favorites";
import { Profile } from "./Profile";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../styles/colors";

const Tab = createBottomTabNavigator();
const ConversationsBase = () => <View style={{ flex: 1 }} />;

export const Home = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Feed") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Favorites") {
            iconName = focused ? "heart" : "heart-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "person-circle" : "person-circle-outline";
          }
          return <Ionicons name={iconName as any} size={size} color={color} />;
        },
        tabBarActiveTintColor: colors.accentLines,
        tabBarInactiveTintColor: colors.black,
        tabBarShowLabel: false,
        headerTransparent: false,
        headerTitleAlign: "left",
        headerTitleStyle: {
          textAlign: "left",
          fontWeight: "bold",
          fontFamily: "Poppins_700Bold",
          fontSize: 28,
        },
      })}
    >
      <Tab.Screen name="Feed" component={Feed} />
      <Tab.Screen
        name="ConversationsMain"
        component={ConversationsBase}
        options={{
          tabBarIcon: ({ size }) => (
            <Ionicons name="chatbox-outline" color="#000" size={size} />
          ),
        }}
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            e.preventDefault();
            navigation.navigate("ConversationsNav");
          },
        })}
      />
      <Tab.Screen
        name="AddPost"
        component={AddPost}
        options={{
          tabBarIcon: ({ size }) => (
            <View style={{ marginTop: -30 }}>
              <View
                style={{
                  width: 60,
                  height: 60,
                  backgroundColor: "#000",
                  borderRadius: 15,
                  transform: [{ rotate: "45deg" }],
                  justifyContent: "center",
                  alignItems: "center",
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 4 },
                  shadowOpacity: 0.2,
                  shadowRadius: 4,
                }}
              >
                <View style={{ transform: [{ rotate: "-45deg" }] }}>
                  <Ionicons name="add-circle-outline" color="#fff" size={36} />
                </View>
              </View>
            </View>
          ),
        }}
      />
      <Tab.Screen name="Favorites" component={Favorites} />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};
