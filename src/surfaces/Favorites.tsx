import { useHeaderHeight } from "@react-navigation/elements";
import { SafeAreaView, Text, View } from "react-native";
import { ListOfFavorites } from "../components/ListOfFavorites";

export const Favorites = () => {
  const headerHeight = useHeaderHeight();
  return (
    <SafeAreaView style={{ flex: 1, paddingTop: headerHeight }}>
      <ListOfFavorites />
    </SafeAreaView>
  );
};
