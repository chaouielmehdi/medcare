type Schedule = {
	start: number;
	end: number;
};

export class Pharmacy {
	constructor(
		public id: number,
		public name: string,
		public ownerName: string,
		public email: string,
		public password: string,
		public address: string,
		public phone: string,
		public rating: number,
		public schedule: Schedule // only from Monday to Friday
	) {}
}

export const pharmacies: Pharmacy[] = [
	{
		id: 0,
		name: 'Pharmacie El Bayrouni',
		ownerName: 'Sanae Imrani',
		email: 'Sanae.Imrani@gmail.com',
		password: '123456',
		address: 'rue Alhour -ex Peupliers, Ain Sebaa, Casablanca',
		phone: '+212 6 39 24 69 29',
		rating: 4,
		schedule: {
			start: 8.5,
			end: 18.25,
		},
	},
	{
		id: 1,
		name: 'Pharmacie Principale',
		ownerName: 'Imad Ait Taleb',
		email: 'Imad.Ait.Taleb@gmail.com',
		password: '123456',
		address: '329, bd. Riad, cIté AlMassira, Tétouan',
		phone: '+212 6 39 24 69 29',
		rating: 3,
		schedule: {
			start: 8.5,
			end: 18.25,
		},
	},
	{
		id: 2,
		name: 'Pharmacie Tanger',
		ownerName: 'Mohamed Alami',
		email: 'Mohamed.Alami@gmail.com',
		password: '123456',
		address: 'rue Al Khatouat, 1°ét. appt. n°4, Agdal, Rabat',
		phone: '+212 6 44 24 98 29',
		rating: 5,
		schedule: {
			start: 8.5,
			end: 18.25,
		},
	},
	{
		id: 3,
		name: 'Pharmacie Santé',
		ownerName: 'Abdessalam Mejdoub',
		email: 'Abdessalam.Mejdoub@gmail.com',
		password: '123456',
		address: '75, rue Omar Slaoui, Casablanca',
		phone: '+212 6 45 24 13 00',
		rating: 4,
		schedule: {
			start: 8.5,
			end: 18.25,
		},
	},
	{
		id: 4,
		name: 'Pharmacie Beni Makada',
		ownerName: 'Alae Saidi',
		email: 'Alae.Saidi@gmail.com',
		password: '123456',
		address: '29, RUE MOHAMED EL BAAMRANI 20000, Tanger',
		phone: '+212 6 54 34 83 44',
		rating: 4,
		schedule: {
			start: 8.5,
			end: 18.25,
		},
	},
];
