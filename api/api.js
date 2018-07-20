import { AsyncStorage } from "react-native";

export const getData = async (key) => {
    let response = {};
    try {
        const value = await AsyncStorage.getItem(key);
        response.value = value;
    }
    catch (error) {
        //TODO: write log file;
        response.error = error;
    }
    finally {
        return response;
    }
}

export const setData = async (key, value) => {
    let response = { error: null };
    try {
        await AsyncStorage.setItem(key, value);
    }
    catch (error) {
        //TODO: write log file;
        console.log(error);
        response.error = error;
    }
    finally {
        return response;
    }
}