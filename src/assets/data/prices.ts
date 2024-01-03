interface PriceOption {
	title: string;
	price: number;
	description?: string;
}

export const pricesOptions: Record<string, PriceOption> = {
	tenue: {
		title: "Tenue de l'école (obligatoire)",
		price: 50,
	},
	licence: {
		title: 'Licence compétition',
		price: 7,
	},
	cours: {
		title: 'Cours supplémentaire',
		price: 50,
	},
	visio: {
		title: 'Visio-conférence Zoom',
		price: 50,
	},
	private: {
		title: 'Cours particuliers',
		price: 50,
		description: 'Dirigés par Laoshi Shaman. Pour les non adhérents, ajoutez 10€.',
	},
	meditation: {
		title: 'Méditation',
		price: 5,
		description: 'Guidée le samedi',
	},
	samedi: {
		title: 'Samedi',
		price: 5,
		description: "Cours collectif pour tous d'une heure",
	},
};

export const pricesCards = [
	{
		title: 'Shaoling Kids',
		subtitle: 'Entre 7 et 11 ans',
		price: 193,
		content: ['1 cours par semaine', 'Licence fédérale'],
		options: ['tenue'],
	},
	{
		title: 'Premium',
		subtitle: 'À partir de 12 ans et de la 3ème année',
		price: 343,
		content: ['Tous les cours', 'Licence fédérale'],
		options: ['tenue', 'licence', 'visio'],
	},
	{
		title: 'Découverte',
		subtitle: 'À partir de 12 ans',
		price: 233,
		content: ['1 cours par semaine', 'Licence fédérale'],
		options: ['tenue', 'cours', 'licence', 'visio'],
	},
	{
		title: 'À distance',
		subtitle: 'Visio-conférence Zoom',
		price: 100,
		content: ['Tous les cours'],
		options: [],
	},
];
