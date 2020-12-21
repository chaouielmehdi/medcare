import { storageService } from './storageService';

export const medicineFilterService = {
	add: (medicineFilter: string): void => {
		storageService.medicineFilter.store(medicineFilter);
	},

	get: (): string => {
		return storageService.medicineFilter.get();
	},

	remove: () => {
		storageService.medicineFilter.remove();
	},
};
