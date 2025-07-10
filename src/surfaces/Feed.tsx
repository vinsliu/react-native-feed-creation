import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ListOfAvatars } from "../components/ListOfAvatars";
import { ListOfCards } from "../components/ListOfCards";

export const Feed = () => {
  return (
    <SafeAreaView style={{ flex: 1, paddingHorizontal: 20 }}>
      <View>
        <ListOfAvatars />
        <ListOfCards />
        <Text style={{ fontFamily: "Poppins_400Regular" }}>Feed screen</Text>
      </View>
    </SafeAreaView>
  );
};
