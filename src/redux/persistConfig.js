
import AsyncStorage from "@react-native-async-storage/async-storage"

const cartConfig = {
    key: 'cart',
    storage: AsyncStorage,
    whitelist: ["cart"]
}

const languageConfig = {
    key: 'language',
    storage: AsyncStorage,
    whitelist: ["language"]
}

const currencyConfig = {
    key: 'currency',
    storage: AsyncStorage,
    whitelist: ["currency"]
}

const notificationConfig = {
    key: 'count',
    storage: AsyncStorage,
    whitelist: ["count"]
}

const profilePersistConfig = {
    key: 'profile',
    storage: AsyncStorage
}
const rootPersistConfig = {
    key: 'root',
    storage: AsyncStorage
}
export { cartConfig, languageConfig, currencyConfig, notificationConfig, rootPersistConfig, profilePersistConfig }