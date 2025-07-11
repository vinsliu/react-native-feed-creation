import { createStackNavigator } from "@react-navigation/stack";
import { Conversations } from "./Conversations";
import { Messages } from "./Messages";

type ConversationsStackParamList = {
  Conversations: undefined;
  Messages: { name: string };
};

const Stack = createStackNavigator<ConversationsStackParamList>();

export const ConversationsNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: "#000",
        headerTransparent: true,
        headerTitleAlign: "left",
        headerStyle: {
          height: 100,
        },
        headerTitleStyle: {
          textAlign: "left",
          fontWeight: "bold",
          fontFamily: "Poppins_700Bold",
          fontSize: 24,
        },
      }}
    >
      <Stack.Screen name="Conversations" component={Conversations} />
      <Stack.Screen
        name="Messages"
        component={Messages}
        options={({ route }) => ({
          title: route.params?.name ?? "Messages",
          headerTitleStyle: {
            textAlign: "center",
            fontFamily: "Poppins_400Regular",
            fontSize: 20,
            position: "absolute",
            top: 100,
            left: 120,
          },
        })}
      />
    </Stack.Navigator>
  );
};
