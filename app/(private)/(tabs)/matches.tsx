import { Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native";

export default function TabTwoScreen() {

  const data = require('../../../constants/profile.json')

  return (
    <SafeAreaView>
      <View className="flex min-h-screen p-5 space-y-4 bg-gradient-to-b from-pink-400 to-purple-200">
        <Text className="text-4xl font-bold">Vos Matches ✨</Text>
        <View className="flex-col grow space-y-4">
          <Text className="text-2xl border-b-4 border-white font-bold lg:w-1/2">Tout vos Matches</Text>
          <ul className="flex flex-row space-x-4">
            <li>
              <Image source={data[0].image} alt="Image" className="rounded-full border-8 border-purple-700 size-32"/>
              <Text className="m-auto text-center text-xl font-bold">{data[0].name}</Text>
            </li>
            <li>
              <Image source={data[0].image} alt="Image" className="rounded-full border-8 border-purple-700 size-32"/>
              <Text className="m-auto text-center text-xl font-bold">{data[0].name}</Text>
            </li>
            <li>
              <Image source={data[0].image} alt="Image" className="rounded-full border-8 border-purple-700 size-32"/>
              <Text className="m-auto text-center text-xl font-bold">{data[0].name}</Text>
            </li>
            <li>
              <Image source={data[0].image} alt="Image" className="rounded-full border-8 border-purple-700 size-32"/>
              <Text className="m-auto text-center text-xl font-bold">{data[0].name}</Text>
            </li>
            <li>
              <Image source={data[0].image} alt="Image" className="rounded-full border-8 border-purple-700 size-32"/>
              <Text className="m-auto text-center text-xl font-bold">{data[0].name}</Text>
            </li>
          </ul>
        </View>
        <View className="flex-col grow space-y-4">
          <Text className="text-2xl border-b-4 border-white font-bold lg:w-1/2">Vos Messages</Text>
          <ul className="space-y-2">
            <li className="flex items-center space-x-4 text-xl">
              <Image source={data[0].image} alt="Image" className="rounded-full border-8 border-purple-700 size-32"/>
              <View className="bg-white p-4 m-4 rounded-lg border-4 border-purple-700">
                <Text className="text-2xl">{data[0].name}</Text>
                <Text className="font-bold">Nouveaux Messages</Text>
              </View>
            </li>
            <li className="flex items-center space-x-4 text-xl">
              <Image source={data[0].image} alt="Image" className="rounded-full border-8 border-purple-700 size-32"/>
              <View className="bg-white p-4 m-4 rounded-lg border-4 border-purple-700">
                <Text className="text-2xl">{data[0].name}</Text>
                <Text className="font-bold">Nouveaux Messages</Text>
              </View>
            </li>
            <li className="flex items-center space-x-4 text-xl">
              <Image source={data[0].image} alt="Image" className="rounded-full border-8 border-purple-700 size-32"/>
              <View className="bg-white p-4 m-4 rounded-lg border-4 border-purple-700">
                <Text className="text-2xl">{data[0].name}</Text>
                <Text className="font-bold">Nouveaux Messages</Text>
              </View>
            </li>
          </ul>
        </View>
      </View>
    </SafeAreaView>
  );
}