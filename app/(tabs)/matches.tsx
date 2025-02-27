import { View } from "react-native";
import { SafeAreaView } from "react-native";

export default function TabTwoScreen() {

  const data = require('../../constants/profile.json')

  return (
    <SafeAreaView>
      <View className="flex min-h-screen p-5 space-y-4 bg-gradient-to-b from-pink-400 to-purple-200">
        <h1 className="text-4xl font-bold">Vos Matches ✨</h1>
        <div className="flex-col grow space-y-4">
          <h2 className="text-2xl border-b-4 border-white font-bold lg:w-1/2">Tout vos Matches</h2>
          <ul className="flex flex-row space-x-4">
            <li>
              <img src={data[0].image} alt="Image" className="rounded-full border-8 border-purple-700 size-32"/>
              <p className="m-auto text-center text-xl font-bold">{data[0].name}</p>
            </li>
            <li>
              <img src={data[0].image} alt="Image" className="rounded-full border-8 border-purple-700 size-32"/>
              <p className="m-auto text-center text-xl font-bold">{data[0].name}</p>
            </li>
            <li>
              <img src={data[0].image} alt="Image" className="rounded-full border-8 border-purple-700 size-32"/>
              <p className="m-auto text-center text-xl font-bold">{data[0].name}</p>
            </li>
            <li>
              <img src={data[0].image} alt="Image" className="rounded-full border-8 border-purple-700 size-32"/>
              <p className="m-auto text-center text-xl font-bold">{data[0].name}</p>
            </li>
            <li>
              <img src={data[0].image} alt="Image" className="rounded-full border-8 border-purple-700 size-32"/>
              <p className="m-auto text-center text-xl font-bold">{data[0].name}</p>
            </li>
          </ul>
        </div>
        <div className="flex-col grow space-y-4">
          <h2 className="text-2xl border-b-4 border-white font-bold lg:w-1/2">Vos Messages</h2>
          <ul className="space-y-2">
            <li className="flex items-center space-x-4 text-xl">
              <img src={data[0].image} alt="Image" className="rounded-full border-8 border-purple-700 size-32"/>
              <div className="bg-white p-4 m-4 rounded-lg border-4 border-purple-700">
                <h3 className="text-2xl">{data[0].name}</h3>
                <p className="font-bold">Nouveaux Messages</p>
              </div>
            </li>
            <li className="flex items-center space-x-4 text-xl">
              <img src={data[0].image} alt="Image" className="rounded-full border-8 border-purple-700 size-32"/>
              <div className="bg-white p-4 m-4 rounded-lg border-4 border-purple-700">
                <h3 className="text-2xl">{data[0].name}</h3>
                <p className="font-bold">Nouveaux Messages</p>
              </div>
            </li>
            <li className="flex items-center space-x-4 text-xl">
              <img src={data[0].image} alt="Image" className="rounded-full border-8 border-purple-700 size-32"/>
              <div className="bg-white p-4 m-4 rounded-lg border-4 border-purple-700">
                <h3 className="text-2xl">{data[0].name}</h3>
                <p className="font-bold">Nouveaux Messages</p>
              </div>
            </li>
          </ul>
        </div>
      </View>
    </SafeAreaView>
  );
}