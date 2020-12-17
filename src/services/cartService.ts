import { toast } from 'react-toastify';

interface Cart {
	id?: number;
	medicineId?: number;
	quantity?: number;
}

export const cartService = {
	addToCart: (cartElement: Cart): void => {
		let cart = cartService.getCart();

		if (find(cart, cartElement.medicineId)) {
			cart = remove(cart, cartElement.medicineId);
		}

		cart.push(cartElement);

		store(cart);

		toast.success("L'article a été ajouté à votre panier");
	},

	getCart: (): Cart[] => {
		const cartAsString = get();

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

		store(cart);
	},
};

/**
 * -----------
 * LocalStorage
 * -----------
 */

const CART = 'cart';

const store = (cart: Cart[]) => {
	localStorage.setItem(CART, JSON.stringify(cart));
};

const get = () => localStorage.getItem(CART);

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
