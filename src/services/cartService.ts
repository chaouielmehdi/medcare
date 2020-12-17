import { toast } from 'react-toastify';
import { Cart } from '../models/Cart';
import { storageService, Store } from './storageService';

export const cartService = {
	addToCart: (cartElement: Cart): void => {
		let cart = cartService.getCart();

		if (find(cart, cartElement.medicineId)) {
			cart = remove(cart, cartElement.medicineId);
		}

		cart.push(cartElement);

		storageService.store(Store.CART, cart);

		toast.success("L'article a été ajouté à votre panier");
	},

	getCart: (): Cart[] => {
		const cartAsString = storageService.get(Store.CART);

		if (cartAsString) {
			return JSON.parse(cartAsString);
		}

		return [];
	},

	getCartElement: (medicineId: number | undefined): Cart | undefined => {
		const cart = cartService.getCart();

		return find(cart, medicineId);
	},

	deleteFromCart: (medicineId: number) => {
		let cart = cartService.getCart();

		cart = remove(cart, medicineId);

		storageService.store(Store.CART, cart);
	},
};

/**
 * -----------
 * Helpers
 * -----------
 */

const find = (cart: Cart[], medicineId: number | undefined) => {
	return cart.find((element) => element.medicineId === medicineId);
};

const remove = (cart: Cart[], medicineId: number | undefined) => {
	return cart.filter((element) => element.medicineId !== medicineId);
};
