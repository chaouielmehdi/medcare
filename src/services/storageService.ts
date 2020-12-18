import { Cart } from '../models/Cart';
import { Doctor } from '../models/Doctor';
import { Patient } from '../models/Patient';
import { Pharmacy } from '../models/Pharmacy';

export enum Store {
	Cart = 'Cart',
	Patient = 'Patient',
	Doctor = 'Doctor',
	Pharmacy = 'Pharmacy',
}

export const storageService = {
	store: (store: Store, value: any): void => localStorage.setItem(store, JSON.stringify(value)),
	get: (store: Store): any => JSON.parse(localStorage.getItem(store) || '[]'),

	cart: {
		store: (value: Cart[]) => storageService.store(Store.Cart, value),
		get: () => storageService.get(Store.Cart),
	},

	patient: {
		storeConnected: (value: Patient): void => storageService.store(Store.Patient, value),
		getConnected: (): Patient => storageService.get(Store.Patient) as Patient,
	},

	doctor: {
		storeConnected: (value: Doctor): void => storageService.store(Store.Doctor, value),
		getConnected: (): Doctor => storageService.get(Store.Doctor) as Doctor,
	},

	pharmacy: {
		storeConnected: (value: Pharmacy): void => storageService.store(Store.Pharmacy, value),
		getConnected: (): Pharmacy => storageService.get(Store.Pharmacy) as Pharmacy,
	},
};
