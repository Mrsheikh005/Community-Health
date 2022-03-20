import AsyncStorage from '@react-native-async-storage/async-storage';

const cartConfig = {
	key: 'cart',
	storage: AsyncStorage,
	whitelist: [ 'cart' ]
};
const rootPersistConfig = {
	key: 'root',
	storage: AsyncStorage
};
export { cartConfig, rootPersistConfig };
