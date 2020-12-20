import { Consultation } from '../models/Doctor';
import { IdValueData } from '../models/IdValueData';
import { storageService } from './storageService';

export interface IDoctorFilterType {
	consultation: Consultation;
	doctorName?: string;
	selectedCity?: IdValueData;
	selectedField?: IdValueData;
}

export const doctorFilterService = {
	add: (doctorFilter: IDoctorFilterType): void => {
		storageService.doctorFilter.store(doctorFilter);
	},

	get: (): IDoctorFilterType => {
		return storageService.doctorFilter.get();
	},

	remove: () => {
		storageService.doctorFilter.remove();
	},
};
