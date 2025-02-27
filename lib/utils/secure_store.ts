import * as SecureStore from "expo-secure-store";

export async function save(key: string, value: string) {
    try {
        await SecureStore.setItemAsync(key, value);
    } catch (error) {
        console.error(error);
    }
}

export async function getValueFor(key: string) {
    try {
        let result = await SecureStore.getItemAsync(key);
        return result;
    } catch (error) {
        console.error(error);
        return null;
    }
}
