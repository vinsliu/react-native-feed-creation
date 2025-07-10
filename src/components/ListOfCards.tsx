import { FlatList, Image, ListRenderItem, View } from "react-native";

type ImageItem = {
  itemId: number;
  authorId: number;
  timeStamp: string;
  url: string;
  likes: string;
  conversations: number;
};

export const ListOfCards = () => {
  const renderItem: ListRenderItem<ImageItem> = ({ item }) => {
    return (
      <Image
        style={{
          width: "100%",
          height: 288,
          borderRadius: 20,
          marginBottom: 32,
        }}
        source={{
          uri: item.url,
        }}
      />
    );
  };

  const arrayOfImages: ImageItem[] = [
    {
      itemId: 101,
      authorId: 11,
      timeStamp: "2 hrs ago",
      url: "https://images.unsplash.com/photo-1653546226145-91aa8ce0cc96?auto=format&fit=crop&w=1376&q=80",
      likes: "28",
      conversations: 12,
    },
    {
      itemId: 102,
      authorId: 12,
      timeStamp: "3 hrs ago",
      url: "https://images.unsplash.com/photo-1751013781844-fa6a78089e49?q=80&w=2370?auto=format&fit=crop&w=1376&q=80",
      likes: "45",
      conversations: 5,
    },
    {
      itemId: 103,
      authorId: 13,
      timeStamp: "5 hrs ago",
      url: "https://plus.unsplash.com/premium_photo-1750107641946-b29e9cd1b39b?q=80&w=2359?auto=format&fit=crop&w=1376&q=80",
      likes: "102",
      conversations: 18,
    },
    {
      itemId: 104,
      authorId: 14,
      timeStamp: "8 hrs ago",
      url: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1376&q=80",
      likes: "63",
      conversations: 20,
    },
    {
      itemId: 105,
      authorId: 15,
      timeStamp: "12 hrs ago",
      url: "https://images.unsplash.com/photo-1750785328656-eb4c9942e58f?q=80&w=2370?auto=format&fit=crop&w=1376&q=80",
      likes: "89",
      conversations: 30,
    },
    {
      itemId: 106,
      authorId: 16,
      timeStamp: "1 day ago",
      url: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1376&q=80",
      likes: "71",
      conversations: 14,
    },
    {
      itemId: 107,
      authorId: 17,
      timeStamp: "2 days ago",
      url: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&w=1376&q=80",
      likes: "120",
      conversations: 42,
    },
    {
      itemId: 108,
      authorId: 18,
      timeStamp: "3 days ago",
      url: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1376&q=80",
      likes: "98",
      conversations: 23,
    },
    {
      itemId: 109,
      authorId: 19,
      timeStamp: "4 days ago",
      url: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1376&q=80",
      likes: "67",
      conversations: 11,
    },
    {
      itemId: 110,
      authorId: 20,
      timeStamp: "1 week ago",
      url: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1376&q=80",
      likes: "134",
      conversations: 38,
    },
  ];

  return (
    <View style={{ paddingVertical: 30 }}>
      <FlatList
        data={arrayOfImages}
        renderItem={renderItem}
        keyExtractor={(item) => item.itemId.toString()}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};
