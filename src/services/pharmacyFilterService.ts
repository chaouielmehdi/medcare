import { storageService } from './storageService';

export const pharmacyFilterService = {
	add: (pharmacyFilter: string): void => {
		storageService.pharmacyFilter.store(pharmacyFilter);
	},

	get: (): string => {
		return storageService.pharmacyFilter.get();
	},

	remove: () => {
		storageService.pharmacyFilter.remove();
	},
};
