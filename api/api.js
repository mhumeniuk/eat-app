import { AsyncStorage } from "react-native";

export const Api = {
    getData: async (key) => {
      try {
        const item = await AsyncStorage.getItem(key);
        const parsedItem = JSON.parse(item);
        return parsedItem;
      }
      catch(e) {
        return e;
      }
    },

    setData: async (key, value) => {
      return await AsyncStorage.setItem(key, JSON.stringify(value))
    },

    getDataAsync: async (key) => {
        let response = {};
        try {
            const value = await AsyncStorage.getItem(key);
            console.warn(value);
            response.value = value;
        }
        catch (error) {
          //TODO: write log file;
          console.warn(error);
          response.error = error;
        }
        finally {
            console.warn(response);
            return JSON.parse(response.value);
        }
    },

    saveDataAsync: async (key, value) => {
        let response = {error: null};
        try {
            await AsyncStorage.setItem(key, JSON.stringify(value));
        }
        catch (error) {
            //TODO: write log file;
            console.warn(error);
            response.error = error;
        }
        finally {
            return response;
        }
    }
}