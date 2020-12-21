import { Appointment } from '../models/Appointment';
import { Cart } from '../models/Cart';
import { Doctor } from '../models/Doctor';
import { Order } from '../models/Order';
import { Patient } from '../models/Patient';
import { Pharmacy } from '../models/Pharmacy';
import { IDoctorFilterType } from './doctorFilterService';

export enum Store {
	Cart = 'Cart',
	Patient = 'Patient',
	Doctor = 'Doctor',
	Pharmacy = 'Pharmacy',
	Order = 'Order',
	Appointment = 'Appointment',

	DoctorFilter = 'DoctorFilter',
	MedicineFilter = 'MedicineFilter',
	PharmacyFilter = 'PharmacyFilter',
}

export const storageService = {
	store: (store: Store, value: any): void => localStorage.setItem(store, JSON.stringify(value)),
	get: (store: Store): any => {
		const item = localStorage.getItem(store);

		if (item) {
			return JSON.parse(item);
		}

		return null;
	},
	remove: (store: Store): void => {
		localStorage.removeItem(store);
	},

	cart: {
		store: (value: Cart[]): void => storageService.store(Store.Cart, value),
		get: (): Cart[] => storageService.get(Store.Cart) as Cart[],
		remove: (): void => storageService.remove(Store.Cart),
	},

	patient: {
		storeConnected: (value: Patient): void => storageService.store(Store.Patient, value),
		getConnected: (): Patient => storageService.get(Store.Patient) as Patient,
		removeConnected: (): void => storageService.remove(Store.Patient),
	},

	doctor: {
		storeConnected: (value: Doctor): void => storageService.store(Store.Doctor, value),
		getConnected: (): Doctor => storageService.get(Store.Doctor) as Doctor,
	},

	pharmacy: {
		storeConnected: (value: Pharmacy): void => storageService.store(Store.Pharmacy, value),
		getConnected: (): Pharmacy => storageService.get(Store.Pharmacy) as Pharmacy,
	},

	order: {
		store: (value: Order[]): void => storageService.store(Store.Order, value),
		get: (): Order[] => storageService.get(Store.Order) as Order[],
	},

	appointment: {
		store: (value: Appointment[]): void => storageService.store(Store.Appointment, value),
		get: (): Appointment[] => storageService.get(Store.Appointment) as Appointment[],
	},

	doctorFilter: {
		store: (value: IDoctorFilterType): void => storageService.store(Store.DoctorFilter, value),
		get: (): IDoctorFilterType => storageService.get(Store.DoctorFilter),
		remove: (): void => storageService.remove(Store.DoctorFilter),
	},

	medicineFilter: {
		store: (value: string): void => storageService.store(Store.MedicineFilter, value),
		get: (): string => storageService.get(Store.MedicineFilter),
		remove: (): void => storageService.remove(Store.MedicineFilter),
	},
	pharmacyFilter: {
		store: (value: string): void => storageService.store(Store.PharmacyFilter, value),
		get: (): string => storageService.get(Store.PharmacyFilter),
		remove: (): void => storageService.remove(Store.PharmacyFilter),
	},
};
