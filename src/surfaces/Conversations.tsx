import { Ionicons } from "@expo/vector-icons";
import { useHeaderHeight } from "@react-navigation/elements";
import { useState } from "react";
import { Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ListOfConvos } from "../components/ListOfConvos";
import { StackNavigationProp } from "@react-navigation/stack";
import { NativeStackScreenProps } from "react-native-screens/lib/typescript/native-stack/types";

type ConversationsStackParamList = {
  Conversations: undefined;
  Messages: { name: string; avatar: string };
};

type ConversationsScreenNavigationProp = StackNavigationProp<
  ConversationsStackParamList,
  "Conversations"
>;

type Props = {
  navigation: ConversationsScreenNavigationProp;
};

export const Conversations = ({ navigation }: Props) => {
  const headerHeight = useHeaderHeight();
  const [text, onChangeText] = useState();

  return (
    <SafeAreaView style={{ flex: 1, paddingTop: headerHeight - 30 }}>
      <View
        style={{
          width: 650,
          height: 570,
          borderRadius: 155,
          borderWidth: 1,
          borderColor: "#EEF2E2",
          position: "absolute",
          top: 210,
          left: -160,
          transform: [{ rotate: "-45deg" }],
        }}
      />
      <View
        style={{
          width: 650,
          height: 570,
          borderRadius: 155,
          borderWidth: 1,
          borderColor: "#EEF2E2",
          position: "absolute",
          top: 210,
          left: -160,
          transform: [{ rotate: "-45deg" }],
        }}
      />
      <View
        style={{
          width: 650,
          height: 570,
          borderRadius: 155,
          borderWidth: 1,
          borderColor: "#EEF2E2",
          position: "absolute",
          top: 210,
          left: -160,
          transform: [{ rotate: "-45deg" }],
        }}
      />
      <View style={{ marginHorizontal: 30, position: "relative" }}>
        <View>
          <TextInput
            style={{
              fontSize: 14,
              paddingVertical: 12,
              paddingLeft: 40,
              marginHorizontal: 17,
              borderRadius: 15,
              backgroundColor: "#fff",
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.1,
              shadowRadius: 9,
            }}
            onChangeText={onChangeText as any}
            value={text}
            placeholder="search contacts"
          />
          <Ionicons
            name="search"
            size={24}
            color="#000"
            style={{ position: "absolute", left: 28, top: 6 }}
          />
        </View>
        <ListOfConvos navigation={navigation} />
      </View>
    </SafeAreaView>
  );
};
