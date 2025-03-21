import { useQuery } from "@tanstack/react-query";
import { SafeAreaView, View } from "react-native";

const ProfilScreen = () => {

    const data = require('../../../constants/profile.json')

    const {
        data: profile,
    } = useQuery({
        queryKey: ["profil"],
        queryFn: () =>
        fetch("https://jsonplaceholder.typicode.com/users/1").then((response) =>
            response.json()
        ),
    });

    return (
        <SafeAreaView>
            <View className="flex min-h-screen p-5 space-y-4 bg-gradient-to-b from-pink-400 to-purple-200">
                <h1 className="text-4xl">Votre Profile</h1>
                <div className="flex flex-row items-center border-white rounded-md w-fit px-5 py-2 space-x-4">
                    <img src={data[6].image} alt="Profile Picture" className="rounded-full size-32"/>
                    <div>
                        <h2 className="text-2xl">{profile?.name}</h2>
                        <p className="text-xl">{data[6].age} ans</p>
                        <p className="text-xl">{data[6].bio}</p>
                    </div>
                </div>
                <button type="button" className="bg-purple-700 border border-purple-700 max-w-40 rounded-lg p-2 text-white">Modifié le profil</button>
                <div className="space-y-4">
                    <h2 className="text-4xl border-b-4 border-white lg:w-1/2">Vos photos</h2>
                    <div className="grid grid-cols-3 gap-4 w-fit">
                        <img src={data[6].image} alt="Photo sur le compte 1" className="size-44"/>
                        <img src={data[6].image} alt="Photo sur le compte 1" className="size-44"/>
                        <img src={data[6].image} alt="Photo sur le compte 1" className="size-44"/>
                        <img src={data[6].image} alt="Photo sur le compte 1" className="size-44"/>
                        <img src={data[6].image} alt="Photo sur le compte 1" className="size-44"/>
                        <img src={data[6].image} alt="Photo sur le compte 1" className="size-44"/>
                    </div>
                </div>
            </View>
        </SafeAreaView>
    )
}

export default ProfilScreen