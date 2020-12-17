import { Cart } from '../models/Cart';

type StoreValue = Cart[];

export enum Store {
	CART = 'cart',
}

export const storageService = {
	store: (store: Store, value: StoreValue) => {
		localStorage.setItem(store, JSON.stringify(value));
	},

	get: (store: Store) => localStorage.getItem(store),
};
