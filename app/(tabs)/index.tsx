import { SafeAreaView, View } from "react-native";

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <View className="flex min-h-screen p-5 space-y-4 bg-gradient-to-b from-pink-400 to-purple-200">
        <h1 className="text-4xl font-bold">Ecran principal</h1>
      </View>
    </SafeAreaView>
  );
}
