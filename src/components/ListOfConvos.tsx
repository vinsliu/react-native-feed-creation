import { StackNavigationProp } from "@react-navigation/stack";
import { FC } from "react";
import {
  FlatList,
  Image,
  ListRenderItem,
  Pressable,
  Text,
  View,
} from "react-native";

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

type Conversation = {
  id: number;
  userId: number;
  text: string;
};

export const ListOfConvos: FC<Props> = ({ navigation }) => {
  const userList = [
    {
      id: 1,
      name: "Jean Dupont",
      url: "https://avatars.githubusercontent.com/u/1?v=4",
    },
    {
      id: 2,
      name: "Marie Martin",
      url: "https://avatars.githubusercontent.com/u/2?v=4",
    },
    {
      id: 3,
      name: "Lucie Robert",
      url: "https://avatars.githubusercontent.com/u/3?v=4",
    },
    {
      id: 4,
      name: "Pierre Lemoine",
      url: "https://avatars.githubusercontent.com/u/4?v=4",
    },
    {
      id: 5,
      name: "Sophie Moreau",
      url: "https://avatars.githubusercontent.com/u/5?v=4",
    },
    {
      id: 6,
      name: "Julien Lefevre",
      url: "https://avatars.githubusercontent.com/u/6?v=4",
    },
    {
      id: 7,
      name: "Clément Dufresne",
      url: "https://avatars.githubusercontent.com/u/7?v=4",
    },
    {
      id: 8,
      name: "Chloé Bernard",
      url: "https://avatars.githubusercontent.com/u/8?v=4",
    },
    {
      id: 9,
      name: "Antoine Picard",
      url: "https://avatars.githubusercontent.com/u/9?v=4",
    },
    {
      id: 10,
      name: "Emma Lefevre",
      url: "https://avatars.githubusercontent.com/u/10?v=4",
    },
  ];

  const conversationsList = [
    { id: 1, userId: 1, text: "Hey, comment ça va ?" },
    {
      id: 2,
      userId: 2,
      text: "Salut, tu veux discuter de la réunion de demain ?",
    },
    {
      id: 3,
      userId: 3,
      text: "J'ai terminé le projet, je te l'envoie bientôt.",
    },
    {
      id: 4,
      userId: 4,
      text: "Tu as vu la dernière vidéo de Mark ? C'est ouf !",
    },
    {
      id: 5,
      userId: 5,
      text: "Je n'ai pas compris le dernier mail, tu peux m'expliquer ?",
    },
    { id: 6, userId: 6, text: "On se retrouve à 14h à l'agence ?" },
    {
      id: 7,
      userId: 7,
      text: "Si tu veux, on peut se retrouver pour un café ce soir.",
    },
    {
      id: 8,
      userId: 8,
      text: "J'ai eu un petit contretemps, je vais arriver avec 10 minutes de retard.",
    },
    {
      id: 9,
      userId: 9,
      text: "Je t'ai envoyé le fichier, fais-moi signe quand tu l'as reçu.",
    },
    { id: 10, userId: 10, text: "Peux-tu me rappeler quand tu as un moment ?" },
  ];

  const renderItem: ListRenderItem<Conversation> = ({ item }) => {
    const currentUser = userList.find((user) => user.id === item.userId);

    if (!currentUser) return null;

    return (
      <Pressable
        onPress={() =>
          navigation.navigate("Messages", {
            name: currentUser.name,
            avatar: currentUser.url,
          })
        }
        style={{
          height: 103,
          backgroundColor: "rgba(255,255,255,0.6)",
          borderRadius: 33,
          marginBottom: 16,
          justifyContent: "flex-start",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <View>
          <View
            style={{
              width: 67,
              height: 67,
              borderRadius: 35,
              borderColor: "#000",
              borderWidth: 1,
              marginHorizontal: 17,
            }}
          >
            <Image
              style={{
                width: 61,
                height: 61,
                borderRadius: 35,
                marginTop: 2,
                marginLeft: 2,
              }}
              source={{ uri: currentUser.url }}
            />
          </View>
        </View>
        <View>
          <Text style={{ fontSize: 14, paddingBottom: 9 }}>
            {currentUser.name}
          </Text>
          <Text style={{ color: "#656565", width: "65%" }}>{item.text}</Text>
        </View>
      </Pressable>
    );
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
