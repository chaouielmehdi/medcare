import { Cart } from './Cart';

export interface Order {
	id?: number;
	owner?: number;
	content?: Cart[];
	total?: number;
	date?: string;
}
