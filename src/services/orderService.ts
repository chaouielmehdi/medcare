import { toast } from 'react-toastify';
import { Order } from '../models/Order';
import { storageService } from './storageService';

export const orderService = {
	passOrder: (checkoutOrder: Order): void => {
		let order = storageService.order.get() || [];
		order.push(checkoutOrder);
		storageService.order.store(order);
		toast.success('La command a été passé avec succès');
	},
	getAll: (): Order[] => {
		return storageService.order.get();
	},
};
