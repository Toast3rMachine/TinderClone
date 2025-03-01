import useAcceptedProfileStore from "@/store/acceptedProfil.store";
import { Image, SafeAreaView, Text, View } from "react-native";
import Swiper from "react-native-deck-swiper";

export default function HomeScreen() {

  const data = require('../../../constants/profile.json')

  const cards = [data[0], data[1], data[2], data[3], data[4], data[5]]
  const { setAcceptedProfile }: any = useAcceptedProfileStore();

  const pushProfile = (index:any) => {
    const tab = setAcceptedProfile(cards[index])
    localStorage.setItem("Profile accepté", tab)
  };

  return (
    <SafeAreaView>
      <View className="flex min-h-screen p-5 bg-gradient-to-b from-pink-400 to-purple-200">
        <Text className="text-4xl font-bold mx-auto">Découvrir des profils</Text>
        <Swiper
            cards={cards}
            renderCard={(card) => {
                return (
                    <View className="items-center mt-8 justify-center bg-purple-800 w-1/3 h-3/4 mx-auto p-4 rounded-md">
                        <Text className="flex flex-col w-full h-full">
                          <Image source={card.image} alt="image" className="w-full h-full"/>
                          <View className="bg-pink-400 text-white p-2 mt-4 rounded-md">
                            <Text className="text-2xl bg">{card.name} - {card.age} ans</Text>
                            <Text className="text-xl">{card.bio}</Text>
                          </View>
                        </Text>
                    </View>
                )
            }}
            onSwiped={(cardIndex) => {console.log(cardIndex)}}
            onSwipedLeft={() => {console.log('Profil rejeté')}}
            onSwipedRight={(cardIndex) => {pushProfile(cardIndex)}}
            backgroundColor="none"
            cardIndex={0}
            stackSize= {3}>
            {/* <Button onPress={() => {console.log('oulala')}} title="Press me">
                You can press me
            </Button> */}
        </Swiper>
      </View>
    </SafeAreaView>
  );
}
