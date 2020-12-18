import { Patient } from '../models/Patient';
import { storageService } from './storageService';

export const patientService = {
	login: (patient: Patient): Patient => {
		storageService.patient.storeConnected(patient);

		return storageService.patient.getConnected();
	},

	getConnected: (): Patient => {
		return storageService.patient.getConnected();
	},

	isConnected: (): boolean => {
		if (storageService.patient.getConnected()) {
			return true;
		}

		return false;
	},
};
