import { FlatList, Image, ListRenderItem, Pressable, View } from "react-native";
import { ListHeaderComponent } from "./ListHeaderComponent";
import { UserListContext } from "../context";

type Avatar = {
  id: number;
  url: string;
};

export const ListOfAvatars = () => {
  const renderItem: ListRenderItem<Avatar> = ({ item }) => {
    return (
      <Pressable onPress={() => console.log("hello")}>
        <Image
          style={{ height: 56, width: 56, borderRadius: 28, marginRight: 30 }}
          source={{ uri: item.url }}
        />
      </Pressable>
    );
  };

  return (
    <UserListContext.Consumer>
      {({ userList }) => (
        <View
          style={{
            zIndex: 100,
            paddingVertical: 30,
            paddingLeft: 20,
            backgroundColor: "rgba(255, 255, 255, 0.85)",
          }}
        >
          <FlatList
            data={userList}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            ListHeaderComponent={<ListHeaderComponent />}
            showsHorizontalScrollIndicator={false}
            snapToInterval={86}
            decelerationRate="fast"
          />
        </View>
      )}
    </UserListContext.Consumer>
  );
};
