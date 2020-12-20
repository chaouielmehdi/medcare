import { toast } from 'react-toastify';
import { Appointment } from '../models/Appointment';
import { storageService } from './storageService';

export const appointmentService = {
	add: (appointment: Appointment): void => {
		const appointments = storageService.appointment.get() || [];
		appointments.push(appointment);
		storageService.appointment.store(appointments);

		toast.success('Le rendez-vous a été pris avec succès');
	},
	get: (): Appointment[] => {
		return storageService.appointment.get();
	},
};
