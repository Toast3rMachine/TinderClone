import { useState } from "react";
import { SafeAreaView, Text, TextInput, TouchableOpacity, View } from "react-native";

import { useMutation } from "@tanstack/react-query";
import useUserStore from "@/store/user.store";
import { useRouter } from "expo-router";
import { save } from "@/lib/utils/secure_store";

export default function Profile() {

    const router = useRouter();
    // Récupération des fonctions de gestion d'authentification du store
    const { setAuthenticated, setUser }: any = useUserStore();
    // État local pour les champs du formulaire
    const [fields, setFields] = useState({
        email: "",
        password: "",
    });

    const mutation = useMutation({
        // Fonction de mutation qui effectue la requête API
        mutationFn: async (credentials: { email: string; password: string }) => {
            const email = credentials.email;
            const password = credentials.password;
            return fetch("https://api.escuelajs.co/api/v1/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
                credentials: "include",
            }).then((res) => res.json());
        },
        // Gestion du succès de la connexion
        onSuccess: async (data) => {
            setAuthenticated(true);
            setUser(data);
            await save("token", data?.token as string);
            router.push("/(private)/(tabs)");
        },
        // Gestion des erreurs
        onError: (error) => {
            console.log("error", error);
        },
    });

    const handleSubmit = () => {
        mutation.mutate({ email: fields.email, password: fields.password });
    };
    
    return (
        <SafeAreaView className="flex min-h-screen p-5 space-y-4 bg-gradient-to-b from-pink-400 to-purple-200">
            <View className="items-center space-y-8 bg-white w-96 m-auto p-8 rounded-lg border-4 border-purple-700">
                <Text className="text-4xl font-bold">Login</Text>
                <View>
                    <Text className="text-2xl">Email</Text>
                    <TextInput
                    className="bg-white text-2xl w-fit p-2 rounded-lg border-2 border-purple-700 hover:border-pink-400"
                    placeholder="Entrez votre email"
                    placeholderTextColor="#9CA3AF"
                    onChangeText={(text) =>
                        setFields((prevState) => ({ ...prevState, email: text }))
                    }
                    keyboardType="email-address"
                    autoCapitalize="none"
                    />
                </View>

                <View>
                    <Text className="text-2xl">
                    Mot de passe
                    </Text>
                    <TextInput
                    className="bg-white text-2xl w-fit p-2 rounded-lg border-2 border-purple-700 hover:border-pink-400"
                    placeholder="Entrez votre mot de passe"
                    placeholderTextColor="#9CA3AF"
                    secureTextEntry
                    onChangeText={(text) =>
                        setFields((prevState) => ({ ...prevState, password: text }))
                    }
                    />
                </View>

                <View className="flex-row w-full items-center space-x-2">
                    {/* Bouton de connexion */}
                    <TouchableOpacity
                        className="rounded-lg bg-purple-700 hover:bg-pink-400 active:bg-pink-800 p-4 grow"
                        onPress={handleSubmit}
                    >
                        <Text className="text-center text-xl text-white">
                        Se connecter
                        </Text>
                    </TouchableOpacity>

                    {/* Lien mot de passe oublié */}
                    <TouchableOpacity
                        onPress={() => console.log("Mot de passe oublié")}
                    >
                        <Text className="text-sm">Mot de passe oublié ?</Text>
                    </TouchableOpacity>

                </View>

                {/* Lien vers l'inscription */}
                <View className="flex-row justify-center">
                    <Text className="text-gray-700">
                    Pas encore de compte ?{" "}
                    </Text>
                    <TouchableOpacity onPress={() => console.log("Inscription")}>
                    <Text className="text-purple-700">S'inscrire</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </SafeAreaView>
    )
}