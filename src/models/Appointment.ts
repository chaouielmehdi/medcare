export interface Appointment {
	doctorId?: number;
	consultationType?: 'video' | 'cabinet' | 'home';
	date?: string;
	reason?: string;
}
