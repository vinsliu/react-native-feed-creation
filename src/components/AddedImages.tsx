import { FlatList, Image, useWindowDimensions, View } from "react-native";

type ImageItem = {
  id: number;
  url: string;
};

const arrayOfImages = [
  { id: 1, url: "https://picsum.photos/id/1011/400/300" },
  { id: 2, url: "https://picsum.photos/id/1012/400/300" },
  { id: 3, url: "https://picsum.photos/id/1015/400/300" },
  { id: 4, url: "https://picsum.photos/id/1016/400/300" },
  { id: 5, url: "https://picsum.photos/id/1020/400/300" },
  { id: 6, url: "https://picsum.photos/id/1024/400/300" },
  { id: 7, url: "https://picsum.photos/id/1025/400/300" },
  { id: 8, url: "https://picsum.photos/id/1033/400/300" },
  { id: 9, url: "https://picsum.photos/id/1035/400/300" },
  { id: 10, url: "https://picsum.photos/id/1037/400/300" },
];

export const AddedImages = () => {
  const imageWidth = useWindowDimensions().width * 0.4;

  const renderItem = ({ item }: { item: ImageItem }) => {
    return (
      <Image
        style={{
          width: imageWidth,
          height: 220,
          borderRadius: 20,
          marginBottom: 32,
          borderColor: "#000",
        }}
        source={{
          uri: item.url,
        }}
      />
    );
  };
  return (
    <View
      style={{
        paddingHorizontal: 20,
        paddingTop: 20,
      }}
    >
      <FlatList
        data={arrayOfImages}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        snapToInterval={240}
        decelerationRate="fast"
      />
    </View>
  );
};
