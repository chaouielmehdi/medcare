import { toast } from 'react-toastify';
import { Cart } from '../models/Cart';
import { storageService } from './storageService';

export const cartService = {
	addElement: (cartElement: Cart): void => {
		let cart = cartService.getAll() || [];

		if (find(cart, cartElement.medicineId)) {
			cart = remove(cart, cartElement.medicineId);
		}

		cart.push(cartElement);

		storageService.cart.store(cart);

		toast.success("L'article a été ajouté à votre panier");
	},

	getAll: (): Cart[] => {
		return storageService.cart.get();
	},

	getElement: (medicineId: number | undefined): Cart | undefined => {
		const cart = cartService.getAll();

		return find(cart, medicineId);
	},

	deleteElement: (medicineId: number) => {
		let cart = cartService.getAll();

		cart = remove(cart, medicineId);

		storageService.cart.store(cart);
	},
};

/**
 * -----------
 * Helpers
 * -----------
 */

const find = (cart: Cart[], medicineId: number | undefined) => {
	if (!cart) {
		return;
	}

	return cart.find((element) => element.medicineId === medicineId);
};

const remove = (cart: Cart[], medicineId: number | undefined) => {
	return cart.filter((element) => element.medicineId !== medicineId);
};
