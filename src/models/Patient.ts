export class Patient {
	constructor(
		public id: number,
		public name: string,
		public phone: string,
		public email: string,
		public password: string
	) {}
}

export const patients: Patient[] = [
	{
		id: 0,
		name: 'Mohamed Arabi',
		email: 'Mohamed.Arabi@gmail.com',
		password: '123456',
		phone: '+212 6 39 24 69 29',
	},
	{
		id: 1,
		name: 'Assia Mohamadi',
		email: 'Assia.Mohamadi@gmail.com',
		password: '123456',
		phone: '+212 6 50 34 23 69',
	},
	{
		id: 2,
		name: 'Lady GAGA',
		email: 'g',
		password: 'g',
		phone: '+212 6 50 34 23 69',
	},
];
