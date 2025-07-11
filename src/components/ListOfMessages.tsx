import { FlatList, ListRenderItem, StyleSheet, Text, View } from "react-native";

type Message = {
  id: number;
  type: string;
  text: string;
};

type Props = {
  conversationId: string;
};

export const ListOfMessages = ({ conversationId }: Props) => {
  const messages = {
    id: 2,
    messages: [
      {
        id: 1,
        type: "to",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo illo praesentium repellendus in ut temporibus ratione quas eligendi, pariatur commodi aperiam consectetur sequi repudiandae et quis placeat accusantium reprehenderit magnam.",
      },
      {
        id: 2,
        type: "from",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo illo praesentium repellendus in ut temporibus ratione quas eligendi, pariatur commodi aperiam consectetur sequi repudiandae et quis placeat accusantium reprehenderit magnam.",
      },
      {
        id: 3,
        type: "from",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo illo praesentium repellendus in ut temporibus ratione quas eligendi, pariatur commodi aperiam consectetur sequi repudiandae et quis placeat accusantium reprehenderit magnam.",
      },
      {
        id: 4,
        type: "to",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo illo praesentium repellendus in ut temporibus ratione quas eligendi, pariatur commodi aperiam consectetur sequi repudiandae et quis placeat accusantium reprehenderit magnam.",
      },
    ],
  };

  const renderItem: ListRenderItem<Message> = ({ item }) => {
    return (
      <View
        style={[
          styles.text,
          item.type === "from" ? styles.textTo : styles.textFrom,
        ]}
      >
        <Text>{item.text}</Text>
      </View>
    );
  };

  return (
    <View style={{ paddingHorizontal: 20 }}>
      <FlatList
        data={messages.messages}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        inverted
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    backgroundColor: "#FAFAFA",
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    fontSize: 14,
    padding: 10,
    maxWidth: "65%",
    marginVertical: 14,
  },
  textFrom: {
    borderTopLeftRadius: 20,
    alignSelf: "flex-end",
  },
  textTo: {
    borderTopRightRadius: 20,
    alignSelf: "flex-start",
  },
});
