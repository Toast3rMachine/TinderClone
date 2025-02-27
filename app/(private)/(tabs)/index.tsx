import { Button, Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import Swiper from "react-native-deck-swiper";

export default function HomeScreen() {

  const data = require('../../../constants/profile.json')

  return (
    <SafeAreaView>
      <View className="flex min-h-screen p-5 bg-gradient-to-b from-pink-400 to-purple-200">
        <Text className="text-4xl font-bold mx-auto">Découvrir des profils</Text>
        <Swiper
            cards={[data[0].image, data[0].image, data[0].image, data[0].image, data[0].image, data[0].image, data[0].image]}
            renderCard={(card) => {
                return (
                    <View className="items-center mt-8 justify-center bg-purple-800 w-1/3 h-3/4 mx-auto p-4 rounded-md">
                        <Text className="w-full h-full">
                          <Image source={card} alt="image" className="w-full h-full"/>
                        </Text>
                    </View>
                )
            }}
            onSwiped={(cardIndex) => {console.log(cardIndex)}}
            onSwipedAll={() => {console.log('onSwipedAll')}}
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
