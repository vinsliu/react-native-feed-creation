import React from "react";
import { useHeaderHeight } from "@react-navigation/elements";
import { Image, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ListOfMessages } from "../components/ListOfMessages";
import { useRoute, RouteProp } from "@react-navigation/native";

type ConversationsStackParamList = {
  Conversations: undefined;
  Messages: { name: string; avatar: string };
};

type MessagesRouteProp = RouteProp<ConversationsStackParamList, "Messages">;

export const Messages = () => {
  const route = useRoute<MessagesRouteProp>();
  const headerHeight = useHeaderHeight();

  // Tu peux logger si besoin
  console.log("Route params dans Messages:", route.params);

  return (
    <SafeAreaView style={{ flex: 1, paddingTop: headerHeight + 100 }}>
      <>
        <View
          style={{
            position: "absolute",
            top: 40,
            left: "2%",
            backgroundColor: "#E1F6F4",
            width: "96%",
            height: 255,
            borderRadius: 34,
          }}
        />
        <View
          style={{
            width: 650,
            height: 570,
            borderRadius: 155,
            borderWidth: 1,
            borderColor: "#fff",
            position: "absolute",
            top: 250,
            left: -300,
            transform: [{ rotate: "-45deg" }],
          }}
        />
        <View
          style={{
            width: 650,
            height: 570,
            borderRadius: 155,
            borderWidth: 1,
            borderColor: "#fff",
            position: "absolute",
            top: 190,
            left: -290,
            transform: [{ rotate: "-45deg" }],
          }}
        />
        <View
          style={{
            position: "absolute",
            top: 125,
            left: 70,
          }}
        >
          <View
            style={{
              width: 84,
              height: 84,
              borderRadius: 35,
              borderColor: "#000",
              borderWidth: 1,
              transform: [{ rotate: "-45deg" }],
              position: "absolute",
              top: -3,
              left: -3,
            }}
          />
          <Image
            style={{ height: 78, width: 78, borderRadius: 40 }}
            source={{ uri: route.params.avatar }}
          />
        </View>
        <ListOfMessages conversationId="2" />
      </>
    </SafeAreaView>
  );
};
