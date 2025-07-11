import { StackNavigationProp } from "@react-navigation/stack";
import AppLoading from "expo-app-loading";
import { FC, useEffect, useState } from "react";
import {
  FlatList,
  Image,
  ListRenderItem,
  Pressable,
  Text,
  View,
} from "react-native";

export const ListOfConvos = ({ navigation }) => {
  const [conversationsList, setConversationsList] = useState(null);

  async function fetchConversationData() {
    const response = await fetch(requestBase + "/conversations.json");
    setConversationsList(await response.json());
  }

  useEffect(() => {
    fetchConversationData();
  }, []);

  if (!conversationsList) {
    return <AppLoading />;
  }

  const renderItem = ({ item }) => {
    return <ConversationItem navigation={navigation} item={item} />;
  };

  return (
    <View
      style={{
        paddingTop: 30,
        marginTop: -30,
        marginBottom: 50,
      }}
    >
      <FlatList
        data={conversationsList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        snapToInterval={119}
        decelerationRate="fast"
        ListHeaderComponent={<View style={{ height: 30 }} />}
      />
    </View>
  );
};
