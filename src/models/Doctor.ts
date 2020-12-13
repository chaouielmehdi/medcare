import { fields, IdValueData } from './IdValueData';

export enum Gender {
	Male = 'Male',
	Female = 'Female',
}

interface Consultation {
	cabinet: {
		available: boolean;
		price?: number;
	};
	video: {
		available: boolean;
		price?: number;
	};
	home: {
		available: boolean;
		price?: number;
	};
}

export class Doctor {
	constructor(
		public id: number,
		public name: string,
		public email: string,
		public password: string,
		public gender: Gender,
		public address: string,
		public phone: string,
		public consultation: Consultation,
		public fields: IdValueData[]
	) {}
}

export const doctors: Doctor[] = [
	{
		id: 0,
		name: 'Sanae Imrani',
		email: 'Sanae.Imrani@gmail.com',
		password: '123456',
		address: 'rue Alhour -ex Peupliers, Ain Sebaa, Casablanca',
		gender: Gender.Female,
		phone: '+212 6 39 24 69 29',
		consultation: {
			cabinet: {
				available: true,
				price: 250,
			},
			video: {
				available: true,
			},
			home: {
				available: false,
			},
		},
		fields: [fields[0], fields[2]],
	},
	{
		id: 1,
		name: 'Imad Ait Taleb',
		email: 'Imad.Ait.Taleb@gmail.com',
		password: '123456',
		address: '329, bd. Riad, cIté AlMassira, Tétouan',
		gender: Gender.Male,
		phone: '+212 6 39 24 69 29',
		consultation: {
			cabinet: {
				available: true,
				price: 250,
			},
			video: {
				available: true,
				price: 150,
			},
			home: {
				available: false,
			},
		},
		fields: [fields[4], fields[12]],
	},
	{
		id: 2,
		name: 'Mohamed Alami',
		email: 'Mohamed.Alami@gmail.com',
		password: '123456',
		address: 'rue Al Khatouat, 1°ét. appt. n°4, Agdal, Rabat',
		gender: Gender.Male,
		phone: '+212 6 44 24 98 29',
		consultation: {
			cabinet: {
				available: true,
				price: 300,
			},
			video: {
				available: true,
				price: 200,
			},
			home: {
				available: true,
				price: 500,
			},
		},
		fields: [fields[3]],
	},
	{
		id: 3,
		name: 'Abdessalam Mejdoub',
		email: 'Abdessalam.Mejdoub@gmail.com',
		password: '123456',
		address: '75, rue Omar Slaoui, Casablanca',
		gender: Gender.Male,
		phone: '+212 6 45 24 13 00',
		consultation: {
			cabinet: {
				available: true,
				price: 200,
			},
			video: {
				available: true,
				price: 200,
			},
			home: {
				available: true,
				price: 600,
			},
		},
		fields: [fields[3], fields[5]],
	},
	{
		id: 4,
		name: 'Alae Saidi',
		email: 'Alae.Saidi@gmail.com',
		password: '123456',
		address: '29, RUE MOHAMED EL BAAMRANI 20000, Tanger',
		gender: Gender.Female,
		phone: '+212 6 54 34 83 44',
		consultation: {
			cabinet: {
				available: true,
				price: 250,
			},
			video: {
				available: false,
				price: 150,
			},
			home: {
				available: false,
			},
		},
		fields: [fields[18], fields[4]],
	},
];
