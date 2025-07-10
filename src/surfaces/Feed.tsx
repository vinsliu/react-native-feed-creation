import { useHeaderHeight } from "@react-navigation/elements";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Feed = () => {
  const headerHeight = useHeaderHeight();
  return (
    <SafeAreaView style={{ flex: 1, paddingTop: headerHeight }}>
      <View>
        <Text style={{ fontFamily: "Poppins_400Regular" }}>Feed screen</Text>
      </View>
    </SafeAreaView>
  );
};
