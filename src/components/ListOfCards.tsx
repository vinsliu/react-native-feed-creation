import AppLoading from "expo-app-loading";
import { useEffect, useState } from "react";
import { FlatList, Image, ListRenderItem, View } from "react-native";
import { Card } from "./Card";

type ImageItem = {
  itemId: number;
  authorId: number;
  timeStamp: string;
  url: string;
  likes: string;
  conversations: number;
};

export const ListOfCards = () => {
  const [cardList, setCardList] = useState(null);
  async function fetchCardData() {
    try {
      console.log(`requestBase ${requestBase}`);
      const response = await fetch(requestBase + "/home.json");
      const data = await response.json();
      console.log(`data json ok => ${JSON.stringify(data)}`);
      setCardList(data);
    } catch (error) {
      console.log(`listcard fetch error ${error.message}`);
    }
  }
  useEffect(() => {
    fetchCardData();
  }, []);

  if (!cardList) {
    return <AppLoading />;
  }

  const renderItem: ListRenderItem<ImageItem> = ({ item }) => {
    return <Card item={item} />;
  };

  return (
    <View style={{ paddingVertical: 30 }}>
      <FlatList
        data={cardList}
        renderItem={renderItem}
        keyExtractor={(item) => item.itemId.toString()}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};
